import logo from "../img/logo.jpg";
import cafeSolo from "../img/cestas/cafeManhaSolo.jpg";
import Image from "next/image";
import WallpaperContainer from "@/components/WallpaperContainer";

export default function Home() {
  return (
    <WallpaperContainer>
      <div className="w-dvw">
        {/* TODO melhorar header */}
        <header className="mb-36 bg-[#dd7630] border-b-4 border-b-amber-700 h-14">
          <Image
            className=" rounded-full relative -bottom-5 -right-4/6 ml-2 border-amber-700 border-4 w-28 h-28"
            src={logo}
            alt="Next.js logo"
            width={130}
            height={130}
            priority
          />
        </header>
        <div>
          {/* TODO componente de cesta*/}
          <div id="card" className=" m-7">
            <div id="card-header" className=" shadow-md shadow-black flex bg-[#dd7630] text-white p-4 h-16">
              <Image
                src={cafeSolo}
                alt="Logo"
                width={100}
                height={100}
                className="relative -top-16 mr-2 rounded-full border-amber-700 border-4  w-24 h-24" />
              <h1 className=" font-bold">Cesta de Café da Manhã</h1>
            </div>
            <div id="card-body" className=" bg-amber-700 text-white p-4 rounded-t-none rounded-lg shadow-md">
              <p className="">
                Desfrute de uma deliciosa cesta de café da manhã, perfeita para começar o dia com energia e sabor.
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Café fresco</li>
                <li>Pão artesanal</li>
                <li>Frutas da estação</li>
                <li>Doces caseiros</li>
              </ul>

            </div>
          </div>
          <div id="card" className=" m-7">
            <div id="card-header" className=" shadow-md shadow-black flex bg-[#dd7630] text-white p-4 h-16">
              <Image
                src={cafeSolo}
                alt="Logo"
                width={100}
                height={100}
                className="relative -top-16 mr-2 rounded-full border-amber-700 border-4  w-24 h-24" />
              <h1 className=" font-bold">Cesta de Café da Manhã</h1>
            </div>
            <div id="card-body" className=" bg-amber-700 text-white p-4 rounded-t-none rounded-lg shadow-md">
              <p className="">
                Desfrute de uma deliciosa cesta de café da manhã, perfeita para começar o dia com energia e sabor.
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Café fresco</li>
                <li>Pão artesanal</li>
                <li>Frutas da estação</li>
                <li>Doces caseiros</li>
              </ul>

            </div>
          </div>
          <div id="card" className=" m-7">
            <div id="card-header" className=" shadow-md shadow-black flex bg-[#dd7630] text-white p-4 h-16">
              <Image
                src={cafeSolo}
                alt="Logo"
                width={100}
                height={100}
                className="relative -top-16 mr-2 rounded-full border-amber-700 border-4  w-24 h-24" />
              <h1 className=" font-bold">Cesta de Café da Manhã</h1>
            </div>
            <div id="card-body" className=" bg-amber-700 text-white p-4 rounded-t-none rounded-lg shadow-md">
              <p className="">
                Desfrute de uma deliciosa cesta de café da manhã, perfeita para começar o dia com energia e sabor.
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Café fresco</li>
                <li>Pão artesanal</li>
                <li>Frutas da estação</li>
                <li>Doces caseiros</li>
              </ul>

            </div>
          </div>
          <div id="card" className=" m-7">
            <div id="card-header" className=" shadow-md shadow-black flex bg-[#dd7630] text-white p-4 h-16">
              <Image
                src={cafeSolo}
                alt="Logo"
                width={100}
                height={100}
                className="relative -top-16 mr-2 rounded-full border-amber-700 border-4  w-24 h-24" />
              <h1 className=" font-bold">Cesta de Café da Manhã</h1>
            </div>
            <div id="card-body" className=" bg-amber-700 text-white p-4 rounded-t-none rounded-lg shadow-md">
              <p className="">
                Desfrute de uma deliciosa cesta de café da manhã, perfeita para começar o dia com energia e sabor.
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Café fresco</li>
                <li>Pão artesanal</li>
                <li>Frutas da estação</li>
                <li>Doces caseiros</li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </WallpaperContainer>
  );
}
