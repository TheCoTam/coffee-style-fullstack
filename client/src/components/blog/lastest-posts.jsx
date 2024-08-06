import axios from "axios";
import { Frown } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useSearchParams } from "react-router-dom";

const url = import.meta.env.VITE_BACKEND_URL;

const LatestPosts = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(url + "/api/post/get/" + category);
        if (res.data.success) {
          setPosts(res.data.data);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log("[latest-posts]", error);
        toast.error("Something went wrong with the latest posts");
      }
    }

    fetchData();
  }, [category]);

  return (
    <div className="space-y-5 lg:w-2/3">
      <p className="text-lg text-gray-700">Latest Posts</p>
      <hr />
      <div className="space-y-10 md:space-y-5">
        {posts.length === 0 && (
          <div className="text-2xl text-gray-500 text-center w-full">
            It&apos;s seem that we haven&apos;t had any posts yet.{" "}
            <Frown className="inline" />
          </div>
        )}
        {posts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-5 animate-float-in"
          >
            <div className="relative flex items-center justify-center md:w-[260px] h-[300px] md:h-[210px] overflow-hidden shrink-0 rounded-md group">
              <img
                src={url + "/images/" + post.image_url}
                alt=""
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
            <div className="space-y-5 text-center md:text-start">
              <Link to={"/blog/" + post._id} className="text-xl">
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

export default LatestPosts;
