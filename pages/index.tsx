// import { NextPage } from 'next'
import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Row from "../components/Row";
import Banner from "../components/Banner";
import requests from "../utils/requests";
import { Movie } from "../typings";
import { useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalAtoms";
import Modal from "../components/Modal";
import Kids from "../components/Kids";
import Watch from "../components/Watch";
import { NextPage } from "next";
import Footer from "../components/Footer";

type Props = {
  netflixOriginals: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  documentaries: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  topRated: Movie[];
  trendingNow: Movie[];
};

// const Home:NextPage = ({ // made error!
const Home: NextPage<Props> = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
}) => {
  const showModal = useRecoilValue(modalState);
  // const [showModal, setShowModal] = useState(false);

  return (
    <div
      className={`relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh] ${
        showModal && "!h-screen overflow-hidden"
      }`}
    >
      <Head>
        <title>Netflix Design</title>
      </Head>
      <Header
        links={[
          "Netflix",
          "Trending",
          "Top",
          "Action",
          "Comedies",
          "Scary",
          "Romance",
          "Documentaries",
        ]}
      />
      <main className="relative pl-4 sm:pb-20 md:pb-28 lg:space-y-24 lg:pt-52 lg:pl-16 xl:pt-40">
        <Banner netflixOriginals={netflixOriginals} />
        <section>
          <div id="Netflix">
            <Row title="Netflix Original" movies={netflixOriginals} />
          </div>
          <div id="Trending">
            <Row title="Trending Now" movies={trendingNow} />
          </div>
          <div id="Top">
            <Row title="Top Rated" movies={topRated} />
          </div>
          <div id="Action">
            <Row title="Action Thrillers" movies={actionMovies} />
          </div>
          <div id="Comedies">
            <Row title="Comedies" movies={comedyMovies} />
          </div>
          <div id="Scary">
            <Row title="Scary Movies" movies={horrorMovies} />
          </div>
          <div id="Romance">
            <Row title="Romance Movies" movies={romanceMovies} />
          </div>
          <div id="Documentaries">
            <Row title="Documentaries" movies={documentaries} />
          </div>
        </section>
        <div id="kids">
          <Kids />
        </div>
        <div id="watch">
          <Watch />
        </div>
        <footer>
          <Footer />
        </footer>
      </main>
      {showModal && <Modal />}
    </div>
  );
};
export default Home;

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
};
