import Request from '@services/http-services';
import { MovieResponse } from './types';

export const getMoviesService = async (id?: string): Promise<MovieResponse> => {
  try {
    let response: any;
    if (id) {
      response = await Request.get(`/movies/${id}`);
    } else {
      response = await Request.get('/movies/');
    }
    const { data } = response;
    return data;
  } catch (error) {
    throw new Error('Erro ao trazer filmes');
  }
};
