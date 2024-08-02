import AboutContent from "@/components/home/about-content";
import FeaturedMugs from "@/components/home/featured-mugs";
import HeaderContent from "@/components/home/header-content";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center gap-16 w-full">
      <HeaderContent />
      <AboutContent />
      <FeaturedMugs />
    </div>
  );
};

export default HomePage;
