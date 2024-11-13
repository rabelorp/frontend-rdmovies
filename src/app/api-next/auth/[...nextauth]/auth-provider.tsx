'use client';

import { SessionProvider } from 'next-auth/react';

export default function AuthProvider({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: any;
}>): React.ReactNode {
  return (
    <SessionProvider session={session} basePath="/api-next/auth">
      {children}
    </SessionProvider>
  );
}
