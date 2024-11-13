import AuthWrapper from '@layouts/auth-layout';

import { metaObject } from '@config/site.config';
import { useTranslations } from 'next-intl';
import SignInForm from './sign-in-form';

export const metadata = {
  ...metaObject('Entrar'),
};

export default function SignIn() {
  const t = useTranslations('Login');

  return (
    <AuthWrapper title={<>{t('signIn')}</>}>
      <SignInForm />
    </AuthWrapper>
  );
}
