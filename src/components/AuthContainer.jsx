import styled from 'styled-components';
import Logo from './Logo';

const Container = styled.div`
  min-width: 400px;
  display: flex;
  flex-direction: column;
  color: #1a1919;
  font-size: 24px;
  @media (max-width: 400px) {
    min-width: 300px;
  }
`;

const Title = styled.div`
  color: #1a1919;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 41px;
`;

const AuthContainer = ({ title, children }) => {
  return (
    <Container>
      <Logo />
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default AuthContainer;
