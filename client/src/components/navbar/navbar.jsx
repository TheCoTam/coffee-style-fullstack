import NavbarSheet from "@/components/navbar/navbar-sheet";

const Navbar = () => {
  const optionClassName =
    "uppercase text-xs font-semibold text-gray-400 cursor-pointer hover:text-gray-800";
  return (
    <div className="flex justify-evenly my-[30px] mx-5">
      <img src="/logo.png" alt="Logo" className="w-[112px]" />
      <div className="flex items-center justify-between w-max gap-3">
        <p className={optionClassName}>Home</p>
        <p className={optionClassName}>our Products</p>
        <p className={optionClassName}>blogs</p>
        <p className={optionClassName}>about</p>
        <p className={optionClassName}>contact</p>
        <p className={optionClassName}>styleguilde</p>
      </div>
      <NavbarSheet />
    </div>
  );
};

export default Navbar;
