import useFetch from './use-fetch';
import { ApiRoute } from '../api/routes';
import useHeaders from './use-headers';

const useRefresh = () => {
  const headers = useHeaders();
  const { fetchData } = useFetch();

  const refresh = () => {
    const requestOptions = {
      headers,
      method: 'POST'
    };

    const response = fetchData(ApiRoute.RefreshToken, requestOptions);
    // create logic for refresh token if it needed after decoding
    // setAuth(prev => {
    //   return {...prev, accessToken: response.data.access_token}
    // })
    return response.data.access_token;
  };
  return refresh;
};

export default useRefresh;
