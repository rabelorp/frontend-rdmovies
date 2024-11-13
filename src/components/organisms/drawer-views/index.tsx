'use client';

import cn from '@utils/class-names';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { Drawer } from 'rizzui';
import { useDrawer } from './use-drawer';

export default function GlobalDrawer() {
  const { isOpen, view, placement, containerClassName, closeDrawer } =
    useDrawer();
  const pathname = usePathname();
  useEffect(() => {
    closeDrawer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Drawer
      isOpen={isOpen}
      onClose={() => {
        closeDrawer();
      }}
      placement={placement}
      overlayClassName="dark:bg-opacity-40 dark:backdrop-blur-md"
      containerClassName={cn(
        'min-w-[320px] max-w-[420px] dark:bg-gray-100 overflow-auto rounded-s-3xl',
        containerClassName,
      )}
      className="z-[5000]"
    >
      {view}
    </Drawer>
  );
}
