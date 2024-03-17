const apiUrl = import.meta.env.VITE_API_URL;
const apiVersion = 'v1';

const formatUrl = (url) => `${apiUrl}/${apiVersion}/${url}`;

export const ApiRoute = {
  Login: formatUrl('auth/login'),
  AuthToken: formatUrl('auth/access-token'),
  RefreshToken: formatUrl('auth/refresh-token'),
  ResetPassword: formatUrl('auth/password-reset'),
  SetNewPassword: formatUrl('auth/password-set')
};
