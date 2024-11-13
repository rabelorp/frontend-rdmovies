import { ROLES } from '@config/constants';
import { SignIn } from '@services/auth/sign-in';
import { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { pagesOptions } from './pages-options';

export const authOptions: NextAuthOptions = {
  // debug: true,
  pages: {
    ...pagesOptions,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, accessToken: user.token };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        accessToken: token.accessToken,
      };
    },
  },

  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: any) {
        try {
          const user = await SignIn(
            credentials.email,
            JSON.parse(JSON.stringify(credentials.password)),
          );

          if (user.user?.role.id === ROLES.user) {
            throw new Error(
              'Somente administradores podem acessar esse recurso',
            );
          }
          return user;
        } catch (error: any) {
          throw new Error(error.message);
        }
      },
    }),
  ],
};
