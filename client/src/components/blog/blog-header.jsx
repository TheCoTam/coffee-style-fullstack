import FeaturedPost from "./featured-post";

const BlogHeader = () => {
  return (
    <div className="w-full lg:w-[95%] bg-gray-100 flex flex-col items-center gap-10 pt-[70px] pb-[30px]">
      <p className="text-4xl animate-float-in text-center">
        Read coffee stories on our Blog
      </p>
      <p className="text-center text-gray-700 animate-float-in">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br /> Suspendisse varius enim in eros elementum tristique. Duis cursus,
        mi quis.
      </p>
      <FeaturedPost />
    </div>
  );
};

export default BlogHeader;
