import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";

import HomePage from "@/pages/home";
import Products from "@/pages/products";
import Blog from "@/pages/blog";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import StyleGuide from "@/pages/style-guide";
import BlogDetail from "@/pages/blog-detail";
import ProductDetail from "@/pages/product-detail";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import ScrollToTop from "@/components/scroll-to-top";
import ProductEditPage from "@/pages/product-edit";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/product/:productId/edit" element={<ProductEditPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogId" element={<BlogDetail />} />
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
