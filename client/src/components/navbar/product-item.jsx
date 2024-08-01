import { formatPrice } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";

const ProductItem = ({ name, image_url, price, amount }) => {
  return (
    <div className="flex items-center justify-between">
      <img src={image_url} alt="Product" className="w-[80px] rounded-md" />
      <div className="flex flex-col">
        <p className="font-semibold">{name}</p>
        <p>{formatPrice(price)}</p>
      </div>
      <div className="flex items-center gap-2">
        <button className="bg-red-100 hover:bg-red-200 active:bg-red-300 rounded-full text-red-400">
          <Minus size={14} />
        </button>
        <p className="text-sm font-semibold">{amount}</p>
        <button className="bg-green-100 hover:bg-gray-200 active:bg-green-300 rounded-full text-green-400">
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
