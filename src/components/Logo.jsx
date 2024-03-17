import styled from 'styled-components';

const Root = styled.img`
  width: 178.09px;
  height: 32px;
  align-self: center;
  margin-bottom: 58px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;

  &:hover {
    // padding: 1px;
    width: 184px;
  }
`;

const Logo = () => {
  return <Root src="/logo.svg" alt="Logo" />;
};

export default Logo;
