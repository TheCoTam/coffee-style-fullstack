import { Skeleton } from "@/components/ui/skeleton";

const BlogDetailSkeleton = () => {
  return (
    <div className="flex flex-col my-20 w-full gap-10">
      <div className="space-y-10 w-full">
        <div className="flex flex-col gap-5 px-3 sm:px-10 lg:px-20">
          <Skeleton className="h-[60px] w-full md:w-1/2" />
          <Skeleton className="h-[24px] w-full md:w-3/4" />
        </div>
        <div className="flex items-center justify-center px-5 rounded-md overflow-hidden">
          <Skeleton className="w-full h-[400px]" />
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-5 mx-10 lg:border lg:border-solid lg:border-t-0 py-5">
        <div className="flex flex-col items-center lg:items-start px-10 py-8 gap-3 border-2 border-teal-100 rounded-md lg:border-none">
          <p className="uppercase text-gray-500 font-semibold text-sm">
            written by
          </p>

          <Skeleton className="h-[40px] w-[200px]" />
          <Skeleton className="h-[24px] w-[250px]" />
        </div>
        <div className="flex-1 space-y-3">
          <div className="flex gap-5 items-center">
            <Skeleton className="w-[150px] h-[24px]" />
            <div className="flex-1 bg-gray-200 h-[1px]"></div>
          </div>
          <Skeleton className="w-[95%] h-[200px]" />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailSkeleton;
