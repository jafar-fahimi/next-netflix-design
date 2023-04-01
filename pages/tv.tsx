import { motion } from "framer-motion";
import React from "react";
import { Movie } from "../typings";
import Header from "../components/layout/Header";
import requests from "../utils/requests";
import Footer from "../components/layout/Footer";
import Row from "../components/Row";
import HomeBanner from "../components/HomeBanner";
import { GetStaticProps, NextPage } from "next";
import useAuth from "../hooks/useAuth";

type Props = {
  topRated: Movie[];
  onTheAirTv: Movie[];
  popularTv: Movie[];
  session: any;
};

const TvSeasons: NextPage<Props> = ({ topRated, onTheAirTv, popularTv }) => {
  const authDetail = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24">
        <HomeBanner
          netflixOriginals={topRated}
          authDetail={authDetail}
          isTv={true}
        />
        <section className="md:space-y-16">
          <Row
            title="Trending Now"
            movies={topRated.slice(0, 10)}
            isDetails={false}
            type="tv"
          />
          <Row
            title="Trending Now"
            movies={onTheAirTv.slice(0, 10)}
            isDetails={false}
            type="tv"
          />
          <Row
            title="Top Rated"
            movies={onTheAirTv.slice(10, onTheAirTv.length)}
            isDetails={false}
            type="tv"
          />
          <Row
            title="Action"
            movies={popularTv.slice(0, 10)}
            isDetails={false}
            type="tv"
          />
          <Row
            title="Latest"
            movies={popularTv.slice(10, popularTv.length)}
            isDetails={false}
            type="tv"
          />
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default TvSeasons;

export const getStaticProps: GetStaticProps = async () => {
  const [topRated, onTheAirTv, popularTv] = await Promise.all([
    fetch(requests.fetchTopRatedTvSeason).then((res) => res.json()),
    fetch(requests.fetchOnTheAirTvSeason).then((res) => res.json()),
    fetch(requests.fetchPopularTvSeason).then((res) => res.json()),
  ]);

  return {
    props: {
      topRated: topRated.results,
      onTheAirTv: onTheAirTv.results,
      popularTv: popularTv.results,
    },
  };
};
