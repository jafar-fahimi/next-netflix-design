import { FunctionComponent } from "react";
import PersonMaping from "./PersonMaping";
import { PopularPeopleTyping } from "../../typings";

const baseUrl = "https://image.tmdb.org/t/p/original";
type Props = {
  popular: PopularPeopleTyping[];
};
// is called in pages/popular(after data is fetched)
const PeoplePopular: FunctionComponent<Props> = ({ popular }) => {
  console.log("popular is", popular);
  return (
    <div className="overflow-x-hidden pt-36">
      <p className="pl-2 text-4xl font-medium text-gray-400">Populars</p>
      <div className="flex flex-wrap justify-center space-x-5 space-y-8 pt-8">
        {popular.map((person) => (
          <PersonMaping key={person.id} person={person} baseUrl={baseUrl} />
        ))}
      </div>
    </div>
  );
};

export default PeoplePopular;
