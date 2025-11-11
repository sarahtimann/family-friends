"use client";
import { useRouter } from "next/navigation";

const CategoryElement = ({ category }) => {
  const router = useRouter();

  return (
    <div
      className="mb-8 flex items-center gap-3 rounded-full border-[1.5px] border-gray-300 px-4 py-2 text-gray-400 transition-colors duration-200 hover:border-red-300 hover:bg-red-300 hover:text-white"
      onClick={() => router.push(`?category=${category}`)}
    >
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </div>
  );
};

export default CategoryElement;

// <div key={category} className="flex gap-4 overflow-x-auto pl-7">
//   <button
//     key={category}
//     className="mb-8 flex items-center gap-3 rounded-full border-[1.5px] border-gray-300 px-4 py-2 text-gray-400 transition-colors duration-200 hover:border-red-300 hover:bg-red-300 hover:text-white"
//   >
// linjen herunder er styling til hvis der skal billede med

//     <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full"></div>
//     <span></span>
//   </button>
// </div>
