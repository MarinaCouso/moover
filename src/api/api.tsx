import { API_KEY } from "../constants";

export const getMoviesFromApi = async (query: string) => {
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
  try {
    const response = await fetch(apiUrl);
    const json = await response.json();
    const data = {
      ...json,
      totalPages: json.total_pages,
      totalResults: json.total_results,
      success: true,
    };
    return data;
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};
