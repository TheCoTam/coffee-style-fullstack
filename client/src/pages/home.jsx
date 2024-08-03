import AboutContent from "@/components/home/about-content";
import FeaturedMugs from "@/components/home/featured-mugs";
import HeaderContent from "@/components/home/header-content";
import HomeBlog from "@/components/home/home-blog";
import Magazine from "@/components/home/magazine";
import MoreProducts from "@/components/home/more-products";
import Parallax from "@/components/home/parallax";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center gap-16 w-full">
      <HeaderContent />
      <AboutContent />
      <FeaturedMugs />
      <MoreProducts />
      <Magazine />
      <Parallax />
      <HomeBlog />
    </div>
  );
};

export default HomePage;
