"use client";

import Image from "next/image";
import Modal from "./Modal";

type CardItemProps = {
  nome: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  description: string;
  items: string[];
  itemsCompleto: string[];
  preco: string;
};

export default function CardItem({ nome, image, description, items, preco, itemsCompleto }: CardItemProps) {
  return (
    <div className="first:mt-24 last:mb-24 m-7 mb-16 w-full max-w-md">
      <div className="shadow-md shadow-black flex bg-[#dd7630] text-white p-4 h-16">
        <Image
          src={image}
          alt="Imagem da cesta"
          width={100}
          height={100}
          className="relative -top-16 mr-2 rounded-full border-amber-700 border-4 w-24 h-24"
        />
        <h1 className="font-bold max-w-2/3">{nome}</h1>
      </div>
      <div className="bg-amber-700 text-white p-4 rounded-t-none rounded-lg shadow-md">
        <p>{description}</p>
        <ul className="list-disc pl-5 mt-2">
          {items?.map((item, index) => (
            <li key={index} className="text-sm">{item}</li>
          ))}
        </ul>
        <Modal nome={nome} image={image} itemsCompleto={itemsCompleto} preco={preco} />
      </div>
    </div>
  );
}
