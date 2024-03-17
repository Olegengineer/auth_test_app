const useHeaders = () => {
  // return auth header with jwt token
  const token = localStorage.getItem('token');

  const headers = token
    ? { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
    : { 'Content-Type': 'application/json' };

  return headers;
};

export default useHeaders;
