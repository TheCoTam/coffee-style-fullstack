import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import DescriptionForm from "@/components/product-edit/description-form";
import NameForm from "@/components/product-edit/name-form";
import DetailForm from "@/components/product-edit/detail-form";
import PriceForm from "@/components/product-edit/price-form";
import CategoryForm from "@/components/product-edit/category-form";
import DimensionsForm from "@/components/product-edit/dimensions-form";
import ImageForm from "@/components/product-edit/image-form";

const ProductEditPage = () => {
  const { productId } = useParams();
  const [mug, setMug] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = import.meta.env.VITE_BACKEND_URL;
        const res = await axios.get(url + "/api/mug/detail/" + productId);

        if (res.data.success) {
          setMug(res.data.data);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log("[product-edit]", error);
        toast.error("Something went wrong");
      }
    }

    fetchData();
  }, [productId]);

  if (!mug) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-10 px-[10px] sm:px-[35px] lg:px-[50px] py-[80px] w-full">
      <div className="lg:w-[40%] space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-1">
          <NameForm initialData={mug} productId={productId} />
          <DescriptionForm initialData={mug} productId={productId} />
          <PriceForm initialData={mug} productId={productId} />
          <CategoryForm initialData={mug} productId={productId} />
        </div>
        <DimensionsForm initialData={mug} productId={productId} />
      </div>
      <div className="flex-1 space-y-3">
        <DetailForm initialData={mug} productId={productId} />
        <ImageForm initialData={mug} productId={productId} />
      </div>
    </div>
  );
};

export default ProductEditPage;
