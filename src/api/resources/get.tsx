import { axios } from "@/api";
import { apiUrl } from "@/utils";

export const getResource = async ({
  resource,
  pathParams = [],
  args = {},
}: {
  resource: string;
  pathParams?: string[];
  args?: Record<string, string>;
}) => {
  const getResult = await axios.get(
    `${apiUrl}/${resource}/${pathParams.join("/")}?${new URLSearchParams(
      args
    ).toString()}`
  );

  return getResult;
};

export const getResources = async ({
  resource,
  args = {},
}: {
  resource: string;
  args?: Record<string, string>;
}) => {
  const getResult = await axios.get(
    `${apiUrl}/${resource}s/?${new URLSearchParams(args).toString()}`
  );

  return getResult;
};
