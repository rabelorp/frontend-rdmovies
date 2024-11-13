import Request from '@services/http-services';

export async function SignUp(
  firstName: string,
  lastName: string,
  email: string,
  password: string,
) {
  try {
    const config = {
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/email/register`,
      data: { firstName, lastName, email, password },
    };
    const response = await Request.post(config.url, config.data);
    return {
      ok: true,
      status: response.status,
    };
  } catch (error: any) {
    if (!error.response) {
      return {
        resultError:
          'Falha na conexão com o servidor. Tente novamente mais tarde.',
      };
    }
    if (
      error.response.status === 422 &&
      error.response.data.errors?.email === 'emailAlreadyExists'
    ) {
      return { resultError: 'Este e-mail já está registrado!' };
    }
    if (error.response.status === 500) {
      return { resultError: 'Erro interno do servidor' };
    }
  }
}
