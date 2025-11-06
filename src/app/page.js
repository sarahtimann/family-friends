import Image from "next/image";
import Link from "next/link";
import PetList from "./components/PetList";

export default function Home() {
  return (
    <>
      <section className="mt-20 flex h-13"></section>
      <section className="mt-40 grid grid-cols-2 place-items-center justify-items-stretch gap-4 p-5">
        <PetList />
      </section>
      <nav className="h-20fixed right-0 bottom-0 left-0"></nav>
    </>
  );
}
