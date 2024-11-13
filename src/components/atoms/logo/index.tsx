import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      data-test="icon"
      src="/images/logo-rdmovies.svg"
      alt="RDMovies"
      width="40"
      height="36"
    />
  );
}
