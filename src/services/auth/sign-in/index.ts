/* eslint-disable no-console */
import Request from '@services/http-services';

export async function SignIn(email: string, password: string) {
  try {
    const config = {
      url: '/auth/email/login',
      data: {
        email,
        password,
      },
    };
    const response = await Request.post(config.url, config.data);

    return response.data;
  } catch (error: any) {
    if (error.response) {
      if (error.response.status === 422 || error.response.status === 401) {
        throw new Error('Login ou senha incorretos');
      } else {
        throw new Error('Erro interno do servidor');
      }
    } else {
      throw new Error(
        'Falha na conexão com o servidor. Tente novamente mais tarde.',
      );
    }
  }
}
