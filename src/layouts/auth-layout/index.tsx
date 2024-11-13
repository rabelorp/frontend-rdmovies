'use client';

import { Text, Title } from 'rizzui';

export default function AuthWrapper({
  children,
  title,
  description,
}: Readonly<{
  children: React.ReactNode;
  title: React.ReactNode;
  description?: string;
  bannerTitle?: string;
  bannerDescription?: string;
}>) {
  return (
    <div className="min-h-screen items-center justify-center gap-x-8 px-4 py-8 pt-10 md:pt-12 lg:flex lg:p-6 xl:gap-x-10 xl:p-7 2xl:p-10 2xl:pt-10 [&>div]:min-h-[calc(100vh-80px)]">
      <div className="relative flex w-full items-center justify-center lg:w-6/12 2xl:justify-end 2xl:pe-24">
        <div className="w-full max-w-sm md:max-w-md lg:py-7 lg:ps-3 lg:pt-16 2xl:w-[630px] 2xl:max-w-none 2xl:ps-20 2xl:pt-7">
          <div className="mb-7 px-6 pt-3 text-center md:pt-0 lg:px-0 lg:text-start xl:mb-8 2xl:mb-10">
            <Title
              as="h2"
              className="mb-5 text-[26px] leading-snug md:text-3xl md:!leading-normal lg:mb-7 lg:pe-16 lg:text-[28px] xl:text-3xl 2xl:pe-8 2xl:text-4xl"
            >
              {title}
            </Title>
            <Text className="leading-[1.85] text-gray-700 md:leading-loose lg:pe-8 2xl:pe-14">
              {description}
            </Text>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
