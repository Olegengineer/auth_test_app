import notifierStore from '../store/notifier-store';
import styled, { keyframes } from 'styled-components';

const slideInAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Container = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
`;

const Alert = styled.div`
  padding: 10px;
  margin: 10px 10px 0px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => (props.type === 'success' ? '#04b205c2' : '#f50909c7')};
  cursor: pointer;
  animation: ${slideInAnimation} 0.6s ease-in-out forwards;
`;

const Notifier = () => {
  const { notifications, removeNotifications } = notifierStore();

  setTimeout(() => {
    notifications.map((item) => removeNotifications(item.id));
  }, 5000);

  const clearAlert = (id) => removeNotifications(id);

  return (
    <Container>
      {notifications?.length
        ? notifications.map((notification, idx) => (
            <Alert
              key={`${notification?.message}-${idx + 1}`}
              onClick={() => clearAlert(notification.id)}
              type={notification?.type}
            >
              <span>{notification?.message}</span>
            </Alert>
          ))
        : null}
    </Container>
  );
};

export default Notifier;
