import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  BsFillBookmarkCheckFill,
  BsFillBookmarkDashFill,
} from "react-icons/bs";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { db } from "../../utils/firebase";
import useAuth from "../../hooks/useAuth";

type Props = { movieDetails: any };

const AddBookmark = ({ movieDetails }: Props) => {
  const [hasLikes, setHasLikes] = useState(false);
  const [likes, setLikes] = useState<any[]>([]);
  const authDetail = useAuth();

  useEffect(
    () =>
      onSnapshot(
        collection(
          db,
          "netflixUsers",
          authDetail?.user?.uid as string,
          "likeMovie"
        ),
        (snapshot) => setLikes(snapshot.docs)
      ),
    [db, authDetail?.user?.uid]
  );

  useEffect(
    () =>
      setHasLikes(
        likes.findIndex((like) => like.id === movieDetails?.id.toString()!) !==
          -1
      ),
    [likes]
  );

  const likeMovie = async () => {
    try {
      if (hasLikes) {
        await deleteDoc(
          doc(
            db,
            "netflixUsers",
            authDetail?.user?.uid as string,
            "likeMovie",
            movieDetails?.id.toString()
          )
        );
      } else {
        const userRef = doc(
          db,
          "netflixUsers",
          authDetail?.user?.uid as string,
          "likeMovie",
          movieDetails?.id.toString()
        );
        setDoc(userRef, JSON.parse(JSON.stringify(movieDetails)));
      }
    } catch (error) {
      console.log(error);
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
            {hasLikes ? "Remove Your Favourite" : "Add Your Favourite"}
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

export default AddBookmark;
