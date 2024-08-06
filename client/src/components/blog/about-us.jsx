import { Link, useSearchParams } from "react-router-dom";

import { POST_CATEGORIES } from "@/data/post-categories";

const AboutUs = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="space-y-10 lg:w-1/3">
      <div className="space-y-5">
        <p className="text-lg text-gray-700">About Us</p>
        <hr />
        <div className="flex items-center justify-center w-[112px] h-[24px] overflow-hidden">
          <img src="/logo.png" alt="logo" className="object-cover" />
        </div>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <Link
          to="/about"
          className="text-teal-400 hover:text-teal-500 border-b-2 border-teal-400 hover:border-teal-500"
        >
          Read the full Story
        </Link>
      </div>
      <div className="space-y-5">
        <p className="text-lg text-gray-700">Category</p>
        <hr />
        <div className="space-y-3">
          {POST_CATEGORIES.map((category, index) => (
            <button
              key={index}
              className="w-full text-start border-l-2 border-teal-300 hover:border-teal-500 px-3 py-1 hover:bg-teal-100 rounded-r-md cursor-pointer"
              onClick={() => setSearchParams({ category: category.value })}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
