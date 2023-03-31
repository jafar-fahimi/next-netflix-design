import { Details } from "../../../typings";
import Season from "./Season";

const baseUrl = "https://image.tmdb.org/t/p/original";
type Props = { movieDetails: Details | undefined };

const Seasons = ({ movieDetails }: Props) => {
  return (
    <div>
      <p className="-mt-10 px-2.5 py-2.5 text-2xl font-bold text-gray-300">
        Seasons:
      </p>

      <div className="flex items-center space-x-0.5 overflow-y-hidden overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2">
        {movieDetails?.seasons?.map((season) => (
          <Season
            key={season.id}
            season={season}
            baseUrl={baseUrl}
            seasonId={movieDetails.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Seasons;
