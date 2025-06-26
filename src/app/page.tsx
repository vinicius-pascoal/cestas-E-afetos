import logo from "../img/logo.jpg";
import Image from "next/image";
import WallpaperContainer from "@/components/WallpaperContainer";
import ItemCard from "@/components/ItemCard";

export default function Home() {
  return (
    <WallpaperContainer>
      <div className="w-dvw">
        <header className=" bg-[#dd7630] border-b-4 border-b-amber-700 h-14">
          <Image
            className=" rounded-full relative -bottom-5 -right-4/6 ml-2 border-amber-700 border-4 w-28 h-28"
            src={logo}
            alt="Next.js logo"
            width={130}
            height={130}
            priority
          />
        </header>
        <div className="h-screen overflow-y-auto">
          {/* TODO componente de cesta fix: ultima cesta ta sendo comida */}
          <ItemCard />
        </div>
      </div>
    </WallpaperContainer>
  );
}
