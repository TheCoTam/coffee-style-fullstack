import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="flex flex-col items-center gap-5 w-[95%] md:w-[80%] lg:w-1/2">
      <p className="text-4xl text-center">
        Even the all-powerful Pointing has no control about the blind texts.
      </p>
      <p className="text-center text-gray-500">
        It is a paradisematic country, in which roasted parts of sentences fly
        into your mouth. Even the all-powerful Pointing has no control about the
        blind texts it is an almost unorthographic life One day however a small
        line of blind text by the name of Lorem Ipsum decided to leave for the
        far World of Grammar.
      </p>
      <Link to="/about">
        <Button variant="link" className="text-lg text-rose-700">
          Read the full Story
        </Button>
      </Link>
    </div>
  );
};

export default AboutContent;
