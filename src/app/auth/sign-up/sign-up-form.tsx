'use client';

import { routes } from '@config/routes';
import { Form } from '@molecules/form';
import { SignUp } from '@services/auth/sign-up';
import { SignUpSchema, signUpSchema } from '@validators/signup.schema';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { PiArrowRightBold } from 'react-icons/pi';
import { Button, Checkbox, Input, Password, Text } from 'rizzui';

const initialValues = {
  firstName: 'Robson',
  lastName: 'Rabelo',
  email: 'user@rabelodigital.com',
  password: 'Secret1',
  confirmPassword: 'Secret1',
  isAgreed: true,
};

export default function SignUpForm() {
  const [reset, setReset] = useState({});
  const [error, setError] = useState<string | null>(null);

  const t = useTranslations('Login');

  const onSubmit: SubmitHandler<SignUpSchema> = async (data) => {
    setError(null);
    const result = await SignUp(
      data.firstName,
      data.lastName,
      data.email,
      data.password,
    );

    if (result && result.resultError) {
      setError(result.resultError);
    } else if (result && result.ok) {
      setReset({ ...initialValues, isAgreed: false });
      window.location.href = '/auth/sign-in';
    }
  };

  return (
    <>
      <Form<SignUpSchema>
        validationSchema={signUpSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="flex flex-col gap-x-4 gap-y-5 md:grid md:grid-cols-2 lg:gap-5">
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <Input
              type="text"
              size="lg"
              label="Primeiro nome"
              placeholder="Digite seu primeiro nome"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              {...register('firstName')}
              error={errors.firstName?.message}
            />
            <Input
              type="text"
              size="lg"
              label="Sobrenome"
              placeholder="Digite seu sobrenome"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              {...register('lastName')}
              error={errors.lastName?.message}
            />
            <Input
              type="email"
              size="lg"
              label={t('email')}
              className="col-span-2 [&>label>span]:font-medium"
              inputClassName="text-sm"
              placeholder="Digite seu e-mail"
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
            />{' '}
            <Password
              label="Confirme sua senha"
              placeholder="Confirme sua senha"
              size="lg"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm"
              {...register('confirmPassword')}
              error={errors.confirmPassword?.message}
            />
            <div className="col-span-2 flex items-start">
              <Checkbox
                {...register('isAgreed')}
                error={errors.isAgreed?.message}
                className="[&>label>span]:font-medium [&>label]:items-start"
                label={
                  <>
                    Você está de acordo com os nossos{' '}
                    <Link
                      href="/"
                      className="font-medium text-blue transition-colors hover:underline"
                    >
                      Termos de uso
                    </Link>{' '}
                    e{' '}
                    <Link
                      href="/"
                      className="font-medium text-blue transition-colors hover:underline"
                    >
                      Política de privacidade?
                    </Link>
                  </>
                }
              />
            </div>
            <Button size="lg" type="submit" className="col-span-2 mt-2">
              <span>Cadastrar</span>{' '}
              <PiArrowRightBold className="ms-2 mt-0.5 h-5 w-5" />
            </Button>
          </div>
        )}
      </Form>
      <Text className="mt-6 text-center leading-loose text-gray-500 lg:mt-8 lg:text-start">
        Você já tem uma conta?{' '}
        <Link
          href={routes.auth.signIn}
          className="font-semibold text-gray-700 transition-colors hover:text-blue"
        >
          {t('signIn')}
        </Link>
      </Text>
    </>
  );
}
