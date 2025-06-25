import Image from "next/image";
import Modal from "./Modal";
import { image } from "framer-motion/client";

import cafeSolo from "../img/cestas/cafeManhaSolo.jpg";
import cafeCasal from "../img/cestas/cafeManhaCasal.jpg";
import cervejas from "../img/cestas/cervejas.jpg";
import flores from "../img/cestas/floresBombons.jpg";
import vinho from "../img/cestas/queijosVinho.jpg";
type ItemCardProps = {
  tipo: string;
};

export default function ItemCard({ tipo }: ItemCardProps) {

  const cestas = {
    "cafe": {
      nome: "Cesta de Café da Manhã",
      image: cafeSolo,
      description: "Desfrute de uma deliciosa cesta de café da manhã, perfeita para começar o dia com energia e sabor.",
      items: [
        "Café fresco",
        "Pão artesanal",
        "Frutas da estação",
        "Doces caseiros"
      ]
    },
    "cafeCasal": {
      nome: "Cesta de Café da Manhã para Casal",
      image: cafeCasal,
      description: "Uma cesta romântica de café da manhã, ideal para compartilhar momentos especiais.",
      items: [
        "Café gourmet",
        "Pães variados",
        "Frutas selecionadas",
        "Doces artesanais"
      ]
    },
    "cervejas": {
      nome: "Cesta de Cervejas Artesanais",
      image: cervejas,
      description: "Explore uma seleção de cervejas artesanais, perfeita para os amantes de cerveja.",
      items: [
        "Cervejas locais",
        "Petiscos variados",
        "Copos personalizados"
      ]
    },
    "flores": {
      nome: "Cesta de Flores e Bombons",
      image: flores,
      description: "Uma linda cesta com flores frescas e deliciosos bombons, perfeita para presentear.",
      items: [
        "Flores variadas",
        "Bombons artesanais",
        "Cartão personalizado"
      ]
    },
    "vinho": {
      nome: "Cesta de Queijos e Vinho",
      image: vinho,
      description: "Uma combinação perfeita de queijos finos e um bom vinho, ideal para uma noite especial.",
      items: [
        "Queijos selecionados",
        "Vinho tinto ou branco",
        "Biscoitos finos"
      ]
    }

  }

  return (
    <div id="card" className=" m-7 mt-24">
      <div id="card-header" className=" shadow-md shadow-black flex bg-[#dd7630] text-white p-4 h-16">
        <Image
          src={cestas[tipo]?.image}
          alt="Logo"
          width={100}
          height={100}
          className="relative -top-16 mr-2 rounded-full border-amber-700 border-4  w-24 h-24" />
        <h1 className=" font-bold">{cestas[tipo]?.nome || "nome nao disponivel."}</h1>
      </div>
      <div id="card-body" className=" bg-amber-700 text-white p-4 rounded-t-none rounded-lg shadow-md">
        <p className="">
          {cestas[tipo]?.description || "Descrição não disponível."}
        </p>
        <ul className="list-disc pl-5 mt-2">
          {cestas[tipo]?.items?.map((item, index) => (
            <li key={index} className="text-sm">{item}</li>
          )) || <li>Itens não disponíveis.</li>}
        </ul>
        <Modal />
      </div>
    </div>
  )
}
