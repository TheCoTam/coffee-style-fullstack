const SliderItem = ({ image_url, title, description }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="lg:w-1/2 h-[380px] flex items-center justify-center overflow-hidden">
        <img src={image_url} alt="slider" className="object-cover" />
      </div>
      <div className="flex flex-col items-center justify-center gap-5 lg:w-1/2">
        <p className="text-3xl font-semibold">{title}</p>
        <p className="text-gray-500">{description}</p>
        <button className="uppercase text-white bg-black px-6 py-4 self-start md:self-auto">
          read the full story
        </button>
      </div>
    </div>
  );
};

export default SliderItem;
