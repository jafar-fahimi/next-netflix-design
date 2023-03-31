import { useRef, useState, FunctionComponent } from "react";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import BilledCastSceleton from "../skeleton/BilledCastSceleton";
import SingleCast from "./SingleCast";
import { CastDataTyping } from "../../typings";

const baseUrl = "https://image.tmdb.org/t/p/original";

type Props = {
  castData: CastDataTyping[];
};

const KnownFor: FunctionComponent<Props> = ({ castData }) => {
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
    <div className="group relative w-screen px-6 md:-ml-2">
      <p className="text-2xl font-bold text-gray-500">Known For</p>
      <BiChevronLeftCircle
        className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
          !isMoved && "hidden"
        }`}
        onClick={() => handleClick("left")}
      />
      <div
        className="md:space-x-1.0 flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:p-2"
        ref={rowRef}
      >
        {castData ? (
          <>
            {castData?.map((crewData, index: number) => (
              <SingleCast key={index} crewData={crewData} baseUrl={baseUrl} />
            ))}
          </>
        ) : (
          <>
            <BilledCastSceleton />
            <BilledCastSceleton />
            <BilledCastSceleton />
            <BilledCastSceleton />
            <BilledCastSceleton />
            <BilledCastSceleton />
            <BilledCastSceleton />
            <BilledCastSceleton />
            <BilledCastSceleton />
          </>
        )}
      </div>
      <BiChevronRightCircle
        className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
        onClick={() => handleClick("right")}
      />
    </div>
  );
};

export default KnownFor;
