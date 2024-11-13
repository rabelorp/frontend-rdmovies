import WishlistButton from '@molecules/wishlist';
import { MoviesData } from '@services/movies/types';
import cn from '@utils/class-names';
import Image from 'next/image';
import Link from 'next/link';
import { PiStarFill } from 'react-icons/pi';
import { Text, Title } from 'rizzui';

export function RatingsCount({
  rating,
  totalRatings,
}: Readonly<{
  rating: number;
  totalRatings?: number;
}>) {
  return (
    <Text
      as="span"
      className="inline-flex w-[100px] flex-shrink-0 items-center justify-end gap-1 text-sm text-gray-900"
    >
      <PiStarFill className="h-3.5 w-3.5 text-gray-900" />
      {rating}
      {totalRatings && ` (${totalRatings})`}
    </Text>
  );
}

export default function ListingCard({
  movie,
}: Readonly<{ movie: MoviesData }>) {
  const {
    ratings,
    category,
    releaseDate,
    photo,
    description,
    title,
    directors,
    actors,
    id,
  } = movie;

  return (
    <div className={cn()}>
      <div className="relative">
        <div className="relative mx-auto aspect-[91/75] w-full overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={photo.path}
            alt={title}
            fill
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw"
            className="h-full w-full object-cover"
          />
        </div>
        <WishlistButton className="absolute end-3 top-3" />
      </div>
      <div className="pt-3">
        <div className="mb-1 flex items-center justify-between">
          <Link
            href="https://rabelodigital.com"
            className="max-w-[calc(100%-120px)] flex-grow"
          >
            <Title
              as="h6"
              className="truncate font-semibold transition-colors hover:text-primary"
            >
              {title}
            </Title>
          </Link>
          <RatingsCount
            rating={ratings.rating}
            totalRatings={ratings.totalRatings}
          />
        </div>

        <Text as="p" className="mb-1 truncate">
          {description}
        </Text>
      </div>
    </div>
  );
}
