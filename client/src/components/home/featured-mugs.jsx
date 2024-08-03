import { mugs_data } from "@/data/pseudo-data-home";
import FeaturedMugsItem from "./featured-mugs-item";

const FeaturedMugs = () => {
  // TODO: fetchAPI mugs data

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex items-center">
        <p>____</p>
        <p className="uppercase text-gray-500 font-semibold">featured mugs</p>
        <p>____</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 px-3">
        {mugs_data.map((mug) => (
          <FeaturedMugsItem key={mug.id} {...mug} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedMugs;
