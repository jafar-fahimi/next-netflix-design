import {
  PresentationChartBarIcon,
  SearchIcon,
  BellIcon,
} from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useAuth from "../hooks/useAuth";
import { Box, Modal } from "@mui/material";

export default function Header({ links }: { links: string[] }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout, loading } = useAuth();
  const [showLogOut, setShowLogOut] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) return <h2>Loading...</h2>;
  return (
    <header className={`${isScrolled && "bg-black/75"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="/Netflix_2015_logo.svg"
          width={150}
          height={120}
          className="cursor-pointer object-contain"
        />
        {/* <BasicMenu /> */}

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-default font-semibold text-white hover:text-white">
            <Link href="/">Home</Link>
          </li>
          {links.map((link) => (
            <li className="headerLink">
              <Link href={`/#${link}`}>{link}</Link>
            </li>
          ))}
          {/* <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li> */}
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-lg font-light">
        <SearchIcon className="sm hidden h-7 w-7 hover:text-slate-700 sm:inline" />
        <span className="hidden hover:text-slate-700 lg:inline">
          <Link href="/#kids">Kids</Link>
        </span>
        <button className="hover:text-slate-700">
          <Link href="Plans">Plans</Link>
        </button>

        <Link href="/#watch">
          <BellIcon className="h-7 w-7 hover:text-slate-700" />
        </Link>
        <button onClick={() => setShowLogOut(true)}>
          <PresentationChartBarIcon className="h-7 w-7 cursor-pointer hover:text-slate-700" />
        </button>
        {showLogOut && (
          <div>
            <Modal
              open={showLogOut}
              onClose={setShowLogOut}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="flex h-full flex-col items-center bg-black/20 justify-center">
                <div className="rounded-lg bg-black/50 py-4 px-12 pb-8">
                  <h2 className="mb-8 text-center text-2xl">
                    Are You Sure to logout?
                  </h2>
                  <div className="flex gap-x-4 text-lg">
                    <button
                      className="rounded-sm bg-blue-600 py-3 px-12 hover:bg-blue-600/80"
                      onClick={() => setShowLogOut(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="rounded-sm bg-red-600 py-3 px-12 hover:bg-red-600/80"
                      onClick={logout}
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
        )}
      </div>
    </header>
  );
}
