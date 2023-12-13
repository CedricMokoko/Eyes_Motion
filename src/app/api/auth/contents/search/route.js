import { getMovieByPath } from "@/utils/movieClient";
//Backend
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  /*Ici on appelle la route de TMDB avec un new parametre chi est la query
  que lo user digita nell'input cioè il nome del film/serie che vuole trovare*/
  const searchResults = await getMovieByPath("/search/multi", [
    {
      key: "query",
      value: query,
    },
  ]);
  return new Response(JSON.stringify(searchResults), { status: 200 });
}
