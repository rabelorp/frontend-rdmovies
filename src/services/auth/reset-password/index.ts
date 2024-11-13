import Request from '@services/http-services';

export async function ResetPassword(password: string, hash: string | null) {
  try {
    const config = {
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/reset/password`,
      data: { password, hash },
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
      error.response.data.errors?.hash === 'invalidHash'
    ) {
      return { resultError: 'Este hash não existe!' };
    }
    if (error.response.status === 500) {
      return { resultError: 'Erro interno do servidor' };
    }
  }
}
