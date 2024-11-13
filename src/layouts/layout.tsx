'use client';

import { useIsMounted } from '@hooks/use-is-mounted';
import HydrogenLayout from '@layouts/main';

type LayoutProps = {
  children: React.ReactNode;
};

function LayoutProvider({ children }: Readonly<LayoutProps>) {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return <HydrogenLayout>{children}</HydrogenLayout>;
}

export default function DefaultLayout({ children }: Readonly<LayoutProps>) {
  return <LayoutProvider>{children}</LayoutProvider>;
}
