import { motion } from "framer-motion";
import React from "react";
import ReactPlayer from "react-player";
import { Details, Result } from "../../typings";
import TrailerSkeleton from "../skeletons/TrailerSkeleton";

type Props = {
  movieTrailer: any;
  movieDetails: Details | undefined;
};

const Trailer = ({ movieTrailer, movieDetails }: Props) => {
  return (
    <div className="">
      <h1 className="text-start text-3xl font-bold text-white">
        Videos |{" "}
        {movieDetails?.title ||
          movieDetails?.name ||
          movieDetails?.original_name}
      </h1>
      <div className="md:space-x-1.0 flex h-[350px] items-center space-x-0.5 overflow-y-hidden overflow-x-scroll scrollbar-hide md:p-2">
        {movieTrailer?.results ? (
          <>
            {movieTrailer?.results?.map((trailer: Result) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                key={trailer.id}
                className="relative h-[300px] w-[500px] min-w-[180px] cursor-pointer items-center rounded-md px-2 py-2 ease-out hover:shadow-lg md:h-[300px] md:min-w-[500px]"
              >
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${trailer.key}`}
                  width="100%"
                  height="100%"
                  playing={false}
                  muted={false}
                />
                <p className="text-xl">{trailer.name}</p>
              </motion.div>
            ))}
          </>
        ) : (
          <>
            <TrailerSkeleton />
            <TrailerSkeleton />
            <TrailerSkeleton />
            <TrailerSkeleton />
          </>
        )}
      </div>
    </div>
  );
};

export default Trailer;
