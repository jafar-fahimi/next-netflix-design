import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Actress from "./Actress";
import EmptyMovie from "./EmptyMovie";
import { db } from "../../utils/firebase";
import Row from "../Row";
import { onSnapshot, query, collection, orderBy } from "firebase/firestore";
import useAuth from "../../hooks/useAuth";

const FavoriteFeed = () => {
  const session = useAuth();
  const [likeMovies, setLikeMovies] = useState<any[]>([]);
  const [isMovie, setIsMovie] = useState<boolean>(true);

  useEffect(() => {
    return onSnapshot(
      query(
        collection(
          db,
          "netflixUsers",
          session?.user?.uid as string,
          "likeMovie"
        ),
        orderBy("vote_average", "desc")
      ),
      (snapshot: any) => setLikeMovies(snapshot.docs)
    );
  }, [db, session?.user?.uid]);

  return (
    <main className="pl-4 pb-4 lg:space-y-24">
      <section className="mb-4 pt-36 pb-4 md:space-y-16">
        <div className="flex justify-start gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`rounded-md bg-transparent px-2.5 py-2.5 text-xl font-semibold shadow-md hover:bg-gray-900 ${
              isMovie && "bg-gray-900 shadow-2xl"
            }`}
            onClick={() => setIsMovie(true)}
          >
            Movie
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`rounded-md bg-transparent px-2.5 py-2.5 text-xl font-semibold shadow-md hover:bg-gray-900 ${
              !isMovie && "bg-gray-900 shadow-2xl"
            }`}
            onClick={() => setIsMovie(false)}
          >
            Actress
          </motion.button>
        </div>
        {isMovie ? (
          <>
            {likeMovies.length > 0 ? (
              <Row
                likeMovies={likeMovies}
                isDetails={true}
                type="movie"
                isSearch={true}
                isfavourite={true}
              />
            ) : (
              <EmptyMovie />
            )}
          </>
        ) : (
          <Actress session={session} />
        )}
      </section>
    </main>
  );
};
export default FavoriteFeed;
