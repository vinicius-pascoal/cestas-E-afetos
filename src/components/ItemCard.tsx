import CardItem from "./CardItem";

import cafeSolo from "../img/cestas/cafeManhaSolo.jpg";
import cafeCasal from "../img/cestas/cafeManhaCasal.jpg";
import cervejas from "../img/cestas/cervejas.jpg";
import flores from "../img/cestas/floresBombons.jpg";
import vinho from "../img/cestas/queijosVinho.jpg";

export default function ItemCard() {
  const cestas = {
    cafe: {
      nome: "Cesta de Café da Manhã",
      image: cafeSolo,
      description:
        "Desfrute de uma deliciosa cesta de café da manhã, perfeita para começar o dia com energia e sabor.",
      items: ["cappuccino artesanal", "Pão artesanal", "bolo caseiro", "Flores naturais"],
      itemsCompleto: [
        "Cesto em linhão",
        "Flores naturais",
        "1 bolo caseiro",
        "1 suco natural",
        "1 cappuccino artesanal",
      ],
      preco: "R$ 49,90",

    },
    cafeCasal: {
      nome: "Cesta de Café da Manhã para Casal",
      image: cafeCasal,
      description:
        "Uma cesta romântica de café da manhã, ideal para compartilhar momentos especiais.",
      items: ["Café gourmet", "Pães variados", "Frutas selecionadas", "Doces artesanais"],
      itemsCompleto: [
        "Cesto em linhão",
        "Flores naturais",
        "1 bolo caseiro",
        "1 suco natural",
        "1 cappuccino artesanal",
      ],
      preco: "R$ 89,90",
    },
    cervejas: {
      nome: "Cesta de Cervejas Artesanais",
      image: cervejas,
      description:
        "Explore uma seleção de cervejas artesanais, perfeita para os amantes de cerveja.",
      items: ["Cervejas locais", "Petiscos variados", "Copos personalizados"],
      itemsCompleto: [
        "Cesto em linhão",
        "Flores naturais",
        "1 bolo caseiro",
        "1 suco natural",
        "1 cappuccino artesanal",
      ],
      preco: "R$ 79,90",
    },
    flores: {
      nome: "Cesta de Flores e Bombons",
      image: flores,
      description:
        "Uma linda cesta com flores frescas e deliciosos bombons, perfeita para presentear.",
      items: ["Flores variadas", "Bombons artesanais", "Cartão personalizado"],
      itemsCompleto: [
        "Cesto em linhão",
        "Flores naturais",
        "1 bolo caseiro",
        "1 suco natural",
        "1 cappuccino artesanal",
      ],
      preco: "R$ 59,90",
    },
    vinho: {
      nome: "Cesta de Queijos e Vinho",
      image: vinho,
      description:
        "Uma combinação perfeita de queijos finos e um bom vinho, ideal para uma noite especial.",
      items: ["Queijos selecionados", "Vinho tinto ou branco", "Biscoitos finos"],
      itemsCompleto: [
        "Cesto em linhão",
        "Flores naturais",
        "1 bolo caseiro",
        "1 suco natural",
        "1 cappuccino artesanal",
      ],
      preco: "R$ 99,90",
    },
  };

  return (
    <div className="flex flex-wrap justify-center">
      {Object.entries(cestas).map(([key, cesta]) => (
        <CardItem
          key={key}
          nome={cesta.nome}
          image={cesta.image}
          description={cesta.description}
          items={cesta.items}
          preco={cesta.preco}
          itemsCompleto={cesta.itemsCompleto}
        />
      ))}
    </div>
  );
}
