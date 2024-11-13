export interface Ratings {
  totalRatings: number;
  id: string;
  rating: number;
}
export interface Category {
  id: string;
  name: string;
}

export interface Photo {
  id: string;
  path: string;
}

export interface MoviesData {
  ratings: Ratings;
  category: Category;
  releaseDate: string;
  photo: Photo;
  description: string;
  title: string;
  directors: string[];
  actors: string[];
  id: string;
}

export interface MovieResponse {
  data: MoviesData[];
  hasNextPage: boolean;
}
