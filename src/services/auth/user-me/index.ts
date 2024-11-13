import Request from '@services/http-services';
import { UserMe } from './types';

export const getUserMeService = async (): Promise<UserMe> => {
  try {
    const response = await Request.get('/auth/me');

    const { data } = response;
    return data;
  } catch (error) {
    throw new Error('Error fetching work stations');
  }
};
