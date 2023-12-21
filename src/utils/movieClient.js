import "server-only";

export const getMovieByPath = (path, params = []) => {
  const url = new URL(`${process.env.TMDB_API_URL}${path}`);
  url.searchParams.append("api_key", process.env.TMDB_API_KEY);
  params
    .filter((param) => param.value)
    .forEach((param) => {
      url.searchParams.append(param.key, param.value);
    });

  return fetch(url).then((res) => res.json());
};

export const getHydratedMovies = async (movieIds) => {
  const moviePromises = movieIds.map((movieId) =>
    getMovieByPath(`/movie/${movieId}`, [])
  );
  const movies = await Promise.all(moviePromises);
  return movies;
};

export const getHydratedSeries = async (seriesIds) => {
  const seriePromises = seriesIds.map((serieId) =>
    getMovieByPath(`/tv/${serieId}`, [])
  );
  const series = await Promise.all(seriePromises);
  return series;
};
