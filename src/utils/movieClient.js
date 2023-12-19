import "server-only";

export const getMovieByPath = (path, params = []) => {
  const url = new URL(`${process.env.TMDB_API_URL}${path}`);
  url.searchParams.append("api_key", process.env.TMDB_API_KEY);
  params.forEach((param) => {
    url.searchParams.append(param.key, param.value);
  });

  return fetch(url).then((res) => res.json());
};
