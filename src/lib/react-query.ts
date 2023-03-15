import { QueryClient, type QueryFunctionContext, useQuery } from 'react-query';
import { apiClient } from './axios';

type QueryKey = [string, object | undefined];

export const queryClient = new QueryClient();

export const handleFetch = async <T>({ queryKey }: QueryFunctionContext<QueryKey>): Promise<T> => {
  const [url, params] = queryKey;
  const response = await apiClient.get(url, { params });
  return response.data;
};

export const useFetch = <T>(url: string | null, params?: object, enable?: boolean) => {
  const queryContext = useQuery<T, Error, T, QueryKey>(
    [url!, params],
    async ({ queryKey, meta }) => await handleFetch({ queryKey, meta }),
    { enabled: enable },
  );
  return queryContext;
};
