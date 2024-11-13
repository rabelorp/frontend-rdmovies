'use client';

import { siteConfig } from '@config/site.config';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

export function ThemeProvider({
  children,
}: Readonly<React.PropsWithChildren<{}>>) {
  return (
    <NextThemeProvider
      enableSystem={false}
      defaultTheme={String(siteConfig.mode)}
    >
      {children}
    </NextThemeProvider>
  );
}
