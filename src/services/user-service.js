import useFetch from '../hooks/use-fetch';
import useHeaders from '../hooks/use-headers';

export const login = () => {
  const headers = useHeaders();
  const { fetchData } = useFetch();

  return fetchData(ApiRoute.Login, headers);
};
