import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { LoaderCircle } from "lucide-react";

import { formatPrice } from "@/lib/utils";
import AddToCartForm from "@/components/product-detail/add-to-cart-form";
import Dimensions from "@/components/product-detail/dimensions";
import Banner from "@/components/product-detail/banner";
import SuggestedMug from "@/components/product-detail/suggested-mug";

const url = import.meta.env.VITE_BACKEND_URL;

const ProductDetail = () => {
  const [mug, setMug] = useState(undefined);
  const { productId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(url + "/api/mug/detail/" + productId);
        if (res.data.success) {
          setMug(res.data.data);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log("[product-detail]", error);
        toast.error("Something went wrong");
      }
    }

    fetchData();
  }, [productId]);

  if (!mug) {
    return (
      <div className="h-[calc(100vh-88px)] w-full flex items-center justify-center">
        <LoaderCircle size={150} className="text-teal-400 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-20 my-[50px]">
      <div className="w-[95%] lg:w-[90%] xl:w-[80%] flex flex-col lg:flex-row  gap-14">
        <div className="flex items-center justify-center h-[460px] w-auto lg:w-[460px] rounded-md overflow-hidden shrink-0">
          <img
            src={url + "/images/" + mug.image_url}
            alt="mug image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start justify-center gap-8 text-center lg:text-start">
          <p className="text-4xl">{mug.name}</p>
          <p className="text-gray-500 w-auto sm:w-[80%] lg:w-auto">
            {mug.description}
          </p>
          <p className="text-2xl text-red-500">{formatPrice(mug.price)}</p>
          <div className="flex flex-col gap-3 w-full sm:w-auto">
            <p className="uppercase font-semibold text-gray-600">quantity</p>
            <AddToCartForm />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row text-center lg:text-start items-center lg:items-start gap-10 lg:gap-20 px-5 sm:px-32 lg::px-16">
        <div className="space-y-4 lg:w-auto">
          <p className="text-lg font-semibold uppercase text-gray-500">
            Details
          </p>
          <p className="text-gray-500">{mug.detail}</p>
        </div>
        <Dimensions
          length={mug.length}
          height={mug.height}
          width={mug.width}
          weight={mug.weight}
        />
      </div>
      <Banner />
      <SuggestedMug currentProductId={productId} />
    </div>
  );
};

export default ProductDetail;
