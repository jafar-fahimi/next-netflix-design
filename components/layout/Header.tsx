import { SearchIcon, BellIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useAuth from "../../hooks/useAuth";
import { Box, Modal } from "@mui/material";

const Header: React.FC = () => {
  const links = ["Movies", "favorite", "tv Shows", "people", "about"];
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout, loading, user } = useAuth();
  const [showLogOut, setShowLogOut] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) return <h2>Loading...</h2>;
  return (
    <header className={`${isScrolled && "bg-black/75"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="/Netflix_2015_logo.svg"
          width={150}
          height={120}
          className="w-20 cursor-pointer object-contain sm:w-36 md:w-40"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-default font-semibold text-white">
            <Link href="/">Home</Link>
          </li>
          {links.map((link) => (
            <li className="headerLink hidden lg:inline-block">
              <Link key={link} href={`/${link}`}>
                {link[0].toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
          {/* <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li> */}
        </ul>
      </div>
      <div className="flex items-center space-x-1 text-lg font-light md:space-x-4">
        <SearchIcon className="sm hidden h-7 w-7 cursor-pointer hover:text-slate-400 sm:inline" />
        <span className="hidden hover:text-slate-400 lg:inline">
          <Link href="/#kids">Kids</Link>
        </span>
        <button className="hover:text-slate-400">
          <Link href="Plans">Plans</Link>
        </button>

        <Link href="/#watch">
          <BellIcon className="h-7 w-7 cursor-pointer hover:text-slate-400" />
        </Link>
        <button
          className="hover:text-slate-400"
          onClick={() => setShowLogOut(true)}
          title={`${user ? "Log Out" : "Log In"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        </button>
        {showLogOut && (
          <div>
            <Modal
              open={showLogOut}
              onClose={setShowLogOut}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="flex h-full flex-col items-center justify-center bg-black/20">
                <div className="flex items-center rounded-lg bg-black/50 py-4 px-8 pb-8">
                  <span className="mr-10 inline rounded-full bg-red-600 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="white"
                      className="inline h-10 w-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                      />
                    </svg>
                  </span>
                  <div>
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
                </div>
              </Box>
            </Modal>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
