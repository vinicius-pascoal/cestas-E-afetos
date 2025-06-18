import logo from "../img/logo.jpg";
import Image from "next/image";
import WallpaperContainer from "@/components/WallpaperContainer";

export default function Home() {
  return (
    <WallpaperContainer>
      <div className="w-dvw">
        <header className="bg-orange-200 border-b-4 border-b-amber-500 ">
          <Image
            className="rounded-full"
            src={logo}
            alt="Next.js logo"
            width={130}
            height={130}
            priority
          />
        </header>
        <div>
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
