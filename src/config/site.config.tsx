import logoIconImg from '@public/icons/icone-logo-rdmovies.svg';
import logoImg from '@public/images/logo-rdmovies.svg';
import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import { LAYOUT_OPTIONS } from './enums';

enum MODE {
  DARK = 'dark',
  LIGHT = 'light',
}

export const siteConfig = {
  title: 'RDMovies',
  description: 'Os melhores filmes estão aqui!',
  logo: logoImg,
  icon: logoIconImg,
  mode: MODE.LIGHT,
  layout: LAYOUT_OPTIONS.MAIN,
};

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteConfig.description,
): Metadata => {
  return {
    title: title ? `${title} - RDMovies` : siteConfig.title,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title} - RDMovies` : title,
      description,
      url: 'https://rdmovies.com',
      siteName: 'RDMovies',
      images: {
        url: '',
        width: 1200,
        height: 630,
      },
      locale: 'pt_BR',
      type: 'website',
    },
  };
};
