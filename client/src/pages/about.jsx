import AboutHeader from "@/components/about/about-header";
import AboutIntroduction from "@/components/about/about-introduction";
import AboutParallax from "@/components/about/about-parallax";
import History from "@/components/about/history";

const About = () => {
  return (
    <div className="flex flex-col items-center gap-16 my-[50px]">
      <AboutHeader />
      <AboutIntroduction />
      <AboutParallax />
      <History />
    </div>
  );
};

export default About;
