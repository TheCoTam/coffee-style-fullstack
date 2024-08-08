import { formatPrice } from "@/lib/utils";
import { Link } from "react-router-dom";

const MoreProductsItem = ({ _id, image_url, name, price }) => {
  const url = import.meta.env.VITE_BACKEND_URL;

  return (
    <div className="flex flex-col items-center gap-8 mb-8">
      <div className="group relative">
        <img
          src={url + "/images/" + image_url}
          alt={name}
          className="sm:w-[380px] lg:w-[300px] sm:h-[380px] object-cover"
        />
        <Link
          to={"/product/" + _id}
          className="hidden group-hover:flex justify-center group-hover:absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-10 cursor-pointer"
        >
          <button className="uppercase bg-white mt-auto mb-3 w-[90%] h-[40px] animate-fadeIn font-semibold">
            explore mug
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-3 text-center">
        <Link to={"/product/" + _id} className="text-2xl font-semibold">
          {name}
        </Link>
        <p className="font-semibold text-gray-400">{formatPrice(price)}</p>
      </div>
    </div>
  );
};

export default MoreProductsItem;
