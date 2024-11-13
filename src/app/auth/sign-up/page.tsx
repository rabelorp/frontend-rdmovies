import UnderlineShape from '@atoms/shape/underline';
import { metaObject } from '@config/site.config';
import AuthWrapper from '@layouts/auth-layout';
import { useTranslations } from 'next-intl';
import SignUpForm from './sign-up-form';

export const metadata = {
  ...metaObject('Cadastre-se'),
};

export default function SignUp() {
  const t = useTranslations('Login');

  return (
    <AuthWrapper
      title={
        <>
          Junte-se ao nosso cinema,{' '}
          <span className="relative inline-block">
            Cadastre-se!
            <UnderlineShape className="absolute -bottom-2 start-0 h-2.5 w-28 text-blue xl:-bottom-1.5 xl:w-36" />
          </span>
        </>
      }
    >
      <SignUpForm />
    </AuthWrapper>
  );
}
