import { more_products_data } from "@/data/pseudo-data-home";
import MoreProductsItem from "./more-products-item";

const MoreProducts = () => {
  // TODO: fetch API
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex items-center">
        <p>____</p>
        <p className="uppercase text-gray-500 font-semibold">more products</p>
        <p>____</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 px-3">
        {more_products_data.map((mug) => (
          <MoreProductsItem key={mug.id} {...mug} />
        ))}
      </div>
    </div>
  );
};

export default MoreProducts;
