// src/components/ScrollBar.jsx
import Image from "next/image";

export default function ScrollBar({ images = [], label = "Alle" }) {
  return (
    <button className="mb-8 flex items-center gap-3 rounded-full border-[1.5px] border-gray-300 px-4 py-2 text-lg text-gray-400 transition-colors duration-200 hover:border-red-300 hover:bg-red-300 hover:text-white">
      <div className="h-10 w-10 overflow-hidden rounded-full">
        <Image
          loading="eager"
          alt={label}
          src={images[0] ? images[0] : "Image not found"}
          width={40}
          height={40}
          className="h-full w-full object-cover"
        />
      </div>
      <span>{label}</span>
    </button>
  );
}
