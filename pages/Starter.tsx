// import { NextPage } from 'next'
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalAtoms";
import Modal from "../components/Modal";
import Kids from "../components/Kids";
import Watch from "../components/Watch";
import Link from "next/link";
import {
  ChevronDoubleRightIcon,
  ChevronRightIcon,
  GlobeAltIcon,
} from "@heroicons/react/outline";

// const Home:NextPage = ({ // made error!
const Starter = () => {
  const showModal = useRecoilValue(modalState);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh] ${
        showModal && "!h-screen overflow-hidden"
      }`}
    >
      <header className={`${isScrolled && "bg-black/75"}`}>
        <div className="flex w-full items-center justify-between space-x-2 md:space-x-10">
          <img
            src="/Netflix_2015_logo.svg"
            width={150}
            height={120}
            className="w-20 cursor-pointer object-contain sm:w-36 md:w-40"
          />
          <div className="flex space-x-4 text-white">
            <div className="flex border-2 border-white p-1">
              <GlobeAltIcon height={25} strokeWidth={1.5} />
              <select name="lang" className="bg-transparent" id="lang">
                <option className="bg-black" value="english">
                  English
                </option>
                <option className="bg-black" value="persian">
                  Persian
                </option>
              </select>
            </div>
            <a
              href="login"
              className="rounded-lg bg-red-600 py-1 px-5 hover:bg-red-500"
            >
              Sign In
            </a>
          </div>
        </div>
      </header>
      <main className="relative sm:pb-20 md:pb-28 lg:space-y-24">
        <div
          id="banner"
          className="h-screen w-screen bg-bg_netflix bg-cover bg-no-repeat text-center text-white"
        >
          <div className="flex h-full w-full items-center justify-between bg-black/50">
            <div className="mx-auto max-w-xl">
              <h1 className="text-6xl font-semibold">
                Unlimited movies, TV shows, and more..
              </h1>
              <h3 className="my-4 text-2xl font-semibold">
                Watch anywhere. Cancel anytime.
              </h3>
              <p className="my-3">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <div className="flex">
                <input
                  className="flex-1 rounded-tl-lg rounded-bl-lg bg-white/40 pl-2 text-xl placeholder-gray-300 outline-1 ring-0"
                  type="text"
                  placeholder="Email Address"
                />
                <span className="flex cursor-pointer items-center rounded-tr-lg rounded-br-lg bg-red-600  px-5 py-4 hover:bg-red-500">
                  Get Started <ChevronRightIcon height={20} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="kids">
          <Kids />
        </div>
        <div id="watch">
          <Watch />
        </div>
      </main>
      {showModal && <Modal />}
    </div>
  );
};
export default Starter;
