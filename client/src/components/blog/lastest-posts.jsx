import { latest_blog_data } from "@/data/pseudo-data-blog";

const LatestPosts = () => {
  return (
    <div className="space-y-5 lg:w-2/3">
      <p className="text-lg text-gray-700">Latest Posts</p>
      <hr />
      <div className="space-y-10 md:space-y-5">
        {latest_blog_data.map((post, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-5">
            <div className="flex items-center justify-center md:w-[260px] h-[300px] md:h-[210px] overflow-hidden shrink-0">
              <img src={post.image_url} alt="" className="object-cover" />
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
