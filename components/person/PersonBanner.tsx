import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import PersonBookmark from "./PersonBookmark";
import NoCastSkeleton from "../skeleton/NoCastSkeleton";
import BannerDetailsSkeleton from "../skeleton/BannerDetailsSkeleton";

const baseUrl = "https://image.tmdb.org/t/p/original";

type Props = {
  castPerson: any;
};

// PersonBanner is called in PersonFeed(after it fetch data)
// all details() of person is rendered here:
const PersonBanner: FunctionComponent<Props> = ({ castPerson }) => {
  return (
    <div className="overflow-x-hidden">
      <div className="inline-block justify-start gap-16 px-8 pl-16 pt-36 text-white md:flex">
        <div className="items-center px-2.5 py-2.5">
          {castPerson.profile_path ? (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <img
                src={`${baseUrl}${castPerson.profile_path}`}
                alt=""
                className="w-[300px] rounded-tl-2xl rounded-br-2xl"
              />
            </motion.div>
          ) : (
            <NoCastSkeleton imageSize={true} />
          )}
        </div>
        <div className="px-8 py-8">
          {castPerson.name ? (
            <motion.div
              className="max-w-3xl space-y-3 overflow-y-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl font-bold">{castPerson.name}</p>
              <p>{castPerson.known_for_department}</p>
              <p className="pt-2 text-xl font-medium text-gray-400">
                Biography
              </p>
              <p className="line-clamp-6">{castPerson.biography}</p>
              <div className="flex justify-between pt-2">
                <p className="font-medium text-gray-400">
                  Place of Birth:{" "}
                  <span className="text-white">
                    {" "}
                    {castPerson.place_of_birth}
                  </span>
                </p>
                <p className="font-medium text-gray-400">
                  Birthday:{" "}
                  <span className="text-white">{castPerson.birthday}</span>
                </p>
                {castPerson.deathday && (
                  <p className="font-medium text-gray-400">
                    Deathday:{" "}
                    <span className="text-white">{castPerson.deathday}</span>
                  </p>
                )}
              </div>
              <div className="flex justify-between">
                <p className="pt-2 font-medium text-gray-400">
                  Gender:{" "}
                  <span className="text-white">
                    {castPerson.gender === 2 ? "Male" : "Female"}
                  </span>
                </p>
                <p className="pt-2 font-medium text-gray-400">
                  Known Credits:{" "}
                  <span className="text-white">{castPerson.popularity}</span>
                </p>
              </div>
              <p className="pt-4 text-xl font-medium text-gray-400">
                Also Known As:
              </p>
              <div className="grid grid-cols-2 space-y-2">
                {castPerson?.also_known_as
                  ?.slice(0, 10)
                  .map((data: any, index: number) => (
                    <div key={index}>
                      <p className="text-sm">{data}</p>
                    </div>
                  ))}
              </div>
            </motion.div>
          ) : (
            <BannerDetailsSkeleton />
          )}
        </div>
      </div>
      {castPerson.id && castPerson.name && (
        <PersonBookmark castPerson={castPerson} />
      )}
    </div>
  );
};

export default PersonBanner;
