import Image from "next/image";
import cafeSolo from "../img/cestas/cafeManhaSolo.jpg";
import Modal from "./Modal";

type ItemCardProps = {
  tipo: string;
};

export default function ItemCard({ tipo }: ItemCardProps) {
  return (
    <div id="card" className=" m-7 mt-24">
      <div id="card-header" className=" shadow-md shadow-black flex bg-[#dd7630] text-white p-4 h-16">
        <Image
          src={cafeSolo}
          alt="Logo"
          width={100}
          height={100}
          className="relative -top-16 mr-2 rounded-full border-amber-700 border-4  w-24 h-24" />
        <h1 className=" font-bold">{tipo}</h1>
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
        <Modal />
      </div>
    </div>
  )
}
