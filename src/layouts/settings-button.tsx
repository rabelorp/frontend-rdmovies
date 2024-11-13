'use client';

import CogSolidIcon from '@atoms/icons/cog-solid';
import { usePresets } from '@config/color-presets';
import DrawerHeader from '@layouts/drawer-header';
import {
  useApplyColorPreset,
  useColorPresets,
} from '@layouts/settings/use-theme-color';
import { useDrawer } from '@organisms/drawer-views/use-drawer';
import cn from '@utils/class-names';
import dynamic from 'next/dynamic';
import { ActionIcon } from 'rizzui';

const SettingsDrawer = dynamic(() => import('@layouts/settings-drawer'), {
  ssr: false,
});

export default function SettingsButton({
  className,
  children,
}: Readonly<{
  className?: string;
  children?: React.ReactNode;
}>) {
  const COLOR_PRESETS = usePresets();
  const { openDrawer, closeDrawer } = useDrawer();

  const { colorPresets } = useColorPresets();

  useApplyColorPreset<any>(colorPresets ?? COLOR_PRESETS[0].colors);

  return (
    <div>
      <ActionIcon
        aria-label="Settings"
        variant="text"
        className={cn(
          'relative h-[34px] w-[34px] shadow backdrop-blur-md dark:bg-gray-100 md:h-9 md:w-9',
          className,
        )}
        onClick={() =>
          openDrawer({
            view: (
              <>
                <DrawerHeader onClose={closeDrawer} />
                <SettingsDrawer />
              </>
            ),
            placement: 'right',
            containerClassName: 'max-w-[420px]',
          })
        }
      >
        {children || (
          <CogSolidIcon
            strokeWidth={1.8}
            className="animate-spin-slow h-[22px] w-auto"
          />
        )}
      </ActionIcon>
    </div>
  );
}