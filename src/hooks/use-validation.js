import { useEffect, useState } from 'react';
import userStore from '../store/user-store';
import notifierStore from '../store/notifier-store';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const initialErrorState = { field: null, message: null };

const useValidation = () => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [error, setError] = useState(initialErrorState);
  const { email, password, newPassword, passwordConfirmation } = userStore();
  const { setNotification } = notifierStore();

  const validateEmail = (email) => {
    const isValid = emailRegex.test(email);
    setIsValidEmail(isValid);
  };

  useEffect(() => {
    validateEmail(email);
  }, [email]);

  useEffect(() => {
    setError(initialErrorState);
  }, [email, password]);

  const handleValidate = (rule) => {
    let hasError = false;
    switch (rule) {
      case 'email':
        if (!isValidEmail) {
          const message = 'Email is not valid';
          setError({ field: 'email', message });
          setNotification('error', message);
          hasError = true;
        }
        break;
      case 'password':
        if (!password) {
          const message = 'Password cannot be empty';
          setError({ field: 'password', message });
          setNotification('error', message);
          hasError = true;
        }
        break;
      case 'newPassword':
        if (!newPassword) {
          const message = 'Password field cannot be empty';
          setError({ field: 'password', message });
          setNotification('error', message);
          hasError = true;
          return;
        }
        if (!passwordConfirmation) {
          const message = 'Password confirmation field cannot be empty';
          setError({ field: 'password', message });
          setNotification('error', message);
          hasError = true;
          return;
        }
        if (newPassword !== passwordConfirmation) {
          const message = 'Password and password confirmation do not match';
          setError({ field: 'password', message });
          setNotification('error', message);
          hasError = true;
          return;
        }
        break;
      default:
        break;
    }

    return !hasError;
  };

  return {
    error,
    isValidEmail,
    validateEmail,
    handleValidate
  };
};

export default useValidation;
