import UnderlineShape from '@atoms/shape/underline';
import { metaObject } from '@config/site.config';
import AuthWrapper from '@layouts/auth-layout';
import { useTranslations } from 'next-intl';
import ForgetPasswordForm from './reset-password-form';

export const metadata = {
  ...metaObject('Redefinição de senha'),
};

export default function ForgetPassword() {
  const t = useTranslations('Login');

  return (
    <AuthWrapper
      title={
        <>
          Redefinição de{' '}
          <span className="relative inline-block">
            senha!
            <UnderlineShape className="absolute -bottom-2 end-0 h-2.5 w-28 text-blue xl:-bottom-1.5 xl:w-36" />
          </span>
        </>
      }
    >
      <ForgetPasswordForm />
    </AuthWrapper>
  );
}
