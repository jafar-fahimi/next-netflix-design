import { useRef, useState } from "react";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { Cast } from "../../typings";
import BilledCastSkeleton from "../skeletons/BilledCastSkeleton";
import Person from "./Person";

const baseUrl = "https://image.tmdb.org/t/p/original";

const BilledCast = ({ movieCast }: { movieCast: any }) => {
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
    <div className="h-60 items-center space-y-0.5 md:space-y-2">
      <div className="group relative px-8 md:-ml-2">
        <h1 className="text-start text-3xl font-bold text-white">
          Top Billed Cast
        </h1>
        <BiChevronLeftCircle
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && "hidden"
          }`}
          onClick={() => handleClick("left")}
        />
        <div
          className="md:space-x-1.0 flex items-center space-x-0.5 overflow-y-hidden overflow-x-scroll scrollbar-hide md:p-2"
          ref={rowRef}
        >
          {movieCast?.cast ? (
            <>
              {movieCast?.cast?.map((cast: Cast) => (
                <Person key={cast.id} cast={cast} baseUrl={baseUrl} />
              ))}
            </>
          ) : (
            <>
              <BilledCastSkeleton />
              <BilledCastSkeleton />
              <BilledCastSkeleton />
              <BilledCastSkeleton />
              <BilledCastSkeleton />
              <BilledCastSkeleton />
            </>
          )}
        </div>
        <BiChevronRightCircle
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default BilledCast;
