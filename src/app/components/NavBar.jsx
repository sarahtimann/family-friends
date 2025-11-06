import { GoHome } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";

const NavBar = () => {
  return (
    <>
      <GoHome className="text-3xl text-gray-400" />
      <FaRegStar className="text-3xl text-gray-400" />
      <FiMessageCircle className="text-3xl text-gray-400" />
      <RxPerson className="text-3xl text-gray-400" />
    </>
  );
};

export default NavBar;
