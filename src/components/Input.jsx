import { useState } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const InputField = styled.input`
  width: calc(100% - 28px);
  padding: 13px;
  color: #060e1e;
  background-color: #fff;
  border: ${(props) => (props.error ? '2px solid red' : '1.2px solid #e2e6e9')};
  border-radius: 6px;
  font-size: 15px;
  box-sizing: border-box

  &::placeholder {
    color: #a1aab5;
  }
  &:focus {
    outline: none;
  }
`;

const Button = styled.img`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  margin-right: 15px;
  width: 15px;
  cursor: pointer;
`;

const InputLabel = styled.span`
  font-size: 15px;
  color: #060e1e;
`;

const Input = (props) => {
  const { type, label } = props;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const isPassword = type === 'password';

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  return (
    <Root>
      {label ? <InputLabel>{label}</InputLabel> : null}
      <InputContainer>
        <InputField {...props} type={isPassword ? (passwordVisible ? 'text' : 'password') : type} />
        {isPassword && (
          <Button onClick={togglePasswordVisibility} src="/eye.svg" alt="Show Password" />
        )}
      </InputContainer>
    </Root>
  );
};

export default Input;
