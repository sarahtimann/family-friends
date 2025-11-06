import { GoHome } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";

const NavBar = () => {
  return (
    <>
      <GoHome className="text-3xl text-gray-400 hover:text-red-300" />
      <FaRegStar className="text-3xl text-gray-400 hover:text-red-300" />
      <FiMessageCircle className="text-3xl text-gray-400 hover:text-red-300" />
      <RxPerson className="text-3xl text-gray-400 hover:text-red-300" />
    </>
  );
};

export default NavBar;
