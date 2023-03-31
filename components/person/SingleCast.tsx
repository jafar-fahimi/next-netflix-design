import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";

import { CastDataTyping } from "../../typings";
import ImageSkeleton from "../skeletons/ImageSkeleton";

type Props = {
  crewData: CastDataTyping;
  baseUrl: string;
};

// is shown in KnownFor for rendering castData array & if(in KnownFor) castData isn't loaded, BilledCastSkeleton is shown
const SingleCast: FunctionComponent<Props> = ({ crewData, baseUrl }) => {
  const router = useRouter();

  const handleChangePage = () => {
    router.push({
      pathname: `${process.env.NEXT_PUBLIC_AUTH_URL}/movieDetails/${crewData.id}`,
      query: {
        movieId: crewData.id.toString(),
        type: "movie",
      },
    });
  };

  return (
    <motion.div
      className="relative h-auto min-w-[180px] cursor-pointer items-center rounded-md bg-transparent px-2 py-2 shadow-2xl transition-transform duration-200 ease-out md:h-[400px] md:min-w-[200px] md:hover:scale-105"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onClick={handleChangePage}
    >
      {crewData.poster_path ? (
        <img
          src={`${baseUrl}${crewData.poster_path}`}
          alt=""
          className="w-[200px]"
        />
      ) : (
        <ImageSkeleton />
      )}

      <h1 className="py-2 text-center text-xl font-bold text-gray-300 line-clamp-3">
        {crewData.title}
      </h1>
    </motion.div>
  );
};

export default SingleCast;
