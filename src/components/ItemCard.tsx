import CardItem from "./CardItem";

import cafeSolo from "../img/cestas/cafeManhaSolo.jpg";
import cafeCasal from "../img/cestas/cafeManhaCasal.jpg";
import cervejas from "../img/cestas/cervejas.jpg";
import floresBombons from "../img/cestas/floresBombons.jpg";
import floresFrutas from "../img/cestas/floresFrutas.jpg";
import vinho from "../img/cestas/queijosVinho.jpg";
import prosecco from "../img/cestas/proseccoFlores.jpg";
import lancheInfantil from "../img/cestas/lancheInfatil.jpg";
import vegana from "../img/cestas/vegana.jpg";
import lanche from "../img/cestas/lanche.jpg";
import sergipana from "../img/cestas/sergipana.jpg";

export default function ItemCard() {
  //TODO revisar as informacoes
  const cestas = {
    lancheInfantil: {
      nome: "Cesta Lanche Infantil",
      image: lancheInfantil,
      description:
        "Uma cesta divertida e deliciosa pensada especialmente para crianças, com itens temáticos e sabores que encantam.",
      itemsCompleto: [
        "Cesto em linhão",
        "3 itens temáticos",
        "1 balão",
        "1 bolo caseiro",
        "1 suco natural",
        "1 água de coco",
        "1 chocolate quente",
        "1 cappuccino artesanal",
        "1 cupcake",
        "4 pães de queijo",
        "Requeijão",
        "1 mini quiche de queijo",
        "1 croissant",
        "1 pretzel",
        "Mini pães doces",
        "1 waffle"
      ],
      preco: "R$ 280,00",
      novo: true
    },
    cafeCasal: {
      nome: "Cesta de Café da Manhã Casal",
      image: cafeCasal,
      description:
        "Uma cesta especial para casais, repleta de itens artesanais e naturais para um café da manhã inesquecível.",
      itemsCompleto: [
        "Cesto em linhão com alças de couro",
        "Flores naturais",
        "1 mini coador individual",
        "100g de café orgânico",
        "1 bolo caseiro",
        "1 suco natural",
        "1 água de coco",
        "2 waffles",
        "Requeijão",
        "2 frutas",
        "2 mini quiches de queijo",
        "2 croissants",
        "2 pretzels",
        "Mini pães doces",
        "1 focaccia ou pães artesanais",
        "Suspiros"
      ],
      preco: "R$ 360,00 ",
      novo: false
    },
    cafe: {
      nome: "Cesta de Café da Manhã",
      image: cafeSolo,
      description:
        "Desfrute de uma deliciosa cesta de café da manhã com itens artesanais selecionados para tornar a manhã especial.",
      itemsCompleto: [
        "Cesto em linhão",
        "Flores naturais",
        "1 bolo caseiro",
        "1 suco natural",
        "1 cappuccino artesanal",
        "1 waffle",
        "Requeijão",
        "2 frutas",
        "1 mini quiche de queijo",
        "Mini pães",
        "1 croissant",
        "1 pretzel",
        "Mini pães doces",
        "Suspiros"
      ],
      preco: "R$ 280,00 ",
      novo: false
    },
    cafeSergipano: {
      nome: "Cesta de Café da Manhã Sergipano",
      image: sergipana,
      description:
        "Uma homenagem à culinária nordestina com sabores típicos de Sergipe, ideal para um café da manhã regional e acolhedor.",
      itemsCompleto: [
        "Cesto em linhão",
        "1 mini coador individual",
        "100g de café orgânico",
        "Cuscuz temperado",
        "Macaxeira de forno",
        "Mungunzá",
        "1 bolo caseiro",
        "1 suco natural",
        "1 água de coco",
        "1 leite fazenda",
        "Queijo coalho",
        "2 frutas",
        "Beiju",
        "Mini queijadinhas",
        "Biscoito tareco",
        "3 tipos de pães"
      ],
      preco: "R$ 360,00 ",
      novo: false
    },
    lanche: {
      nome: "Cesta Lanche",
      image: lanche,
      description:
        "Uma cesta deliciosa para um lanche completo e aconchegante, com bebidas quentes e quitutes artesanais.",
      itemsCompleto: [
        "Cesto em linhão",
        "Flores naturais",
        "1 bolo caseiro",
        "1 suco natural",
        "1 água de coco",
        "1 chocolate quente",
        "1 cappuccino artesanal",
        "Bolo de rolo",
        "4 pães de queijo",
        "Requeijão",
        "1 mini quiche de queijo",
        "1 croissant",
        "1 pretzel",
        "Mini pães doces",
        "Suspiros"
      ],
      preco: "R$ 280,00 ",
      novo: false
    },
    floresFrutas: {
      nome: "Cesta Flores e Frutas",
      image: floresFrutas, 
      description:
        "Uma cesta leve e elegante com flores naturais e frutas frescas da estação, perfeita para presentear com frescor e carinho.",
      itemsCompleto: [
        "Cesto em linhão",
        "Flores naturais",
        "Uvas",
        "Morangos",
        "Maçã",
        "Manga",
        "Kiwi",
        "Goiaba",
        "Ameixa",
        "Mamão",
        "(Caso alguma fruta falte, será substituída por outra da estação)"
      ],
      preco: "R$ 280,00 ",
      novo: false
    },
    proseccoFlores: {
      nome: "Cesta Prosecco e Flores",
      image: prosecco,
      description:
        "Uma cesta sofisticada com prosecco, flores e uma tábua de frios especial, ideal para brindar momentos únicos com charme e sabor.",
      itemsCompleto: [
        "Cesto em linhão com alças de couro",
        "Flores naturais",
        "1 patê",
        "Torradinhas",
        "1 focaccia ou pão artesanal",
        "Palitos crocantes",
        "Tábua de frios contendo:",
        "– Frutas",
        "– Queijo brie",
        "– Provolone",
        "– Queijo reino",
        "– Lombo canadense",
        "– Peito de peru",
        "– Gorgonzola",
        "– Damascos ou tâmaras"
      ],
      preco: "R$ 470,00",
      novo: false
    },
    vegana: {
      nome: "Cesta Vegana",
      image: vegana,
      description:
        "Uma opção saudável e 100% vegetal com sabores artesanais e ingredientes naturais, perfeita para quem busca equilíbrio e consciência.",
      itemsCompleto: [
        "Cesto em linhão",
        "Flores naturais",
        "1 mini coador individual",
        "100g de café orgânico",
        "1 bolo de banana vegano",
        "1 suco natural",
        "1 água de coco",
        "3 frutas",
        "1 focaccia ou pães artesanais",
        "1 sanduíche natural vegano",
        "1 patê vegano",
        "Biscoitos veganos"
      ],
      preco: "R$ 360,00 ",
      novo: false
    },
    floresBombons: {
      nome: "Cesta Flores e Bombons",
      image: floresBombons,
      description:
        "Uma cesta elegante com flores naturais e deliciosos bombons para adoçar qualquer ocasião especial.",
      itemsCompleto: [
        "Flores naturais",
        "Caixa de trufas",
        "Nutella",
        "Biscoitos importados",
        "Caixa de bombons",
        "Chocolates"
      ],
      preco: "R$ 360,00 ",
      novo: false
    },
    cervejas: {
      nome: "Cesta das Cervejas",
      image: cervejas,
      description:
        "Uma cesta perfeita para os amantes de cerveja, com variedade de rótulos, acompanhamentos e uma tábua de frios especial.",
      itemsCompleto: [
        "Cesto em linhão com alças de couro",
        "2 cervejas em lata",
        "4 cervejas long neck",
        "Pão de alho",
        "Palitos crocantes",
        "Tábua de frios contendo:",
        "– Fruta",
        "– Queijo prato",
        "– Provolone",
        "– Queijo reino",
        "– Lombo canadense",
        "– Peito de peru",
        "– Polenguinho"
      ],
      preco: "R$ 370,00 ",
      novo: false
    },
    queijosVinho: {
      nome: "Cesta Queijos e Vinho",
      image: vinho,
      description:
        "Uma cesta sofisticada com vinho chileno ou argentino, tábua de frios e acompanhamentos selecionados para momentos especiais.",
      itemsCompleto: [
        "Cesto em linhão com alças de couro",
        "1 vinho chileno / argentino",
        "1 água",
        "1 patê",
        "Torradinhas",
        "1 focaccia ou pão artesanal",
        "Palitos crocantes",
        "Tábua de frios contendo:",
        "– Fruta",
        "– Queijo brie",
        "– Provolone",
        "– Queijo reino",
        "– Lombo canadense",
        "– Peito de peru",
        "– Gorgonzola",
        "– Damascos ou tâmaras"
      ],
      preco: "R$ 420,00 ",
      novo: false
    }
  };

  return (
    <div className="flex flex-wrap justify-center">
      {Object.entries(cestas).map(([key, cesta]) => (
        <CardItem
          key={key}
          nome={cesta.nome}
          image={cesta.image}
          description={cesta.description}
          preco={cesta.preco}
          itemsCompleto={cesta.itemsCompleto}
          novo={cesta.novo ? true : false}
        />
      ))}
    </div>
  );
}
