import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import { PopularPeopleTyping } from "../../typings";

type Props = {
  person: PopularPeopleTyping;
  baseUrl: string;
};

function LikeActress({ person, baseUrl }: Props) {
  const router = useRouter();

  const handleNavigatePage = () => {
    router.push({
      pathname: `${process.env.NEXT_PUBLIC_AUTH_URL}/cast/${person.id}`,
      query: {
        castId: person.id.toString(),
      },
    });
  };
  return (
    <motion.div
      className="relative cursor-pointer items-center rounded-md bg-transparent px-2 py-2 shadow-2xl hover:bg-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onClick={handleNavigatePage}
    >
      <img
        src={`${baseUrl}${person.profile_path}`}
        alt=""
        className="m-auto w-48"
      />
      <h1 className="py-2 text-center text-lg font-bold text-gray-300 line-clamp-3">
        {person.name}
      </h1>
      <div className="flex justify-between px-2.5 py-2.5 text-sm text-white">
        <p>{person.known_for_department}</p>|
        <p>popularity: {person.popularity}</p>
      </div>
    </motion.div>
  );
}

export default LikeActress;
