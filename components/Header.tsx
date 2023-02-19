import {
  PresentationChartBarIcon,
  SearchIcon,
  BellIcon,
} from "@heroicons/react/solid";
// import BasicMenu from './BasicMenu'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useAuth from "../hooks/useAuth";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout, loading } = useAuth();

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
    <header className={`${isScrolled && "bg-slate-900/75"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="/Netflix_2015_logo.svg"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        {/* <BasicMenu /> */}

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-default font-semibold text-white hover:text-white">
            Home
          </li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="sm hidden h-6 w-6 sm:inline" />
        <a href="#" className="hidden lg:inline">
          Kids
        </a>
        <BellIcon className="h-6 w-6" />
        <button onClick={logout}>
          <PresentationChartBarIcon className=" h-6 w-6 cursor-pointer" />
        </button>
      </div>
    </header>
  );
}
