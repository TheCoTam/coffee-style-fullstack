import { formatPrice } from "@/lib/utils";
import { Link } from "react-router-dom";

const FeaturedMugsItem = ({ id, image_url, name, price }) => {
  // TODO: fetchAPI mugs data
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="group relative">
        <img
          src={image_url}
          alt={name}
          className="sm:w-[460px] sm:h-[550px] object-cover"
        />
        <Link
          to={"/product/" + id}
          className="hidden group-hover:flex justify-center group-hover:absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-10 cursor-pointer"
        >
          <button className="uppercase bg-white mt-auto mb-3 w-[90%] h-[50px] animate-fadeIn font-semibold">
            explore mug
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-3 text-center">
        <p className="text-2xl font-semibold">{name}</p>
        <p className="font-semibold text-gray-400">{formatPrice(price)}</p>
      </div>
    </div>
  );
};

export default FeaturedMugsItem;
