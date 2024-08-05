import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import MoreProductsItem from "./more-products-item";

const MoreProducts = () => {
  const [moreProducts, setMoreProducts] = useState([]);

  useEffect(() => {
    async function fetchFeaturedMugs() {
      try {
        const url = import.meta.env.VITE_BACKEND_URL;
        const response = await axios.get(url + "/api/mug/more-products");
        if (response.data.success) {
          setMoreProducts(response.data.data);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log("[featured-mugs]", error);
        toast.error("Something went wrong with the more products");
      }
    }

    fetchFeaturedMugs();
  }, []);
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex items-center">
        <p>____</p>
        <p className="uppercase text-gray-500 font-semibold">more products</p>
        <p>____</p>
      </div>
      {moreProducts.length === 0 && (
        <p className="text-2xl text-gray-400">
          It seem we haven&apos;t have any mugs yet
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 px-3">
        {moreProducts.map((mug) => (
          <MoreProductsItem key={mug.id} {...mug} />
        ))}
      </div>
    </div>
  );
};

export default MoreProducts;
