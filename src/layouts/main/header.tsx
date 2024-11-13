'use client';

import HeaderMenuRight from '@layouts/header-menu-right';
import StickyHeader from '@layouts/sticky-header';

export default function Header() {
  return (
    <StickyHeader className="z-[990] 2xl:py-5 3xl:px-8 4xl:px-10">
      <HeaderMenuRight />
    </StickyHeader>
  );
}
