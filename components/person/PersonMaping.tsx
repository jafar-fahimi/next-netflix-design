import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { PopularPeopleTyping } from "../../typings";
import Image from "next/image";
import { FunctionComponent } from "react";

type Props = {
  person: PopularPeopleTyping;
  baseUrl: string;
};

// is called in persont/PeoplePopular for each popular {}
const PersonMaping: FunctionComponent<Props> = ({ person, baseUrl }) => {
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
      onClick={handleNavigatePage}
      className="h-[28rem] w-60 cursor-pointer items-center rounded-md bg-transparent px-2 py-2 shadow-2xl hover:bg-gray-800"
    >
      <Image
        src={`${baseUrl}${person.profile_path}`}
        alt="Popular Person Photo"
        width={270}
        height={400}
      />
      <h1 className="py-2 text-center text-xl font-bold text-gray-300 line-clamp-3">
        {person.name}
      </h1>
      <div className="flex justify-between px-2.5 py-2.5 text-sm text-white">
        <p>{person.known_for_department}</p>|
        <p>popularity: {person.popularity}</p>
      </div>
    </motion.div>
  );
};

export default PersonMaping;
