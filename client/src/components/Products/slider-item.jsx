const SliderItem = ({ image_url, title, description }) => {
  const url = import.meta.env.VITE_BACKEND_URL;
  // TODO: router for slider item
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="lg:w-1/2 h-[380px] flex items-center justify-center overflow-hidden rounded-md">
        <img
          src={url + "/images/" + image_url}
          alt="slider"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col items-center lg:items-start text-center lg:text-start justify-center gap-5 lg:w-1/2">
        <p className="text-3xl font-semibold">{title}</p>
        <p className="text-gray-500">{description}</p>
        <button className="uppercase text-white bg-black px-6 py-4 self-center lg:self-start">
          read the full story
        </button>
      </div>
    </div>
  );
};

export default SliderItem;
