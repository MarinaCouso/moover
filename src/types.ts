export type ApiMovieProps = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type ApiDataProps = {
  totalPages: {};
  totalResults: {};
  success: boolean;
  results: ApiMovieProps[];
  page: number;
};

export type MovieProps = {
  id: number;
  title: string;
  image: string;
  date: string;
};
