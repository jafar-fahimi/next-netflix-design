import { motion } from "framer-motion";
// import { getSession } from "next-auth/react";
import Head from "next/head";
import React from "react";

import Footer from "../components/Footer";
import PeoplePopular from "../components/person/PeoplePopular";
import { PopularPeopleTyping } from "../typings";
import requests from "../utils/requests";
import Header from "../components/Header";
import {
  GetStaticProps,
  GetStaticPropsContext,
} from "next";

type Props = {
  popular: PopularPeopleTyping[];
  session?: any;
};

function People({ popular }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Head>
        <title>Netflix Design | Popular People</title>
      </Head>
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
      <div className="bg-gradient-to-r from-gray-900">
        <main className="relative pl-4 pb-24 lg:space-y-24">
          <PeoplePopular popular={popular} />
        </main>
        <Footer />
      </div>
    </motion.div>
  );
}

export default People;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  // const session = await getSession(context);

  const [popular] = await Promise.all([
    fetch(requests.fetchPopularPeople).then((res) => res.json()),
  ]);

  return { props: { popular: popular.results } };
};
