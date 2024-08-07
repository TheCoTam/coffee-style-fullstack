import { Gem, Lightbulb } from "lucide-react";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="flex items-center justify-center overflow-hidden lg:w-1/2 h-[500px]">
        <img
          src="/banner.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-slate-800 text-white lg:w-1/2 px-2 sm:px-10 lg:px-20 py-20 space-y-7 text-center lg:text-start">
        <p className="text-2xl">
          Handmade by <b>CoffeeStyle</b>.
        </p>
        <p>
          The most versatile furniture system ever created. Designed to fit your
          life.
        </p>
        <div>
          <div className="flex gap-3 flex-col lg:flex-row items-center lg:items-start">
            <Gem />
            <p>Premium Quality</p>
          </div>
          <p className="lg:pl-10 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in.
          </p>
        </div>
        <div>
          <div className="flex gap-3 flex-col lg:flex-row items-center lg:items-start">
            <Lightbulb />
            <p>Gentle to the Environment</p>
          </div>
          <p className="lg:pl-10 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
