import { NavLink } from "react-router-dom";
import { ChartNoAxesGantt } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import NavbarSheet from "@/components/navbar/navbar-sheet";
import HiddenMenu from "./hidden-menu";

const Navbar = () => {
  const optionClassName = ({ isActive }) =>
    `uppercase text-sm font-semibold text-gray-400 cursor-pointer hover:text-teal-800 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:bg-teal-500 after:h-[2px] hover:after:w-full after:transition-all after:duration-300 after:ease-in-out ${
      isActive && "text-teal-700"
    }`;
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item1">
        <div className="flex justify-between lg:justify-evenly my-[30px] mx-5 px-10 lg:px-0">
          <NavLink to="/" className="flex items-center w-[112px]">
            <img src="/logo.png" alt="Logo" />
          </NavLink>
          <div className="hidden lg:flex items-center justify-between w-max gap-5">
            <NavLink to="/" className={optionClassName}>
              home
            </NavLink>
            <NavLink to="products" className={optionClassName}>
              our Products
            </NavLink>
            <NavLink to="blog" className={optionClassName}>
              blogs
            </NavLink>
            <NavLink to="about" className={optionClassName}>
              about
            </NavLink>
            <NavLink to="contact" className={optionClassName}>
              contact
            </NavLink>
            <NavLink to="style-guide" className={optionClassName}>
              styleguide
            </NavLink>
          </div>
          <div className="flex gap-5">
            <NavbarSheet />
            <AccordionTrigger className="lg:hidden p-0">
              <ChartNoAxesGantt />
            </AccordionTrigger>
          </div>
        </div>
        <AccordionContent>
          <HiddenMenu />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Navbar;
