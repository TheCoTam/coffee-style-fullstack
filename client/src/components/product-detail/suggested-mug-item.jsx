import { formatPrice } from "@/lib/utils";
import { Link } from "react-router-dom";

const url = import.meta.env.VITE_BACKEND_URL;

const SuggestedMugItem = ({ _id, image_url, name, price }) => {
  return (
    <div className="flex flex-col items-center gap-8 mb-8 ">
      <div className="flex items-center justify-center group relative w-full sm:h-[300px] overflow-hidden rounded-md">
        <img
          src={url + "/images/" + image_url}
          alt="blog"
          className="w-full h-full  object-cover"
        />
        <Link
          to={"/product/" + _id}
          className="hidden group-hover:flex justify-center group-hover:absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-10 cursor-pointer"
        >
          <button className="uppercase bg-white mt-auto mb-3 w-[90%] h-[40px] animate-fadeIn font-semibold">
            read the full story
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <Link
          to={"/blog/" + _id}
          className="text-2xl font-semibold line-clamp-3"
        >
          {name}
        </Link>
        <p className="font-semibold text-gray-400 line-clamp-3">
          {formatPrice(price)}
        </p>
      </div>
    </div>
  );
};

export default SuggestedMugItem;
