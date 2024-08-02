import { Link } from "react-router-dom";

const HeaderContent = () => {
  return (
    <div className="w-full lg:w-[95%] h-[530px] bg-[url('/header-content.jpg')] bg-bottom bg-cover bg-no-repeat flex flex-col items-center justify-center gap-5">
      <p className="uppercase font-semibold text-gray-300">
        best place to buy coffee
      </p>
      <p className="text-[55px] text-gray-100">Coffee Mugs</p>
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <Link
        to="/products"
        className="uppercase bg-white hover:bg-gray-100 active:bg-gray-200 px-7 py-5 shadow-inner font-semibold"
      >
        explore our products
      </Link>
    </div>
  );
};

export default HeaderContent;
