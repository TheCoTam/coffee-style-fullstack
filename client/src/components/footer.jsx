import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-100 text-gray-600 w-full flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between px-32 py-24">
      <div className="space-y-4">
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-black text-lg font-semibold">Explore</p>
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <Link to="/products" className="hover:text-black">
            Products
          </Link>
          <Link to="/blog" className="hover:text-black">
            Blog
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-black text-lg font-semibold">Company</p>
        <Link to="/about" className="hover:text-black">
          About
        </Link>
        <Link to="/contact" className="hover:text-black">
          Contact
        </Link>
      </div>
      <div className="space-y-4">
        <p className="text-black text-lg font-semibold">Social</p>
        <Youtube className="text-red-500" />
        <Facebook className="text-blue-400" />
        <Twitter className="text-blue-400" />
        <Instagram className="text-orange-700" />
        <Linkedin className="text-blue-500" />
      </div>
    </div>
  );
};

export default Footer;
