import { blog_data } from "@/data/pseudo-data-home";
import HomeBlogItem from "./home-blog-item";

const HomeBlog = () => {
  // TODO: fetchAPI blogs data

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex items-center">
        <p>____</p>
        <p className="uppercase text-gray-500 font-semibold">
          behind the mugs, lifestyle stories
        </p>
        <p>____</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 lg:w-[80%] px-5">
        {blog_data.map((blog) => (
          <HomeBlogItem key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default HomeBlog;
