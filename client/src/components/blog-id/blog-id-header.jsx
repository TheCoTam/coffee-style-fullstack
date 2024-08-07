const BlogIdHeader = ({ title, description, src }) => {
  const url = import.meta.env.VITE_BACKEND_URL;

  return (
    <div className="space-y-10 w-full">
      <div className="flex flex-col items-center lg:items-start text-center gap-5 px-20">
        <p className="text-3xl font-semibold">{title}</p>
        <p className="text-gray-500">{description}</p>
      </div>
      <div className="flex items-center justify-center px-5 rounded-md overflow-hidden">
        <img
          src={url + "/images/" + src}
          alt="post"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default BlogIdHeader;
