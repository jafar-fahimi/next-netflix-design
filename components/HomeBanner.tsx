import { doc, getDoc, setDoc } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Movie } from "../typings";
import { db } from "../utils/firebase";

const baseUrl = "https://image.tmdb.org/t/p/original";

type Props = {
  netflixOriginals: Movie[];
  authDetail?: any;
  isTv?: boolean;
};

const HomeBanner = ({ netflixOriginals, authDetail, isTv }: Props) => {
  const router = useRouter();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [userCreates, setUserCreate] = useState<boolean>(false);

  const getUserData = async () => {
    if (authDetail) {
      try {
        const docRef = doc(db, "netflixUsers", authDetail?.user?.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("User Already Created");
          setUserCreate(false);
        } else {
          setUserCreate(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else return;
  };

  const userCreate = async (authDetail: any) => {
    const userDocRef = doc(db, "netflixUsers", authDetail?.user?.uid);
    await setDoc(userDocRef, JSON.parse(JSON.stringify(authDetail)));
  };

  useEffect(() => {
    getUserData();

    if (userCreates) {
      userCreate(authDetail);
    } else return;
  }, [authDetail, db, userCreates]);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  const handleChangePage = () => {
    if (movie) {
      router.push({
        pathname: `movieDetails/${movie.id}`,
        query: {
          movieId: movie.id.toString(),
          type: isTv ? "tv" : "movie",
        },
      });
    } else return;
  };

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 lg:pl-24">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`${baseUrl}/${movie?.backdrop_path || movie?.poster_path}`}
          alt={movie?.title || movie?.name || movie?.original_name!}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute bottom-0 z-20 h-32 w-full bg-gradient-to-t from-gray-100 to-transparent" />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs line-clamp-5 text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl">
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button
          className="flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl"
          onClick={handleChangePage}
        >
          <AiFillPlayCircle className="h-4 w-4 cursor-not-allowed text-black md:h-7 md:w-7" />
          Play
        </button>
        <button
          className="flex cursor-pointer items-center gap-x-2 rounded bg-[gray]/70 px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl"
          onClick={handleChangePage}
        >
          More Info{" "}
          <IoMdInformationCircleOutline className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
