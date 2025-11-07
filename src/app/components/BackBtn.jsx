import { IoChevronBackOutline } from "react-icons/io5";

const BackBtn = () => {
  return (
    <button className="z-10 m-2 -mt-27 mr-2 self-start justify-self-end rounded-full bg-gray-100/70 pt-0.5 pr-0 pb-0.5 pl-0 text-2xl text-black transition-colors duration-200 hover:bg-red-300">
      <IoChevronBackOutline className="mr-1" />
    </button>
  );
};

export default BackBtn;
