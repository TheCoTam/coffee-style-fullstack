import Preview from "@/components/preview";
import { formatDate } from "@/lib/utils";

const BlogContent = ({ value, createdAt }) => {
  return (
    <div>
      <div className="flex gap-5 items-center">
        <p className="text-gray-500">{formatDate(createdAt)}</p>
        <div className="flex-1 bg-gray-200 h-[1px]"></div>
      </div>
      <Preview value={value} />
    </div>
  );
};

export default BlogContent;
