import "./header.css";
import { IoFastFoodOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className=" h-[150px] bg-gray-800 text-white flex justify-between items-center">
      <IoFastFoodOutline className="h-32 w-32 text-orange-600 mx-16" />

      <h2 className="text-white container text-end font-bold tracking-[5px] text-[24px]">
        Fast Food Catalogue
      </h2>
    </header>
  );
};
export default Header;
