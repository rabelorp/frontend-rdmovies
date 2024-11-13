import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const locale = 'pt-BR';

  return {
    locale,
    messages: (await import(`src/config/messages/${locale}.json`)).default,
  };
});
