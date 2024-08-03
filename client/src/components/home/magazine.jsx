import { Link } from "react-router-dom";

const Magazine = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex items-center">
        <p>____</p>
        <p className="uppercase text-gray-500 font-semibold text-sm sm:text-base">
          buy 2 mugs and get a coffee magazine free
        </p>
        <p>____</p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row lg:w-[95%] xl:w-[85%] gap-5">
        <div className="flex flex-col lg:w-1/2 gap-5 items-center lg:items-start text-center lg:text-start">
          <p className="text-sm text-gray-400 font-semibold uppercase">
            premium offer
          </p>
          <p className="text-4xl">Get our Coffee Magazine</p>
          <p className="text-gray-400">
            The most versatile furniture system ever created. Designed to fit
            your life.
          </p>
          <Link
            to="/products"
            className="uppercase bg-black text-white font-semibold w-max px-8 py-4"
          >
            start shopping
          </Link>
        </div>
        <div className="flex gap-2 sm:gap-5 justify-center">
          <img
            src="/test-product-image.jpg"
            alt="product"
            className="w-2/3 sm:w-[280px] h-[240px] sm:h-[280px] object-cover"
          />
          <div className="flex flex-col gap-[10px] sm:gap-5 h-full shrink-0 w-1/3 sm:w-auto">
            <img
              src="/test-product-image.jpg"
              alt="product"
              className="w-full sm:w-[160px] h-[115px] sm:h-[130px] object-cover"
            />
            <img
              src="/test-product-image.jpg"
              alt="product"
              className="w-full sm:w-[160px] h-[115px] sm:h-[130px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magazine;
