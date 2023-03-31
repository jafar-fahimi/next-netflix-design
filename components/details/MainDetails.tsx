import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Details } from "../../typings";
import BannerDetailsSkeleton from "../skeletons/BannerDetailsSkeleton";
import ImageSkeleton from "../skeletons/ImageSkeleton";

const baseUrl = "https://image.tmdb.org/t/p/original";

type Props = { movieDetails: Details | undefined };

// is called in DetailsFeed
const MainDetails = ({ movieDetails }: Props) => {
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 lg:pl-24">
      <div className="absolute top-0 left-0 -z-10 h-[100vh] w-screen">
        {movieDetails?.backdrop_path || movieDetails?.poster_path ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src={`${baseUrl}/${
                movieDetails?.backdrop_path || movieDetails?.poster_path
              }`}
              alt={
                movieDetails?.title ||
                movieDetails?.name ||
                movieDetails?.original_name!
              }
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        ) : (
          <ImageSkeleton />
        )}

        <div className="absolute bottom-0 z-20 h-32 w-full bg-gradient-to-t from-gray-800 to-transparent" />
      </div>

      {movieDetails?.title ||
      movieDetails?.name ||
      movieDetails?.original_name ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
            {movieDetails?.title ||
              movieDetails?.name ||
              movieDetails?.original_name}
          </h1>
          <p className="py-6 text-sm font-semibold">
            Release Date: {movieDetails.release_date}
          </p>
          <p className="max-w-xs text-xs line-clamp-5 text-shadow-md md:max-w-xl md:text-lg lg:max-w-2xl">
            {movieDetails?.overview}
          </p>
        </motion.div>
      ) : (
        <BannerDetailsSkeleton />
      )}
    </div>
  );
};

export default MainDetails;
