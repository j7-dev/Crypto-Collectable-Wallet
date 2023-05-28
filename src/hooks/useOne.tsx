import { getResource } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useOne = (options: {
  resource: string;
  id: number;
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
    ? [`get_${options.resource}`, options?.args]
    : [`get_${options.resource}`];

  const getResult = useQuery(
    queryKey,
    async () =>
      getResource({
        resource: options.resource,
        id: options.id,
        args: options.args,
      }),
    options.queryOptions || {}
  );

  return getResult;
};
