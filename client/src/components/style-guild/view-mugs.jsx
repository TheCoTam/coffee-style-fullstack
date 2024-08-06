import { useEffect, useState } from "react";
import SkeletonView from "./skeleton-view";
import toast from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

import { formatPrice, formatDate } from "@/lib/utils";
import { MUG_CATEGORIES } from "@/data/mug-categories";

const url = import.meta.env.VITE_BACKEND_URL;

const ViewMugs = () => {
  const [mugs, setMugs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url + "/api/mug/all/all");

        if (response.data.success) {
          setMugs(response.data.data);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log("[view-mugs]", error);
        toast.error("Something went wrong with Mugs");
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center my-[50px] gap-16">
      <p className="text-3xl uppercase font-bold text-gray-700">
        View All Mugs
      </p>
      {(!mugs || mugs.length === 0) && <SkeletonView />}
      <div className="w-full flex flex-col items-center gap-8">
        {mugs.map((mug) => {
          let Category = "";
          MUG_CATEGORIES.map((item) => {
            if (mug.category === item.value) {
              Category = item.label;
            }
          });

          return (
            <Link
              to={"/product/" + mug._id}
              key={mug._id}
              className="flex flex-col md:flex-row gap-5 w-[98%] border-2 border-teal-100 p-4 rounded-md shadow-sm"
            >
              <div className="flex items-center justify-center overflow-hidden w-full md:w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-md">
                <img
                  src={url + "/images/" + mug.image_url}
                  alt={mug.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 flex flex-col gap-3 md:gap-5">
                <p className="text-2xl md:text-3xl font-semibold w-full h-[32px] lg:h-[72px]">
                  {mug.name}
                </p>
                <div className="flex gap-3">
                  <p>{formatDate(mug.updatedAt)}</p>
                  <div className="w-[3px] h-full bg-gray-100 rounded-md"></div>
                  <p>{Category}</p>
                </div>
                <div className="flex flex-col gap-[5px] w-full h-[102px] lg:h-[162px]">
                  <p className="font-semibold text-gray-500">
                    {formatPrice(mug.price)}
                  </p>
                  <p className="flex-1 text-gray-400 line-clamp-3">
                    {mug.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ViewMugs;
