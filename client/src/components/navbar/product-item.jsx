import { Minus, Plus } from "lucide-react";
import { useContext } from "react";

import { formatPrice } from "@/lib/utils";
import { ProductsContext } from "@/context/ProductsContext";

const url = import.meta.env.VITE_BACKEND_URL;

const ProductItem = ({ _id, name, image_url, price, amount }) => {
  const { remove1Quantity, add1Quantity } = useContext(ProductsContext);
  return (
    <div className="flex items-center gap-3">
      <img
        src={url + "/images/" + image_url}
        alt="Product"
        className="w-[80px] rounded-md"
      />
      <div className="flex flex-col flex-1">
        <p className="font-semibold">{name}</p>
        <p>{formatPrice(price * amount)}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="bg-red-100 hover:bg-red-200 active:bg-red-300 rounded-full text-red-400"
          onClick={() => remove1Quantity(_id)}
        >
          <Minus size={14} />
        </button>
        <p className="text-sm font-semibold">{amount}</p>
        <button
          className="bg-green-100 hover:bg-gray-200 active:bg-green-300 rounded-full text-green-400"
          onClick={() => add1Quantity(_id)}
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
