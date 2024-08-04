import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";

import Navbar from "@/components/navbar/navbar";
import HomePage from "@/pages/home";
import Products from "@/pages/products";
import Blog from "@/pages/blog";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import StyleGuide from "@/pages/style-guide";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/style-guide" element={<StyleGuide />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
      <Toaster />
    </div>
  );
}

export default App;
