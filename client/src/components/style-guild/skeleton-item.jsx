import { Skeleton } from "@/components/ui/skeleton";

const SkeletonItem = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 w-full px-[50px]">
      <Skeleton className="w-full md:w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]" />
      <div className="flex-1 flex flex-col gap-5">
        <Skeleton className="w-full h-[40px] lg:h-[80px]" />
        <div className="flex gap-3">
          <Skeleton className="w-[200px] h-[20px]" />
          <div className="w-[3px] h-full bg-gray-100 rounded-md"></div>
          <Skeleton className="w-[70px] h-[20px]" />
        </div>
        <Skeleton className="w-full h-[100px] lg:h-[160px]" />
      </div>
    </div>
  );
};

export default SkeletonItem;
