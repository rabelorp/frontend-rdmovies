/* eslint-disable react/button-has-type */

'use client';

import { routes } from '@config/routes';
import cn from '@utils/class-names';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Avatar, Button, Popover, Text, Title } from 'rizzui';
import userMeStore from 'src/store/user-me';

function ProfileMenuPopover({
  children,
}: Readonly<React.PropsWithChildren<{}>>) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Popover
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      shadow="sm"
      placement="bottom-end"
    >
      {children}
    </Popover>
  );
}

const menuItems = [
  {
    name: 'Meu perfil',
    href: routes.profile,
  },
];

function DropdownMenu() {
  const { userMe } = userMeStore();

  return (
    <div className="w-64 text-left rtl:text-right">
      <div className="flex items-center border-b border-gray-300 px-6 pb-5 pt-6">
        <Avatar
          src="https://media.licdn.com/dms/image/v2/C4E03AQF60LxoZaWycw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1605376087468?e=2147483647&v=beta&t=ck1Ea7rD3tfMRMrudN-4OI84dyuJSkK7o9jt11K-dBI"
          name={`${userMe.firstName} ${userMe.lastName}`}
        />
        <div className="ms-3">
          <Title as="h6" className="font-semibold">
            {`${userMe.firstName} ${userMe.lastName}`}
          </Title>
          <Text className="text-gray-600">{userMe.email}</Text>
        </div>
      </div>
      <div className="grid px-3.5 py-3.5 font-medium text-gray-700">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="group my-0.5 flex items-center rounded-md px-2.5 py-2 hover:bg-gray-100 focus:outline-none hover:dark:bg-gray-50/50"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="border-t border-gray-300 px-6 pb-6 pt-5">
        <Button
          className="h-auto w-full justify-start p-0 font-medium text-gray-700 outline-none focus-within:text-gray-600 hover:text-gray-900 focus-visible:ring-0"
          variant="text"
          onClick={() => signOut()}
        >
          Sair
        </Button>
      </div>
    </div>
  );
}

export default function ProfileMenu({
  buttonClassName,
  username = false,
}: Readonly<{
  buttonClassName?: string;
  username?: boolean;
}>) {
  const { userMe } = userMeStore();

  return (
    <ProfileMenuPopover>
      <Popover.Trigger>
        <button
          className={cn(
            'w-9 shrink-0 rounded-full outline-none focus-visible:ring-[1.5px] focus-visible:ring-gray-400 focus-visible:ring-offset-2 active:translate-y-px sm:w-10',
            buttonClassName,
          )}
        >
          <Avatar
            src="https://media.licdn.com/dms/image/v2/C4E03AQF60LxoZaWycw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1605376087468?e=2147483647&v=beta&t=ck1Ea7rD3tfMRMrudN-4OI84dyuJSkK7o9jt11K-dBI"
            name={`${userMe.firstName} ${userMe.lastName}`}
            className={cn('!h-9 w-9 sm:!h-10 sm:!w-10', userMe.firstName)}
          />
          {!!username && (
            <span className="username hidden text-gray-200 dark:text-gray-700 md:inline-flex">
              Olá, {userMe.firstName}
            </span>
          )}
        </button>
      </Popover.Trigger>

      <Popover.Content className="z-[9999] p-0 dark:bg-gray-100 [&>svg]:dark:fill-gray-100">
        <DropdownMenu />
      </Popover.Content>
    </ProfileMenuPopover>
  );
}
