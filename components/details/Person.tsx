import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import NoCastSkeleton from "../skeletons/NoCastSkeleton";
import { Cast } from "../../typings";

type Props = { cast: Cast; baseUrl: string };

function Person({ cast, baseUrl }: Props) {
  const router = useRouter();

  const handleNavigatePage = () => {
    router.push({
      pathname: `${process.env.NEXT_PUBLIC_AUTH_URL}/cast/${cast.id}`,
      query: {
        castId: cast.id.toString(),
      },
    });
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
      className="relative h-auto min-w-[180px] cursor-pointer items-center rounded-md bg-gray-900 px-2 py-2 shadow-lg transition-transform duration-200 ease-out hover:bg-gray-800 md:h-[320px] md:min-w-[150px] md:hover:scale-105"
      onClick={handleNavigatePage}
    >
      {cast.profile_path ? (
        <img
          src={`${baseUrl}${cast.profile_path}`}
          className="p-auto m-auto w-36 items-center"
          alt=""
        />
      ) : (
        <NoCastSkeleton />
      )}

      <h1 className="text-lg font-bold text-gray-300">
        {cast.name || cast.original_name}
      </h1>
      <p className="text-sm text-gray-300 line-clamp-3">{cast.character}</p>
    </motion.div>
  );
}

export default Person;
