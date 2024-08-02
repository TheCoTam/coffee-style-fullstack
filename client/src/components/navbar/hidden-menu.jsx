import { Link } from "react-router-dom";

const HiddenMenu = () => {
  const optionClassName =
    "uppercase font-semibold text-gray-400 cursor-pointer hover:text-teal-700";

  return (
    <div className="flex flex-col gap-3 text-center">
      <Link to="/" className={optionClassName}>
        home
      </Link>
      <p className={optionClassName}>our Products</p>
      <p className={optionClassName}>blogs</p>
      <p className={optionClassName}>about</p>
      <p className={optionClassName}>contact</p>
      <p className={optionClassName}>styleguilde</p>
    </div>
  );
};

export default HiddenMenu;
