import { getResources } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useMany = (options: {
  resource: string;
  args?: Record<string, string>;
  queryOptions?: {
    staleTime?: number;
    cacheTime?: number;
    refetchOnWindowFocus?: boolean;
    refetchOnMount?: boolean;
    refetchOnReconnect?: boolean;
    refetchInterval?: number;
    retry?: boolean | number;
    retryDelay?: number;
    enabled?: boolean;
  };
}) => {
  const queryKey = options?.args
    ? [`get_${options.resource}s`, options?.args]
    : [`get_${options.resource}s`];

  const getResult = useQuery(
    queryKey,
    async () =>
      getResources({
        resource: options.resource,
        args: options.args,
      }),
    options.queryOptions || {}
  );

  return getResult;
};
