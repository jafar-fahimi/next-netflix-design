import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import Footer from "../../components/layout/Footer";
import PersonFeed from "../../components/person/PersonFeed";
import Header from "../../components/layout/Header";
import { NextPage } from "next";

// router is changed in PersonMaping when user click on one person(PersonMaping)
// it render PersonFeed(fetch castData & castPerson then passed them to KnownFor & PersonBanner)
const CastPage: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Head>
        <title>Netflix Design</title>
      </Head>
      <Header />
      <div className="bg-gradient-to-r from-gray-900">
        <PersonFeed />
        <Footer />
      </div>
    </motion.div>
  );
};

export default CastPage;
