import Link from "next/link";
import Image from "next/image";

import Header from "@/app/components/Header";
// import StarDetail from "@/app/components/StarList";
import PetInfoBar from "@/app/components/PetInfoBar";
import Description from "@/app/components/Description";
import Update from "@/app/components/Update";
import AdoptBtn from "@/app/components/AdoptBtn";
// import BackBtn from "@/app/components/BackBtn";

import { FaRegStar } from "react-icons/fa";
import { IoChevronBackOutline } from "react-icons/io5";

const detalje = () => {
  return (
    <main className="rounded-3xl bg-red-50 pt-4 pr-4 pb-4 pl-4">
      <header className="mr-7 mb-6 ml-7 text-black">
        <Header />
      </header>
      <div className="grid gap-2">
        <div className="z-10 col-1 row-1 flex items-start p-2">
          <Link href="/">
            <IoChevronBackOutline className="rounded-full bg-gray-200/70 pr-1 text-3xl text-gray-800 transition-colors duration-200 hover:bg-red-300" />
          </Link>
        </div>
        <div className="z-10 col-1 row-1 flex items-start justify-self-end p-2">
          <FaRegStar className="rounded-full bg-gray-300/70 p-1 text-3xl text-white transition-colors duration-200 hover:bg-red-300" />
        </div>
        <Image
          loading="eager"
          alt="Pet"
          src="https://placecats.com/neo/300/200"
          width={300}
          height={200}
          className="col-1 row-1 w-[calc(100%+1rem)] rounded-2xl"
        />
      </div>
      <h1 className="mt-4 text-2xl font-bold">Samojed Willie</h1>
      <PetInfoBar />
      <Description />
      <Update />
      <div className="mt-6 mb-10 flex justify-center">
        <AdoptBtn />
      </div>
    </main>
  );
};

export default detalje;
