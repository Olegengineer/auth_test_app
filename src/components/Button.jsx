import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? '192px' : '100%')};
  height: 48px;
  font-size: 14px;
  color: ${(props) => (props.primary ? '#fff' : '#060e1e')};
  background: ${(props) => (props.primary ? '#316fea' : '#ffff')};
  border: 1.2px solid #e2e6e9;
  border-radius: 6px;

  span {
    font-size: 14px;
    margin-left: 8px;
  }

  &:focus {
    outline: none;
  }
  &:hover {
    border-color: #d2d4fd;
  }
`;

const Button = ({ name, primary, icon, width, onClick }) => {
  return (
    <StyledButton primary={primary} width={width} onClick={onClick}>
      {icon && <img src={icon} alt="icon" />}
      <span>{name}</span>
    </StyledButton>
  );
};

export default Button;
