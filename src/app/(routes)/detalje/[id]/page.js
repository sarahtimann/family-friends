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
import { Suspense } from "react";
import Loading from "@/app/components/Loading";

export default async function detalje({ params }) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  return (
    <Suspense fallback={<Loading />}>
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
            src={product.images[0]}
            width={300}
            height={200}
            className="col-1 row-1 w-[calc(100%+1rem)] rounded-2xl"
          />
        </div>
        <h1 className="mt-4 text-2xl font-bold">{product.title}</h1>
        <PetInfoBar product={product} />
        <Description product={product} />
        {/* <p className="mb-2 leading-6 font-light text-gray-600">
          {product.description}
        </p> */}
        <Update />
        <div className="mt-6 mb-10 flex justify-center">
          <AdoptBtn />
        </div>
      </main>
    </Suspense>
  );
}
