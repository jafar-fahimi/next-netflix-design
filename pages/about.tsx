import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import Header from "../components/layout/Header";
import AboutFeed from "../components/AboutFeed";
import Footer from "../components/layout/Footer";

type Props = {};

function AboutPage({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Head>
        <title>Netflix Desgin | About</title>
      </Head>
      <Header />
      <AboutFeed />
      <Footer />
    </motion.div>
  );
}

export default AboutPage;
