import { metaObject } from '@config/site.config';
import MoviesView from '@organisms/explore-movies';
import PageHeader from '@organisms/page-header';

export const metadata = {
  ...metaObject('Filmes'),
};

const pageHeader = {
  title: 'Filmes & Series',
  breadcrumb: [
    {
      name: 'Filmes',
    },
  ],
};

export default function RealEstatePage() {
  return (
    <div className="@container">
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <MoviesView />
    </div>
  );
}
