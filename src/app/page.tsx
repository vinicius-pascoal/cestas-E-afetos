import logo from "../img/logo.jpg";
import Image from "next/image";
import WallpaperContainer from "@/components/WallpaperContainer";
import ItemCard from "@/components/ItemCard";

export default function Home() {
  return (
    <WallpaperContainer>
      <div className="w-dvw">
        <header className=" bg-[#dd7630] border-b-4 border-b-amber-700 h-14 ">
          <Image
            className=" z-10 rounded-full relative -bottom-5 -right-4/6 ml-2 border-amber-700 border-4 w-28 h-28"
            src={logo}
            alt="logo cestas"
            width={130}
            height={130}
            priority
          />
        </header>
        <div className="h-screen overflow-y-scroll">
          <ItemCard />
        <p className="text-sm mb-14 text-gray-600 text-center font-bold">
          Desenvolvido por{" "}
          <a
            href="https://www.instagram.com/vinicius_pascoal_q/?next=%2F"
            className="text-blue-500 hover:underline"
          >
            Vinicius Pascoal
          </a>
        </p>
        </div>
      </div>
    </WallpaperContainer>
  );
}
