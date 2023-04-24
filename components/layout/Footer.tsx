import { GlobeAltIcon } from "@heroicons/react/outline";
import { AiOutlineArrowDown } from "react-icons/ai";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="mt-14 flex flex-col px-14 text-[#737373] md:px-28 lg:px-40 xl:px-64">
        <ul className="my-4 grid grid-cols-2 text-white sm:grid-cols-3  md:grid-cols-4">
          <li className="my-1 cursor-pointer text-sm font-medium hover:underline md:mr-4">
            FAQ
          </li>
          <li className="my-1 cursor-pointer text-sm font-medium hover:underline md:mr-4">
            Investor Relations
          </li>
          <li className="my-1 cursor-pointer text-sm font-medium hover:underline md:mr-4">
            Privacy
          </li>
          <li className="my-1 cursor-pointer text-sm font-medium hover:underline md:mr-4">
            Speed Test
          </li>
          <li className="my-1 cursor-pointer text-xs font-medium hover:underline md:mr-4">
            Help Centre
          </li>
          <li className="my-1 cursor-pointer text-xs font-medium hover:underline md:mr-4">
            Jobs
          </li>
          <li className="my-1 cursor-pointer text-xs font-medium hover:underline md:mr-4">
            Cookie Preferences
          </li>
          <li className="my-1 cursor-pointer text-xs font-medium hover:underline md:mr-4">
            Legal Notices
          </li>
          <li className="my-1 cursor-pointer text-xs font-medium hover:underline md:mr-4">
            Account
          </li>
          <li className="my-1 cursor-pointer text-xs font-medium hover:underline md:mr-4">
            Ways to Watch
          </li>
          <li className="my-1 cursor-pointer text-xs font-medium hover:underline md:mr-4">
            Corporate Information
          </li>
          <li className="my-1 cursor-pointer text-xs font-medium hover:underline md:mr-4">
            Only on Netflix
          </li>
          <li className="my-1 cursor-pointer text-xs font-medium hover:underline md:mr-4">
            Media Centre
          </li>
          <li className="my-1 cursor-pointer text-xs font-medium hover:underline md:mr-4">
            Terms of Use
          </li>
          <li className="my-1 cursor-pointer text-xs font-medium hover:underline md:mr-4">
            <a href="https://www.linkedin.com/in/naveen-polasa/">Contact Us</a>
          </li>
        </ul>
        <button className="flex h-12 w-36 items-center justify-evenly border border-[#737373] font-medium">
          <GlobeAltIcon height={25} strokeWidth={1.5} />
          English
          <AiOutlineArrowDown className="text-white" />
        </button>
        <p className="my-4 text-xs font-medium">Netflix</p>
        <a
          className="my-4 text-xs font-medium"
          href="mailto:jafar.fahimi12@gmail.com"
        >
          jafar.fahimi12@gmail.com
        </a>
      </div>

      <div className="h-9 bg-[#333333] py-1 text-center text-white">
        Just For Learning Purposes
      </div>
    </div>
  );
};

export default Footer;
