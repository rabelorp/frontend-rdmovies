'use client';

import ListingCard from '@molecules/cards/listing-card';
import { getMoviesService } from '@services/movies';
import { MovieResponse } from '@services/movies/types';
import { useEffect, useState } from 'react';
import { Button } from 'rizzui';
// Note: using shuffle to simulate the filter effect

const countPerPage = 12;

export default function MoviesView() {
  const [isLoading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(countPerPage);
  const [moviesData, setMoviesData] = useState<MovieResponse | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMoviesService();
        setMoviesData(data);
      } catch (error) {
        // erros
      }
    };

    fetchMovies();
  }, []);

  function handleLoadMore() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setNextPage(nextPage + countPerPage);
    }, 600);
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-x-5 gap-y-6 @md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] @xl:gap-x-7 @xl:gap-y-9 @4xl:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] @6xl:grid-cols-[repeat(auto-fill,minmax(364px,1fr))]">
        {moviesData?.data?.map((movieData) => (
          <ListingCard key={`filterMovie-${movieData.id}`} movie={movieData} />
        ))}
      </div>

      {nextPage < (moviesData?.data?.length ?? 0) && (
        <div className="mb-4 mt-5 flex flex-col items-center xs:pt-6 sm:pt-8">
          <Button isLoading={isLoading} onClick={() => handleLoadMore()}>
            Carregar mais
          </Button>
        </div>
      )}
    </>
  );
}
