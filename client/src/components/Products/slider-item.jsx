import { Link } from "react-router-dom";

const SliderItem = ({ _id, image_url, title, description }) => {
  const url = import.meta.env.VITE_BACKEND_URL;

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="lg:w-1/2 h-[380px] flex items-center justify-center overflow-hidden rounded-md relative group">
        <img
          src={url + "/images/" + image_url}
          alt="slider"
          className="object-cover w-full h-full"
        />
        <Link
          to={"/blog/" + _id}
          className="hidden group-hover:flex justify-center group-hover:absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-10 cursor-pointer"
        >
          <button className="uppercase bg-white mt-auto mb-3 w-[90%] h-[40px] animate-fadeIn font-semibold">
            read the full story
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center lg:items-start text-center lg:text-start justify-center gap-5 lg:w-1/2">
        <Link to={"/blog/" + _id} className="text-3xl font-semibold">
          {title}
        </Link>
        <p className="text-gray-500">{description}</p>
        <Link to={"/blog/" + _id}>
          <button className="uppercase text-white bg-black px-6 py-4 self-center lg:self-start">
            read the full story
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SliderItem;
