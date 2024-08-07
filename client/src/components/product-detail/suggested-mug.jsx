import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SuggestedMugItem from "./suggested-mug-item";

const url = import.meta.env.VITE_BACKEND_URL;

const SuggestedMug = ({ currentProductId }) => {
  const [mugs, setMugs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(url + "/api/mug/take-3-mugs");

        if (res.data.success) {
          setMugs(res.data.data);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log("[suggested-mug]", error);
        toast.error("Something went wrong");
      }
    }

    fetchData();
  }, [currentProductId]);

  if (mugs.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex items-center gap-3">
        <p>____</p>
        <p className="uppercase text-gray-500 font-semibold">
          you might also like these
        </p>
        <p>____</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 lg:w-[90%] px-5">
        {mugs.map((mug) => (
          <SuggestedMugItem key={mug._id} {...mug} />
        ))}
      </div>
    </div>
  );
};

export default SuggestedMug;
