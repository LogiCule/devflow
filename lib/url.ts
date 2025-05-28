import qs from "query-string";

interface UrlQueryParams {
  params: string; // The query string parameters as a string
  key: string; // The key to be added or updated in the query
  value: string; // The value to be set for the specified key
}
interface UrlQueryRemoveParams {
  params: string; // The query string parameters as a string
  keysToRemove: string[]; // The key to be added or updated in the query
}

export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  const currUrl = qs.parse(params);
  currUrl[key] = value;
  return qs.stringifyUrl({
    url: window.location.pathname,
    query: currUrl,
  });
};
export const removeKeysFromQuery = ({
  params,
  keysToRemove,
}: UrlQueryRemoveParams) => {
  const currUrl = qs.parse(params);
  keysToRemove.forEach((key) => {
    delete currUrl[key];
  });
  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currUrl,
    },
    { skipNull: true }
  );
};
