import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

import FeaturedMugsItem from "./featured-mugs-item";

const FeaturedMugs = () => {
  const [featuredMugs, setFeaturedMugs] = useState([]);

  useEffect(() => {
    async function fetchFeaturedMugs() {
      try {
        const url = import.meta.env.VITE_BACKEND_URL;
        const response = await axios.get(url + "/api/mug/featured");
        if (response.data.success) {
          setFeaturedMugs(response.data.data);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log("[featured-mugs]", error);
        toast.error("Something went wrong with the featured mugs");
      }
    }

    fetchFeaturedMugs();
  }, []);

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex items-center">
        <p>____</p>
        <p className="uppercase text-gray-500 font-semibold">featured mugs</p>
        <p>____</p>
      </div>
      {featuredMugs.length === 0 && (
        <p className="text-2xl text-gray-400">
          It seem we haven&apos;t have any mugs yet
        </p>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 px-3">
        {featuredMugs.map((mug) => (
          <FeaturedMugsItem key={mug._id} {...mug} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedMugs;
