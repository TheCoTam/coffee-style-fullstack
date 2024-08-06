const AboutHeader = () => {
  return (
    <div className="w-full lg:w-[95%] bg-gray-100 flex flex-col items-center gap-10 pt-[70px] pb-[30px]">
      <p className="text-4xl">About</p>
      <p className="text-center text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br /> Suspendisse varius enim in eros elementum tristique. Duis cursus,
        mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
        libero vitae erat.
      </p>
      <div className="flex items-center justify-center w-[70%] h-[400px] overflow-hidden animate-float-in">
        <img src="about1.jpg" alt="image" className="object-cover" />
      </div>
    </div>
  );
};

export default AboutHeader;
