import axios from "axios";
import { Frown } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const url = import.meta.env.VITE_BACKEND_URL;

const FeaturedPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url + "/api/post/featured");
        if (response.data.success) {
          setPosts(response.data.data);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log("[featured-posts]", error);
        toast.error("Something went wrong with the featured posts");
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center gap-10 w-full animate-float-in">
      <div className="flex items-center text-gray-400">
        <p>____</p>
        <p className="uppercase text-sm font-semibold">Featured Post</p>
        <p>____</p>
      </div>
      {posts.length === 0 && (
        <div className="text-2xl text-gray-500 text-center w-full">
          It&apos;s seem that we haven&apos;t had any posts yet.{" "}
          <Frown className="inline" />
        </div>
      )}
      <div className="flex flex-col lg:flex-row gap-14 lg:gap-5 justify-center w-full lg:w-[940px]">
        {posts.map((post, index) => (
          <div key={index} className="flex flex-col items-center gap-5">
            <div className="flex items-center justify-center w-[90%] lg:w-[460px] h-[300px] overflow-hidden relative group rounded-md">
              <img
                src={url + "/images/" + post.image_url}
                alt="blog"
                className="object-cover w-full h-full"
              />
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
