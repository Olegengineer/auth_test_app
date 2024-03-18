import styled, { keyframes } from 'styled-components';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/use-auth';
import AuthContainer from '../../components/AuthContainer';

const LoginWithContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 30px;
`;

const LineContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  span {
    font-size: 12px;
    color: #bec5cc;
    margin: 0 5px;
  }
`;

const Line = styled.div`
  width: 100%;
  display: block;
  border: 0.5px solid #e2e6e9;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 25px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const InputWrapper = styled.div`
  display: ${({ display }) => (display ? 'inherit' : 'none')};
  opacity: ${({ display }) => (display ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;
  animation: ${({ display }) => (display ? fadeIn : 'none')} 0.5s ease-in-out;
`;

const Restore = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: #316fea;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 30px;
`;

const SubText = styled.div`
  color: #060e1e;
  font-size: 14px;
  margin-top: 16px;
`;

const LoginPage = () => {
  const { email, isValidEmail, error, handleLogin, handleChangeValue } = useAuth();

  return (
    <AuthContainer title="Log in to your account">
      <LoginWithContainer>
        <Button icon="/google.svg" name="Google" />
        <Button icon="/github.svg" name="Github" />
      </LoginWithContainer>
      <LineContainer>
        <Line />
        <span>OR</span>
        <Line />
      </LineContainer>
      <InputsContainer>
        <Input
          name="email"
          type="text"
          value={email}
          onChange={handleChangeValue}
          placeholder="Work email"
          error={error.field === 'email'}
        />
        <InputWrapper display={isValidEmail}>
          <Input
            name="password"
            type="password"
            onChange={handleChangeValue}
            placeholder="Password"
            error={error.field === 'password'}
          />
        </InputWrapper>
      </InputsContainer>
      {/* TODO: create trigger for api errors regarding password */}
      {error.field === 'password' && (
        <Restore>
          <Link to="/forgot">Forgot your password?</Link>
        </Restore>
      )}
      <Button onClick={handleLogin} primary="true" name="Log in to Qencode" />
      <SubText>
        Is your company new to Qencode? <Link to="/create">Sign up</Link>
      </SubText>
    </AuthContainer>
  );
};

export default LoginPage;
