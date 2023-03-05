import {
  PresentationChartBarIcon,
  SearchIcon,
  BellIcon,
} from "@heroicons/react/solid";
// import BasicMenu from './BasicMenu'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useAuth from "../hooks/useAuth";

export default function Header({ links }: { links: string[] }) {
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
        <SearchIcon className="sm hidden h-7 w-7 sm:inline hover:text-slate-700" />
        <a href="#" className="hidden lg:inline hover:text-slate-700">
          Kids
        </a>
        <button className="hover:text-slate-700">
          <Link href="Plans">Plans</Link>
        </button>

        <BellIcon className="h-7 w-7 hover:text-slate-700" />
        <button onClick={logout}>
          <PresentationChartBarIcon className=" h-7 w-7 cursor-pointer hover:text-slate-700" />
        </button>
      </div>
    </header>
  );
}
