const useHeaders = () => {
  // return auth header with token
  const token = localStorage.getItem('access_token');

  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        credentials: 'include'
      }
    : { 'Content-Type': 'application/json' };

  return headers;
};

export default useHeaders;
