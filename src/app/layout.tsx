import { authOptions } from '@api/auth/[...nextauth]/auth-options';
import AuthProvider from '@api/auth/[...nextauth]/auth-provider';
import NextProgress from '@atoms/next-progress';
import { siteConfig } from '@config/site.config';
import { ThemeProvider } from '@layouts/theme-provider';
import GlobalDrawer from '@organisms/drawer-views';
import GlobalModal from '@organisms/modal-views/container';
import { inter, lexendDeca } from '@styles/fonts';
import '@styles/globals.css';
import cn from '@utils/class-names';
import { Provider } from 'jotai';
import { getServerSession } from 'next-auth/next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import ReactQueryProvider from 'src/providers/ReactQueryProvider';

import '../env';

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  const messages = await getMessages();

  const session = await getServerSession(authOptions);
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(inter.variable, lexendDeca.variable, 'font-inter')}
        suppressHydrationWarning
      >
        <ReactQueryProvider>
          <NextIntlClientProvider messages={messages}>
            <AuthProvider session={session}>
              <ThemeProvider>
                <Provider>
                  <NextProgress />
                  {children}
                  <ToastContainer />
                  <GlobalDrawer />
                  <GlobalModal />
                </Provider>
              </ThemeProvider>
            </AuthProvider>
          </NextIntlClientProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
