import { useState } from 'react';
import notifierStore from '../store/notifier-store';

const handleResponse = (response) => {
  // here we can implement trigger for logout when token expired.
  // if (response.status === 401) {
  //   return Promise.reject({ message: 'Authentication error!' });
  // }

  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      // TODO: create handler for possible errors.
      // note: it's not a good vibe to show backend errors on the frontend side.
      const error = (data && data?.detail[0]?.error) || (data && data?.detail);
      return Promise.reject({ message: JSON.stringify(error) });
    }

    return data;
  });
};

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setNotification } = notifierStore();

  const fetchData = async (route, requestOptions) => {
    setLoading(true);

    if (!route) {
      setNotification('error', 'Check your api configuration');
      return;
    }

    try {
      const response = await fetch(route, requestOptions);
      const result = await handleResponse(response);
      setData(result);
    } catch (error) {
      setLoading(false);
      setError(error);
      throw new Error(error.message);
    }
  };

  return { data, loading, error, fetchData };
};

export default useFetch;
