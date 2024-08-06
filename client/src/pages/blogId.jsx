import { useParams } from "react-router-dom";

const BlogId = () => {
  const { blogId } = useParams();
  return <div className="min-h-[calc(100vh-68px)]">{blogId}</div>;
};

export default BlogId;
