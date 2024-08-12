import { useEffect, useState } from "react";
import SkeletonView from "./skeleton-view";
import toast from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

import { formatDate } from "@/lib/utils";
import { POST_CATEGORIES } from "@/data/post-categories";
import Actions from "./actions";

const url = import.meta.env.VITE_BACKEND_URL;

const ViewPosts = () => {
  const [posts, setPosts] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get(url + "/api/post/get/all");

      if (response.data.success) {
        setPosts(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("[view-mugs]", error);
      toast.error("Something went wrong with Mugs");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center my-[50px] gap-16">
      <p className="text-3xl uppercase font-bold text-gray-700">
        View All Posts
      </p>
      {(!posts || posts.length === 0) && <SkeletonView />}
      <div className="w-full flex flex-col items-center gap-8">
        {posts.map((post) => {
          let Category = "";
          POST_CATEGORIES.map((item) => {
            if (post.category === item.value) {
              Category = item.label;
            }
          });

          return (
            <div
              key={post._id}
              className="flex flex-col md:flex-row gap-5 w-[98%] border-2 border-teal-100 p-3 rounded-md shadow-sm"
            >
              <Link
                to={"/blog/" + post._id}
                className="flex items-center justify-center overflow-hidden w-full md:w-[300px] h-[200px] lg:w-[500px] lg:h-[300px] rounded-md"
              >
                <img
                  src={url + "/images/" + post.image_url}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </Link>
              <div className="flex-1 flex flex-col gap-3 md:gap-5">
                <div className="flex gap-5">
                  <Link
                    to={"/blog/" + post._id}
                    className="text-2xl md:text-3xl font-semibold w-full h-[39px] lg:h-[79px] line-clamp-1 lg:line-clamp-2 pr-5"
                  >
                    {post.title}
                  </Link>
                  <Actions type="post" id={post._id} fetchData={fetchData} />
                </div>
                <div className="flex gap-3">
                  <p>{formatDate(post.updatedAt)}</p>
                  <div className="w-[3px] h-full bg-gray-100 rounded-md"></div>
                  <p>{Category}</p>
                </div>
                <div className="flex flex-col gap-[5px] w-full h-[95px] lg:h-[155px]">
                  <p className="flex-1 text-gray-400 line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewPosts;
