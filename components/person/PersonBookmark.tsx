import {
  onSnapshot,
  collection,
  deleteDoc,
  doc,
  setDoc,
  CollectionReference,
  QuerySnapshot,
} from "firebase/firestore";
import { motion } from "framer-motion";
import { FunctionComponent, useEffect, useState } from "react";
import {
  BsFillBookmarkDashFill,
  BsFillBookmarkCheckFill,
} from "react-icons/bs";
import { IoIosRemoveCircle, IoIosAddCircle } from "react-icons/io";
import useAuth from "../../hooks/useAuth";
import { db } from "../../utils/firebase";

type Props = {
  castPerson: any;
};

// component to Add to your favourites or remove from fav & fetch/store/delete likes from firebase
const PersonBookmark: FunctionComponent<Props> = ({ castPerson }) => {
  const [hasLikes, setHasLikes] = useState(false);
  const authDetail = useAuth();
  const [likes, setLikes] = useState<{ id: string }[]>([]);

  useEffect(
    () =>
      onSnapshot(
        collection(
          db as unknown as CollectionReference<unknown>,
          "netflixUsers",
          authDetail?.user?.uid as string,
          "likeActress"
        ),
        (snapshot: QuerySnapshot) => setLikes(snapshot.docs)
      ),
    [db, authDetail?.user?.uid]
  );

  useEffect(
    () =>
      setHasLikes(
        likes.findIndex((like) => like.id === castPerson?.id.toString()!) !== -1
      ),
    [likes, castPerson]
  );

  const likeMovie = async () => {
    try {
      if (hasLikes) {
        await deleteDoc(
          doc(
            db as unknown as CollectionReference<unknown>,
            "netflixUsers",
            authDetail?.user?.uid as string,
            "likeActress",
            castPerson?.id.toString()
          )
        );
      } else {
        const userRef = doc(
          db as unknown as CollectionReference<unknown>,
          "netflixUsers",
          authDetail?.user?.uid as string,
          "likeActress",
          castPerson?.id.toString()
        );
        setDoc(userRef, JSON.parse(JSON.stringify(castPerson)));
      }
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <div className="z-[99] flex h-[100px] w-[550px] items-center justify-start rounded-lg bg-transparent px-8 pb-0 pt-4 shadow-xl">
      <div className="flex items-center justify-between text-center">
        <button className="items-center px-4 text-center">
          {hasLikes ? (
            <BsFillBookmarkDashFill className="h-8 w-8 text-red-500" />
          ) : (
            <BsFillBookmarkCheckFill className="h-8 w-8 text-green-500" />
          )}
        </button>
        <div className="w-[250px]">
          <p className="text-xl font-medium">
            {hasLikes ? "Remove Your Favourite" : "Add To Your Favourites"}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center text-center">
        {hasLikes ? (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="ml-24 cursor-pointer items-center rounded-full bg-gray-900 px-2.5 py-2.5 hover:bg-red-300"
            onClick={() => likeMovie()}
          >
            <IoIosRemoveCircle className="h-6 w-6 text-red-500" />
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="ml-24 cursor-pointer items-center rounded-full bg-gray-900 px-2.5 py-2.5 hover:bg-green-300"
            onClick={() => likeMovie()}
          >
            <IoIosAddCircle className="h-6 w-6 text-green-500" />
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default PersonBookmark;
