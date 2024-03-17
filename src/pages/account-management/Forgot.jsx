import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useAuth from '../../hooks/use-auth';
import AuthContainer from '../../components/AuthContainer';

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 25px;
`;

const ButtonsWrapper = styled.div`
  height: 116px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ForgotPage = () => {
  const { email, error, handleRestore, handleChangeValue, navigateTo } = useAuth();
  const [mumIHacker, setMumIHacker] = useState(0);

  const procedureRestore = () => {
    setMumIHacker((prev) => prev + 1);
    handleRestore();
  };

  return (
    <AuthContainer title="Forgot Password?">
      <InputsContainer>
        <Input
          name="email"
          type="text"
          value={email}
          onChange={handleChangeValue}
          placeholder="Enter your email"
          error={error.field === 'email'}
        />
      </InputsContainer>
      {mumIHacker > 2 && <Link to="/reset">Go to reset page</Link>}
      <ButtonsWrapper>
        <Button onClick={procedureRestore} primary="true" name="Send" />
        <Button onClick={() => navigateTo('/login')} name="Cancel" />
      </ButtonsWrapper>
    </AuthContainer>
  );
};

export default ForgotPage;
