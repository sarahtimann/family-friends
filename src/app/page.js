import Image from "next/image";
import Link from "next/link";
import PetList from "./components/PetList";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import Header from "./components/Header";
import ScrollBar from "./components/ScrollBar";

export default function Home() {
  return (
    <>
      <main className="m-6">
        <header className="mb-6 text-black">
          <Header />
        </header>
        <div className="flex gap-4 overflow-x-auto">
          <ScrollBar />
          <ScrollBar />
          <ScrollBar />
          <ScrollBar />
          <ScrollBar />
          <ScrollBar />
          <ScrollBar />
          <ScrollBar />
        </div>
        <div className="grid grid-cols-2 place-items-center justify-items-stretch gap-6">
          {/* <Card /> */}
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
