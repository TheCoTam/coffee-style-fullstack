import AboutUs from "@/components/blog/about-us";
import BlogHeader from "@/components/blog/blog-header";
import LatestPosts from "@/components/blog/lastest-posts";

const Blog = () => {
  return (
    <div className="min-h-[calc(100vh-28px)] flex flex-col items-center gap-14 my-[30px]">
      <BlogHeader />
      <div className="flex flex-col lg:flex-row gap-5 w-[95%] md:w-[85%] lg:w-[75%]">
        <LatestPosts />
        <AboutUs />
      </div>
    </div>
  );
};

export default Blog;
