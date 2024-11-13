/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-useless-fragment */
import { menuItems } from '@layouts/main/menu-items';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import { cn } from 'rizzui';

/** ESTE COMPONENTE DEVE SER REFATORADO - RABELO */
export function SidebarMenu() {
  const pathname = usePathname();

  return (
    <div className="mt-4 pb-3 3xl:mt-6">
      {menuItems.map((item, index) => {
        const isActive = pathname === (item?.href as string);
        const pathnameExistInDropdowns: any = item?.dropdownItems?.filter(
          (dropdownItem) => dropdownItem.href === pathname,
        );
        const isDropdownOpen = Boolean(pathnameExistInDropdowns?.length);

        return (
          <Fragment key={`${item.name}-${index}`}>
            {item?.href && (
              <>
                <Link
                  href={item?.href}
                  className={cn(
                    'group relative flex items-center justify-center rounded-md py-2 text-sm font-medium',
                  )}
                >
                  <div className="flex items-center">
                    {item?.icon && (
                      <span className={cn('flex items-center justify-center')}>
                        {item?.icon}
                      </span>
                    )}
                  </div>
                </Link>
              </>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
