import Image from "next/image";
import Link from "next/link";

import { FaRegStar } from "react-icons/fa";

const PetList = () => {
  return (
    <Link href="/detalje">
      <div className="rounded-2xl p-2 shadow-md">
        <div className="grid">
          <Image
            loading="eager"
            alt="Pet"
            src="https://placecats.com/neo/300/200"
            width={300}
            height={200}
            className="-mx-2 -mt-2 mb-2 w-[calc(100%+1rem)] max-w-none rounded-t-2xl"
          />
          <FaRegStar className="z-10 m-2 -mt-35 mr-2 self-start justify-self-end rounded-full bg-gray-100/70 p-1 text-3xl text-white" />
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="font-semibold tracking-wide">Kælenavn</div>
          <div className="text-sm text-gray-600">Alder/måned</div>
        </div>

        <div className="mt-1 text-sm text-gray-700">
          Race & Lorem ipsum dolor sit amet.
        </div>
      </div>
    </Link>
  );
};

export default PetList;
