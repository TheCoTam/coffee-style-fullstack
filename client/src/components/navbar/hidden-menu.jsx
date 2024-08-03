import { Link } from "react-router-dom";

const HiddenMenu = () => {
  const optionClassName =
    "uppercase font-semibold text-gray-400 cursor-pointer hover:text-teal-700";

  return (
    <div className="flex flex-col gap-3 text-center">
      <Link to="/" className={optionClassName}>
        home
      </Link>
      <Link to="products" className={optionClassName}>
        our Products
      </Link>
      <Link to="blog" className={optionClassName}>
        blogs
      </Link>
      <Link to="about" className={optionClassName}>
        about
      </Link>
      <Link to="contact" className={optionClassName}>
        contact
      </Link>
      <Link to="style-guide" className={optionClassName}>
        styleguide
      </Link>
    </div>
  );
};

export default HiddenMenu;
