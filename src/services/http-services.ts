import axios from 'axios';

import { getSession } from 'next-auth/react';

const Request = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
  timeout: 5000,
});

Request.interceptors.request.use(async (config) => {
  const session = await getSession();

  if (session && !config.url?.includes('/login')) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${session.accessToken}`;
  }
  return config;
});

export default Request;

export async function request(config) {
  const response = await axios(config);
  return response;
}
