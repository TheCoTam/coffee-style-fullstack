import HomeBlogItem from "./home-blog-item";
import { useEffect, useState } from "react";
import { Frown } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";

const HomeBlog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = import.meta.env.VITE_BACKEND_URL;
        const res = await axios.get(url + "/api/post/home-posts");
        if (res.data.success) {
          setPosts(res.data.data);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log("[home-blog]", error);
        toast.error("Something went wrong with the home blog");
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex items-center">
        <p>____</p>
        <p className="uppercase text-gray-500 font-semibold">
          behind the mugs, lifestyle stories
        </p>
        <p>____</p>
      </div>
      {posts.length === 0 && (
        <div className="text-2xl text-gray-500 text-center w-full">
          It&apos;s seem that we haven&apos;t had any posts yet.{" "}
          <Frown className="inline" />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 lg:w-[80%] px-5">
        {posts.map((blog) => (
          <HomeBlogItem key={blog._id} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default HomeBlog;
