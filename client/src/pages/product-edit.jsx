import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import DescriptionForm from "@/components/product-edit/description-form";
import NameForm from "@/components/product-edit/name-form";
import DetailForm from "@/components/product-edit/detail-form";

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
    <div className="flex gap-10 px-[50px] py-[80px] w-full">
      <div className="w-[40%] space-y-3">
        <NameForm initialData={mug} productId={productId} />
        <DescriptionForm initialData={mug} productId={productId} />
      </div>
      <div className="flex-1">
        <DetailForm initialData={mug} productId={productId} />
      </div>
    </div>
  );
};

export default ProductEditPage;
