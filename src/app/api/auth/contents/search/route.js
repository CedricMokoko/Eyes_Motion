import { getMovieByPath } from "@/utils/movieClient";
//Backend
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  //Ici on appelle la route de TMDB avec un new parametre qui è la parametre query
  const searchResults = await getMovieByPath("/search/movie", [
    {
      key: "query",
      value: query,
    },
  ]);
  return new Response(JSON.stringify(searchResults), { status: 200 });
}
