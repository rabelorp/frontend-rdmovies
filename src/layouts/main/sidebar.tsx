'use client';

import SimpleBar from '@atoms/bar';
import Logo from '@atoms/logo';
import Link from 'next/link';
import { cn } from 'rizzui';
import { SidebarMenu } from './sidebar-menu';

export default function Sidebar({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        'fixed z-50 h-full w-[72px] bg-zinc-100 p-4 dark:bg-gray-100/50',
        className,
      )}
    >
      <div className="flex justify-center">
        <Link href="/" aria-label="Site Logo" className="pt-4">
          <Logo />
        </Link>
      </div>

      <div className="mt-4 border-t bg-gray-500" />

      <SimpleBar>
        <SidebarMenu />
      </SimpleBar>
    </aside>
  );
}
