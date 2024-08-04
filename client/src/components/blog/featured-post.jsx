import { blog_data } from "@/data/pseudo-data-blog";
import { Link } from "react-router-dom";

const FeaturedPost = () => {
  return (
    <div className="flex flex-col items-center gap-10 w-full animate-float-in">
      <div className="flex items-center text-gray-400">
        <p>____</p>
        <p className="uppercase text-sm font-semibold">Featured Post</p>
        <p>____</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-14 lg:gap-5 justify-center w-full lg:w-[940px]">
        {blog_data.map((post, index) => (
          <div key={index} className="flex flex-col items-center gap-5">
            <div className="flex items-center justify-center w-[90%] lg:w-[460px] h-[300px] overflow-hidden relative group">
              <img src={post.image_url} alt="blog" className="object-cover" />
              <Link
                to={"/blog/" + post.id}
                className="hidden group-hover:flex justify-center group-hover:absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-10 cursor-pointer"
              >
                <button className="uppercase text-gray-700 bg-white mt-auto mb-3 w-[90%] h-[40px] animate-fadeIn font-semibold">
                  read the full story
                </button>
              </Link>
            </div>
            <div className="space-y-3 text-center lg:text-start">
              <Link to={"/blog/" + post.id} className="text-lg">
                {post.title}
              </Link>
              <p className="text-sm text-gray-500">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPost;
