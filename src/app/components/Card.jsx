import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

const Card = () => {
  return (
    <div className="rounded-2xl bg-white p-2 shadow-md hover:shadow-lg">
      <div className="relative grid">
        <Image
          loading="eager"
          alt="Pet"
          src="https://placecats.com/neo/300/200"
          width={300}
          height={200}
          className="-mx-2 -mt-2 mb-2 w-[calc(100%+1rem)] max-w-none rounded-t-2xl"
        />
        <FaRegStar className="absolute top-0 right-0 z-10 self-start justify-self-end rounded-full bg-gray-100/70 p-1 text-3xl text-white transition-colors duration-200 hover:bg-red-300" />
      </div>
      <div className="mt-2 flex items-center justify-between gap-2">
        <div className="font-semibold tracking-wide">Harry</div>
        <div className="text-sm text-gray-600">Young</div>
      </div>

      <div className="mt-1 text-sm text-gray-700">
        Race & Lorem ipsum dolor sit amet.
      </div>
    </div>
  );
};

export default Card;
