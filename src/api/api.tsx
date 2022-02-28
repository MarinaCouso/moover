import { API_KEY } from "../constants";

export const getMoviesFromApi = async (query: string) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );
    const json = await response.json();
    return json.results;
  } catch (error) {
    console.error(error);
  }
};
