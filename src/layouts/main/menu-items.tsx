import homeIcon from '@public/icons/home.svg';
import Image from 'next/image';

export const menuItems = [
  {
    name: 'Menu',
  },
  {
    name: 'Home',
    href: '/home',
    icon: <Image src={homeIcon} alt="home" />,
  },
];
