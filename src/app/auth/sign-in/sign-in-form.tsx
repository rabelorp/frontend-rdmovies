'use client';

import { routes } from '@config/routes';
import { Form } from '@molecules/form';
import { loginSchema, LoginSchema } from '@validators/login.schema';
import { signIn, SignInResponse } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { PiArrowRightBold } from 'react-icons/pi';
import { Button, Checkbox, Input, Password, Text } from 'rizzui';

const initialValues: LoginSchema = {
  email: 'user@rabelodigital.com',
  password: 'secret',
  rememberMe: true,
};
export default function SignInForm() {
  const [reset, setReset] = useState({});
  const [error, setError] = useState<string | null>(null);

  const t = useTranslations('Login');

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    setError(null);

    const result: SignInResponse | undefined = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result && result.error) {
      setError(result.error);
    } else if (result && result.ok) {
      setReset({ email: '', password: '', rememberMe: false });
      window.location.href = '/home';
    }
  };

  return (
    <>
      <Form<LoginSchema>
        validationSchema={loginSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          mode: 'onChange',
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="space-y-5">
            {error && <div style={{ color: 'red' }}>{error} </div>}{' '}
            <Input
              type="email"
              size="lg"
              label={t('email')}
              placeholder="Digite seu e-mail"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              {...register('email')}
              error={errors.email?.message}
            />
            <Password
              label={t('password')}
              placeholder="Digite sua senha"
              size="lg"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              {...register('password')}
              error={errors.password?.message}
            />
            <div className="flex items-center justify-between pb-2">
              <Checkbox
                {...register('rememberMe')}
                label={t('rememberMe')}
                variant="flat"
                className="[&>label>span]:font-medium"
              />

              <Link
                href={routes.auth.forgotPassword}
                className="h-auto p-0 text-sm font-semibold text-blue underline transition-colors hover:text-gray-900 hover:no-underline"
              >
                {t('forgotPassword')}
              </Link>
            </div>
            <Button className="w-full" type="submit" size="lg">
              <span>{t('signIn')}</span>{' '}
              <PiArrowRightBold className="ms-2 mt-0.5 h-6 w-6" />
            </Button>
          </div>
        )}
      </Form>

      <Text className="mt-6 text-center leading-loose text-gray-500 lg:mt-8 lg:text-start">
        Ainda não tem conta?{' '}
        <Link
          href={routes.auth.signUp}
          className="font-semibold text-gray-700 transition-colors hover:text-blue"
        >
          Inscreva-se!
        </Link>
      </Text>
    </>
  );
}
