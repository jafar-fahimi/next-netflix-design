// import { NextPage } from 'next'
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalAtoms";
import Modal from "../components/Modal";
import Kids from "../components/Kids";
import Watch from "../components/Watch";
import {
  ChevronRightIcon,
  GlobeAltIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { NextPage } from "next";

const Starter:NextPage = () => {
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
      <main className=" relative bg-black sm:pb-20 md:pb-28 lg:space-y-24">
        <section
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
        </section>
        <section>
          <Watch
            title="Enjoy on your TV."
            subtitle="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          />
        </section>

        {/* mobile section */}
        <section className=" flex flex-col items-center gap-y-10 px-8 sm:gap-x-4 md:gap-y-16 lg:flex-row lg:justify-evenly">
          <div className="relative">
            <Image
              className=""
              alt="netlflix in mobiles"
              height={400}
              width={600}
              src="/../public/images/mobile-0819.jpg"
            />
            <div className="absolute bottom-10 left-1/2 flex w-80 -translate-x-1/2 scale-90 items-center rounded-lg border-2 border-gray-400 bg-black p-4">
              <Image
                height={90}
                alt="download image"
                width={65}
                src="/../public/images/mobile-boxshot.png"
              />
              <div className="pl-4">
                <p className="font-semibold">Stranger Things</p>
                <span className="text-xs text-blue-700 cursor-pointer">Download</span>
              </div>
            </div>
          </div>
          <div className="max-w-lg flex-1">
            <h2 className="text-6xl">Download your shows to watch offline</h2>
            <h4 className="mt-6 text-xl">
              Save your favorites easily and always have something to watch.
            </h4>
          </div>
        </section>

        <section>
          <Kids />
        </section>
      </main>
      {showModal && <Modal />}
    </div>
  );
};
export default Starter;