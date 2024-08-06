import { latest_blog_data } from "@/data/pseudo-data-blog";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

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
        {posts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-5 animate-float-in"
          >
            <div className="flex items-center justify-center md:w-[260px] h-[300px] md:h-[210px] overflow-hidden shrink-0 rounded-md">
              <img
                src={url + "/images/" + post.image_url}
                alt=""
                className="object-cover h-full"
              />
            </div>
            <div className="space-y-5 text-center md:text-start">
              <p className="text-xl">{post.title}</p>
              <p className="text-sm text-gray-500">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;
