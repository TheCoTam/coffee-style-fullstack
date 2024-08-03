import { Link } from "react-router-dom";

const HomeBlogItem = ({ id, image_url, title, description }) => {
  return (
    <div className="flex flex-col items-center gap-8 mb-8">
      <div className="group relative">
        <img
          src={image_url}
          alt="blog"
          className="w-full h-full sm:w-[380px] lg:w-[300px] sm:h-[300px] object-cover"
        />
        <Link
          to={"/blog/" + id}
          className="hidden group-hover:flex justify-center group-hover:absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-10 cursor-pointer"
        >
          <button className="uppercase bg-white mt-auto mb-3 w-[90%] h-[40px] animate-fadeIn font-semibold">
            read the full story
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-3 self-start">
        <p className="text-2xl font-semibold">{title}</p>
        <p className="font-semibold text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default HomeBlogItem;
