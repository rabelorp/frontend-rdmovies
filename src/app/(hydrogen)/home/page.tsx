import { metaObject } from '@config/site.config';
import PageHeader from '@organisms/page-header';
import dynamic from 'next/dynamic';

const MoviesView = dynamic(() => import('@organisms/movies-views'), {
  ssr: false,
});

export const metadata = {
  ...metaObject('Filmes'),
};

const pageHeader = {
  title: 'Filmes',
  breadcrumb: [
    {
      name: 'Home',
      href: 'd',
    },
    {
      name: 'Filmes',
      href: 'd',
    },
  ],
};

export default function EventCalendarPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className="mt-4 flex items-center gap-3 @lg:mt-0">Adicionar</div>
      </PageHeader>

      <MoviesView />
    </>
  );
}
