import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { blog_data } from "@/data/pseudo-data-home";
import SliderItem from "./slider-item";

const Slider = () => {
  return (
    <Carousel opts={{ loop: true }} className="w-[70%] sm:w-[80%]">
      <CarouselContent>
        {blog_data.map((item, index) => (
          <CarouselItem key={index}>
            <SliderItem {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="" />
      <CarouselNext />
    </Carousel>
  );
};

export default Slider;
