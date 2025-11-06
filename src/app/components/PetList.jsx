import Image from "next/image";
import Link from "next/link";

const PetList = () => {
  return (
    <Link href="/detalje">
      <div className="rounded-2xl p-2 shadow-md">
        <Image
          loading="eager"
          alt="Pet"
          src="https://placecats.com/neo/300/200"
          width={300}
          height={200}
          className="-mx-2 -mt-2 mb-2 w-[calc(100%+1rem)] max-w-none rounded-t-2xl"
        />
        <div className="font-semibold tracking-wide font-stretch-extra-condensed">
          Kælenavn
        </div>
      </div>
    </Link>
  );
};

export default PetList;
