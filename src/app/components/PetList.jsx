import Link from "next/link";

const PetList = () => {
  return (
    <Link href="/detalje">
      <div className="rounded-2xl p-2 shadow-md">
        <div className="font-semibold tracking-wide font-stretch-extra-condensed">
          Kælenavn
        </div>
      </div>
    </Link>
  );
};

export default PetList;
