import Request from '@services/http-services';

export async function ForgotPassword(email: string) {
  try {
    const config = {
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/forgot/password`,
      data: { email },
    };
    const response = await Request.post(config.url, config.data);
    return {
      ok: true,
      status: response.status,
      resultSuccessful: 'A senha foi redefinida, confira sua caixa de e-mail!',
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
      error.response.data.errors?.email === 'emailNotExists'
    ) {
      return { resultError: 'Este e-mail não existe!' };
    }
    if (error.response.status === 500) {
      return { resultError: 'Erro interno do servidor' };
    }
  }
}
