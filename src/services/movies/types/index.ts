export interface Category {
  id: string;
  name: string;
}

export interface Photo {
  id: string;
  path: string;
}

export interface MoviesData {
  category: Category;
  releaseDate: string;
  photo: Photo;
  description: string;
  title: string;
  directors: string[];
  actors: string[];
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface MovieResponse {
  data: MoviesData[];
  hasNextPage: boolean;
}
