import ProductsHeader from "@/components/Products/header";
import ProductsList from "@/components/Products/products-list";

const Products = () => {
  return (
    <div className="flex flex-col items-center gap-20 w-full my-[50px] min-h-[calc(100vh-188px)]">
      <ProductsHeader />
      <ProductsList />
    </div>
  );
};

export default Products;
