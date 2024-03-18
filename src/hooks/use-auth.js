import userStore from '../store/user-store';
import notifierStore from '../store/notifier-store';
import useFetch from './use-fetch';
import useHeaders from './use-headers';
import { ApiRoute } from '../api/routes';
import { useNavigate } from 'react-router-dom';
import useValidation from './use-validation';

const useAuth = () => {
  const { error, isValidEmail, handleValidate } = useValidation();
  const { email, password, setUser } = userStore();
  const { setNotification } = notifierStore();
  const { fetchData } = useFetch();
  const headers = useHeaders();
  const navigate = useNavigate();

  const navigateTo = (link) => navigate(link);

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!handleValidate('email') || !handleValidate('password')) return;

    const requestOptions = {
      headers,
      method: 'POST',
      body: JSON.stringify({ email, password })
    };

    try {
      const data = await fetchData(ApiRoute.Login, requestOptions);

      // We have to login first to check real data response
      // I believe it'll be the same as in api docs.
      localStorage.setItem('access_token', JSON.stringify(data?.user?.access_token));
      localStorage.setItem('refresh_token', JSON.stringify(data?.user?.refresh_token));

      // set user data to user-store.js
    } catch (error) {
      // handle another errors from api or hook
      setNotification('error', error.message);
    }
  };

  const handleRestore = async () => {
    if (!handleValidate('email')) return;

    const requestOptions = {
      headers,
      method: 'POST',
      body: JSON.stringify({ email })
    };

    try {
      await fetchData(ApiRoute.ResetPassword, requestOptions);
      navigate('/reset');
    } catch (error) {
      setNotification('error', error.message);
    }
  };

  const handleReset = async () => {
    if (!handleValidate('newPassword')) return;

    const requestOptions = {
      headers,
      method: 'POST',
      body: JSON.stringify({ secret: '', password })
    };

    try {
      await fetchData(ApiRoute.SetNewPassword, requestOptions);
      setNotification('success', 'New password changed succesfully');
      navigate('/login');
    } catch (error) {
      setNotification('error', error.message);
    }
  };

  const handleChangeValue = (event) => {
    const { name, value } = event.target;
    setUser(name, value);
  };

  return {
    email,
    error,
    isValidEmail,
    navigateTo,
    handleLogin,
    handleRestore,
    handleReset,
    handleChangeValue
  };
};

export default useAuth;
