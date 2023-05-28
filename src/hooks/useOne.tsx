import { getResource } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useOne = (options: {
  resource: string;
  pathParams?: string[];
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
    ? [`get_${options.resource}`, options.pathParams || [], options?.args]
    : [`get_${options.resource}`, options.pathParams || []];

  const getResult = useQuery(
    queryKey,
    async () =>
      getResource({
        resource: options.resource,
        pathParams: options.pathParams,
        args: options.args,
      }),
    options.queryOptions || {}
  );

  return getResult;
};
