import { useSearchParams } from "react-router-dom";
import { PRODUCT_FILTER_MENU as header } from "@/data/product-filter-menu";

const ProductsHeader = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";

  let name = "";
  let description = "";

  header.map((item) => {
    if (item.value === category) {
      name = item.name;
      description = item.description;
    }
  });

  return (
    <div className="flex flex-col items-center text-center gap-5 mt-[30px] animate-float-in">
      <p className="text-3xl font-semibold">{name}</p>
      <p className="text-gray-500">{description}</p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 w-full">
        {header.map((item) => (
          <button
            key={item.value}
            className={`uppercase border-2 w-full md:w-auto ${
              category === item.value
                ? "border-orange-500 text-orange-500"
                : "border-orange-300 text-orange-300 hover:border-orange-500 hover:text-orange-500"
            } px-4 py-2`}
            onClick={() => setSearchParams({ category: item.value })}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductsHeader;
