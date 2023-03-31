import React, { useRef, useState } from "react";
import { Companies, Details } from "../../typings";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

const baseUrl = "https://image.tmdb.org/t/p/original";
type Props = { movieDetails: Details | undefined };

const Companies = ({ movieDetails }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="group relative">
      <BiChevronLeftCircle
        className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-100 transition hover:scale-125 group-hover:opacity-100 ${
          !isMoved && "hidden"
        }`}
        onClick={() => handleClick("left")}
      />
      <div
        className="flex items-center justify-start gap-10 overflow-y-hidden overflow-x-scroll px-8 scrollbar-hide"
        ref={rowRef}
      >
        {movieDetails?.production_companies?.map((companies: Companies) => (
          <div key={companies.id}>
            <img
              src={`${baseUrl}${companies.logo_path}`}
              alt={companies?.name}
              className="w-36 shadow-xl"
            />
          </div>
        ))}
      </div>

      <BiChevronRightCircle
        className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer bg-red-500 opacity-100 transition hover:scale-125 group-hover:opacity-100"
        onClick={() => handleClick("right")}
      />
    </div>
  );
};

export default Companies;
