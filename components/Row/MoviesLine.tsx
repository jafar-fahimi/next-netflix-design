import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Movie } from "../../typings";
import { motion } from "framer-motion";

type Props = {
  movie: Movie;
  isDetails: Boolean;
  type: "movie" | "tv";
  isfavourite?: boolean;
};

const MoviesLine = ({ movie, isDetails, type, isfavourite }: Props) => {
  const router = useRouter();

  const handleChangePage = () => {
    if (isfavourite) {
      router.push({
        pathname: isDetails
          ? `${process.env.NEXT_PUBLIC_AUTH_URL}/movieDetails/${movie.id}`
          : `movieDetails/${movie.id}`,
        query: {
          movieId: movie.id.toString(),
          type: movie?.title ? "movie" : "tv",
        },
      });
    } else {
      router.push({
        pathname: isDetails
          ? `${process.env.NEXT_PUBLIC_AUTH_URL}/movieDetails/${movie.id}`
          : `movieDetails/${movie.id}`,
        query: {
          movieId: movie.id.toString(),
          type: movie.media_type?.toString()
            ? movie.media_type?.toString()
            : type.toString(),
        },
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      onClick={handleChangePage}
      className={
        isDetails
          ? `relative h-28 min-w-[180px] cursor-pointer transition-transform duration-200 ease-out md:h-[200px] md:min-w-[350px] md:hover:scale-105`
          : `relative h-28 min-w-[180px] cursor-pointer transition-transform duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`
      }
    >
      {movie.backdrop_path || movie.poster_path ? (
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          layout="fill"
          className="rounded-sm object-cover md:rounded"
          alt={movie.name}
        />
      ) : (
        <div
          role="status"
          className="animate-pulse space-y-8 md:flex md:items-center md:space-y-0 md:space-x-8"
        >
          <div className="flex h-48 w-full items-center justify-center rounded bg-gray-300 dark:bg-gray-700 sm:w-96">
            <svg
              className="h-12 w-12 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default MoviesLine;