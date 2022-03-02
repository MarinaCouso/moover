import { API_KEY, API_URL } from "../constants";
import { ApiDataProps, ApiMovieProps } from "../types";

const parseData = (data: ApiDataProps) => {
  return data.results.map((item: ApiMovieProps) => {
    return {
      id: item.id,
      title: item.title,
      image: item.poster_path,
      date: item.release_date,
    };
  });
};

export const getMoviesFromApi = async (query: string) => {
  const apiUrl = `${API_URL}${API_KEY}&query=${query}`;
  try {
    const response = await fetch(apiUrl);
    const json = await response.json();
    const parsedResults = parseData(json);
    const data = {
      ...json,
      results: parsedResults,
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
