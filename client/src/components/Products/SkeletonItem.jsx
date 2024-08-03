import { Skeleton } from "@/components/ui/skeleton";

const SkeletonItem = () => {
  return (
    <div className="flex flex-col gap-5">
      <Skeleton className="w-full md:w-[300px] h-[300px] md:h-[380px]" />
      <div className="flex flex-col gap-3">
        <Skeleton className="h-4 w-[250px] rounded-full" />
        <Skeleton className="h-4 w-[200px] rounded-full" />
      </div>
    </div>
  );
};

export default SkeletonItem;
