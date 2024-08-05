import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

import MoreProductsItem from "@/components/home/more-products-item";
import SkeletonItem from "./SkeletonItem";
import Slider from "./slider";

const ProductsList = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(url + "/api/mug/all/" + category);

        if (response.data.success) {
          setProducts(response.data.data);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log("[products-list]", error);
        toast.error("Something went wrong");
      }
    }

    fetchProducts();
  }, [category]);

  if (!products || products.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full px-4 md:px-0  md:w-auto">
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center gap-10 w-full">
      {category === "all" && <Slider />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 px-3">
        {products.map((item, index) => (
          <MoreProductsItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
