import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import KnownFor from "./KnownFor";
import PersonBanner from "./PersonBanner";

type CastPersonType = {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  deathday: null | string;
  gender: number;
  homepage: null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
};

type CastDataType = {
  adult: false;
  backdrop_path: null | string;
  character: string;
  credit_id: string;
  genre_ids: number[];
  id: number;
  order: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

const PersonFeed = () => {
  const router = useRouter();
  const { castId } = router.query;
  const [castData, setCastData] = useState<[] | CastDataType[]>([]);
  const [castPerson, setCastPerson] = useState<{} | CastPersonType>({});

  const fetchData = async (id: any) => {
    const movieCastData = await fetch(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    ).then((res) => res.json());

    const movieCastPersonData = await fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    ).then((res) => res.json());

    setCastData(movieCastData.cast);
    setCastPerson(movieCastPersonData);
    console.log("setCastData has ", movieCastData.cast);
    console.log("setCastPerson is ", movieCastPersonData);
  };

  useEffect(() => {
    fetchData(castId);
  }, []);
  // }, [castId, castData]);

  return (
    <main className="relative overflow-x-hidden pl-4 pb-24 lg:space-y-24">
      <PersonBanner castPerson={castPerson} />
      <KnownFor castData={castData} />
    </main>
  );
};

export default PersonFeed;
