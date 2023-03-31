import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";
import AddBookmark from "./AddBookmark";
import BilledCast from "./BilledCast";
import Companies from "./Companies";
import MainDetails from "./MainDetails";
import MoreDetails from "./MoreDetails";
import Row from "./Row";
import Seasons from "./Seasons";
import Trailer from "./Trailer";
import { Movie } from "../../typings";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

type Props = { netflixOriginals: Movie[] };

// is called in pages/movieDetails/[movieId];
const DetailsFeed: FunctionComponent<Props> = ({ netflixOriginals }) => {
  const router = useRouter();
  const { movieId, type } = router.query;
  const [movieTrailer, setMovieTrailer] = useState([]);
  const [movieCast, setMovieCast] = useState([]);
  const [movieDetails, setMovieDetails] = useState<any>();

  const fetchData = async (id: any, type: any) => {
    const movieVideo = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    ).then((res) => res.json());

    const movieCast = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    ).then((res) => res.json());

    const movieDetails = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    ).then((res) => res.json());

    setMovieTrailer(movieVideo);
    setMovieCast(movieCast);
    setMovieDetails(movieDetails);
  };

  useEffect(() => {
    fetchData(movieId, type);
  }, [movieId, type]);

  return (
    <div className="overflow-x-hidden">
      <Header
        links={[
          "Netflix",
          "Trending",
          "Top",
          "Action",
          "Comedies",
          "Scary",
          "people",
          "about",
        ]}
      />
      <main className="relative pl-4 pb-24 lg:space-y-24">
        <MainDetails movieDetails={movieDetails} />
        <Companies movieDetails={movieDetails} />
        {movieDetails?.id && <AddBookmark movieDetails={movieDetails} />}
        <Trailer movieTrailer={movieTrailer} movieDetails={movieDetails} />
        <BilledCast movieCast={movieCast} />
        <MoreDetails movieDetails={movieDetails} />
        {type === "tv" && <Seasons movieDetails={movieDetails} />}
        <div className="pb-8">
          <Row
            title="More Like This:"
            movies={netflixOriginals}
            isDetails={true}
            type="movie"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DetailsFeed;
