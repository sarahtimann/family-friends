// import Image from "next/image";
import Link from "next/link";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

// import Card from "./Card";
import { Suspense } from "react";

const PetList = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchProduct />
    </Suspense>
  );
};

const FetchProduct = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const { products } = await response.json();

  if (!products || products.length === 0) {
    return <div>No products available.</div>;
  }

  return products.map((product) => (
    <Link href={`/detalje/${product.id}`} key={product.id}>
      <div className="grid rounded-2xl bg-white p-2 shadow-md hover:shadow-lg">
        <div className="relative grid">
          <Image
            loading="eager"
            alt={product.title}
            src={product.thumbnail}
            width={300}
            height={200}
            className="-mx-2 -mt-2 mb-2 w-[calc(100%+1rem)] max-w-none rounded-t-2xl bg-blue-200"
          />
          <FaRegStar className="absolute top-0 right-0 z-10 self-start justify-self-end rounded-full bg-gray-100/70 p-1 text-3xl text-white transition-colors duration-200 hover:bg-red-300" />
        </div>
        <div className="mt-2 flex items-center justify-between gap-2">
          <div className="font-semibold tracking-wide">{product.title}</div>
          <div className="text-sm text-gray-600">{product.price}$</div>
        </div>

        <div className="mt-1 text-sm text-gray-700">
          {product.brand ? product.brand : "Unknown Brand"}
        </div>
      </div>
    </Link>
  ));
};

export default PetList;
