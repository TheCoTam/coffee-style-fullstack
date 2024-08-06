import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SliderItem from "./slider-item";
import toast from "react-hot-toast";
import axios from "axios";

const Slider = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = import.meta.env.VITE_BACKEND_URL;
        const res = await axios.get(url + "/api/post/featured");

        if (res.data.success) {
          setPosts(res.data.data);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log("[slider]", error);
        toast.error("Something went wrong with the slider");
      }
    }

    fetchData();
  }, []);

  return (
    <Carousel
      opts={{ loop: true }}
      className="w-[70%] sm:w-[80%] animate-float-in"
    >
      <CarouselContent>
        {posts.map((item, index) => (
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
