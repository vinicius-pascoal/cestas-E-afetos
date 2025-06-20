import logo from "../img/logo.jpg";
import Image from "next/image";
import WallpaperContainer from "@/components/WallpaperContainer";

export default function Home() {
  return (
    <WallpaperContainer>
      <div className="w-dvw">
        {/* TODO melhorar header */}
        <header className="mb-24 shadow-md shadow-amber-700 bg-[#dd7630] border-b-4 border-b-amber-700 h-14">
          <Image
            className=" shadow-md shadow-amber-700 rounded-full relative -bottom-5 ml-2 border-amber-700 border-4"
            src={logo}
            alt="Next.js logo"
            width={130}
            height={130}
            priority
          />
        </header>
        <div>
          {/* TODO componente de cesta*/}
          <h1 className="text-4xl text-center font-bold mt-8">
            Bem-vindo ao Next.js!
          </h1>
          <p className="text-center mt-4">
            Esta é uma aplicação de exemplo usando Next.js com animações e
            imagens.
          </p>
        </div>
      </div>
    </WallpaperContainer>
  );
}
