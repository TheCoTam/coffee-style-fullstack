import SkeletonItem from "./skeleton-item";

const SkeletonView = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
    </div>
  );
};

export default SkeletonView;
