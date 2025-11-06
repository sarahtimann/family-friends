import Image from "next/image";

const ScrollBar = () => {
  return (
    <button className="mb-8 flex items-center gap-3 rounded-full border-[1.5px] border-gray-300 px-4 py-2 text-lg text-gray-400 transition-colors duration-200 hover:border-red-300 hover:bg-red-300 hover:text-white">
      <div className="h-10 w-10 overflow-hidden rounded-full">
        <Image
          loading="eager"
          alt="Pet"
          src="https://placecats.com/neo/300/200"
          width={40}
          height={40}
          className="h-full w-full object-cover"
        />
      </div>
      Alle
    </button>
  );
};

export default ScrollBar;
