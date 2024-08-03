import MoreProductsItem from "../home/more-products-item";
import SkeletonItem from "./SkeletonItem";
import Slider from "./slider";
import { more_products_data as products } from "@/data/pseudo-data-home";

const ProductsList = () => {
  if (!products || products.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full px-4 md:px-0  md:w-auto">
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <Slider />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 px-3">
        {products.map((item) => (
          <MoreProductsItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
