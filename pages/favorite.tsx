import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FavoriteFeed from "../components/favorite/FavoriteFeed";
import { getAuth } from "firebase/auth";
import { NextPage } from "next";

const Favorite: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Header />
      <FavoriteFeed />
      <Footer />
    </motion.div>
  );
};
export default Favorite;
