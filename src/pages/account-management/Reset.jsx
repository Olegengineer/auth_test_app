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

const ResetPage = () => {
  const { error, handleReset, handleChangeValue } = useAuth();

  return (
    <AuthContainer title="Create new Password">
      <InputsContainer>
        <Input
          label="Password"
          name="newPassword"
          type="password"
          onChange={handleChangeValue}
          placeholder="Password"
          error={error.field === 'newPassword'}
        />
        <Input
          label="Confirm Password"
          name="passwordConfirmation"
          type="password"
          onChange={handleChangeValue}
          placeholder="Password"
          error={error.field === 'passwordConfirmation'}
        />
      </InputsContainer>
      <Button onClick={handleReset} primary="true" name="Reset Password" />
    </AuthContainer>
  );
};

export default ResetPage;
