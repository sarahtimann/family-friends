import Image from "next/image";
import Link from "next/link";
import PetList from "./components/PetList";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ScrollBar from "./components/ScrollBar";

export default function Home() {
  return (
    <>
      <main className="bg-red-50">
        <header className="mr-7 mb-6 ml-7 text-black">
          <Header />
        </header>
        <div className="flex gap-4 overflow-x-auto pl-7">
          <ScrollBar />
          <ScrollBar />
          <ScrollBar />
          <ScrollBar />
          <ScrollBar />
          <ScrollBar />
          <ScrollBar />
          <ScrollBar />
        </div>
        <div className="mr-7 ml-7 grid grid-cols-2 place-items-center justify-items-stretch gap-6">
          <PetList />
          <PetList />
          <PetList />
          <PetList />
          <PetList />
          <PetList />
        </div>
        <nav className="grid grid-cols-4 place-items-center pt-6">
          <NavBar />
        </nav>
      </main>
    </>
  );
}
