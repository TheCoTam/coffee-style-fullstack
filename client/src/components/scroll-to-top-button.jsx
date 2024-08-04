import { ArrowsUpFromLine } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={handleScrollToTop}
      className={
        "fixed bottom-[1rem] right-[1rem] bg-slate-100 rounded-xl p-[5px] " +
        (isVisible ? "animate-float-in" : "hidden")
      }
    >
      <ArrowsUpFromLine className="text-teal-600" />
    </button>
  );
};

export default ScrollToTopButton;
