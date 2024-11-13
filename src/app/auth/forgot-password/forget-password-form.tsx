'use client';

import { routes } from '@config/routes';
import { Form } from '@molecules/form';
import {
  forgetPasswordSchema,
  ForgetPasswordSchema,
} from '@validators/forget-password.schema';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Button, Input, Text } from 'rizzui';

import { metaObject } from '@config/site.config';
import { ForgotPassword } from '@services/auth/forgot-password';
import { useTranslations } from 'next-intl';

export const metadata = {
  ...metaObject('Redefinir senha'),
};

const initialValues = {
  email: 'user@rabelodigital.com',
};

export default function ForgetPasswordForm() {
  const [error, setError] = useState<any | null>(null);
  const [reset, setReset] = useState({});

  const t = useTranslations('Login');

  const onSubmit: SubmitHandler<ForgetPasswordSchema> = async (data) => {
    setError(null);
    const result = await ForgotPassword(data.email);

    if (result && result.resultError) {
      setError(result.resultError);
    } else if (result && result.ok) {
      setError(result.resultSuccessful);
      setReset({ ...initialValues, isAgreed: false });
    }
  };

  return (
    <>
      <Form<ForgetPasswordSchema>
        validationSchema={forgetPasswordSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          mode: 'onChange',
          defaultValues: initialValues,
        }}
        className="pt-1.5"
      >
        {({ register, formState: { errors } }) => (
          <div className="space-y-6">
            {error && <div style={{ color: 'red' }}>{error}</div>}

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
            <Button className="mt-2 w-full" type="submit" size="lg">
              Redefinir senha
            </Button>
          </div>
        )}
      </Form>
      <Text className="mt-6 text-center text-[15px] leading-loose text-gray-500 lg:mt-8 lg:text-start xl:text-base">
        Não quer redefinir a senha?{' '}
        <Link
          href={routes.auth.signIn}
          className="font-bold text-gray-700 transition-colors hover:text-blue"
        >
          {t('signIn')}
        </Link>
      </Text>
    </>
  );
}
