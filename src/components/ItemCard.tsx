import CardItem from "./CardItem";

import cafeSolo from "../img/cestas/cafeManhaSolo.jpg";
import cafeCasal from "../img/cestas/cafeManhaCasal.jpg";
import cervejas from "../img/cestas/cervejas.jpg";
import flores from "../img/cestas/floresBombons.jpg";
import vinho from "../img/cestas/queijosVinho.jpg";

export default function ItemCard() {
  const cestas = {
    cafeCasal: {
      nome: "Cesta de Café da Manhã Casal",
      image: cafeCasal, // substitua pela imagem correta
      description:
        "Uma cesta especial para casais, repleta de itens artesanais e naturais para um café da manhã inesquecível.",
      items: [
        "Café orgânico",
        "Mini coador individual",
        "Bolo caseiro",
        "Pães artesanais"
      ],
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
      preco: "R$ 360,00 "
    },
    cafe: {
      nome: "Cesta de Café da Manhã",
      image: cafeSolo, // substitua pela imagem correta
      description:
        "Desfrute de uma deliciosa cesta de café da manhã com itens artesanais selecionados para tornar a manhã especial.",
      items: [
        "Cappuccino artesanal",
        "Bolo caseiro",
        "Mini pães",
        "Frutas frescas"
      ],
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
      preco: "R$ 280,00 "
    },
    cafeSergipano: {
      nome: "Cesta de Café da Manhã Sergipano",
      image: cafeCasal, // substitua pela imagem correta
      description:
        "Uma homenagem à culinária nordestina com sabores típicos de Sergipe, ideal para um café da manhã regional e acolhedor.",
      items: [
        "Cuscuz temperado",
        "Macaxeira de forno",
        "Mungunzá",
        "Café orgânico"
      ],
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
      preco: "R$ 360,00 "
    },
    lanche: {
      nome: "Cesta Lanche",
      image: cafeCasal, // substitua pela imagem correta
      description:
        "Uma cesta deliciosa para um lanche completo e aconchegante, com bebidas quentes e quitutes artesanais.",
      items: [
        "Chocolate quente",
        "Bolo caseiro",
        "Pães de queijo",
        "Bolo de rolo"
      ],
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
      preco: "R$ 280,00 "
    },
    floresFrutas: {
      nome: "Cesta Flores e Frutas",
      image: flores, // substitua pela imagem correta
      description:
        "Uma cesta leve e elegante com flores naturais e frutas frescas da estação, perfeita para presentear com frescor e carinho.",
      items: [
        "Flores naturais",
        "Uvas",
        "Morangos",
        "Kiwi"
      ],
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
      preco: "R$ 280,00 "
    },
    proseccoFlores: {
      nome: "Cesta Prosecco e Flores",
      image: cafeCasal, // substitua pela imagem correta
      description:
        "Uma cesta refinada com flores naturais, tábua de frios e acompanhamentos selecionados, ideal para momentos de celebração.",
      items: [
        "Prosecco",
        "Tábua de frios",
        "Flores naturais",
        "Pão artesanal"
      ],
      itemsCompleto: [
        "Cesto em linhão",
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
      preco: "R$ 470,00 "
    },
    vegana: {
      nome: "Cesta Vegana",
      image: cafeCasal, // substitua pela imagem correta
      description:
        "Uma opção saudável e 100% vegetal com sabores artesanais e ingredientes naturais, perfeita para quem busca equilíbrio e consciência.",
      items: [
        "Bolo banana vegano",
        "Sanduíche natural vegano",
        "Café orgânico",
        "Frutas frescas"
      ],
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
      preco: "R$ 360,00 "
    },
    floresBombons: {
      nome: "Cesta Flores e Bombons",
      image: cafeCasal, // substitua pela imagem correta
      description:
        "Uma cesta elegante com flores naturais e deliciosos bombons para adoçar qualquer ocasião especial.",
      items: [
        "Flores naturais",
        "Caixa de trufas",
        "Nutella",
        "Chocolates"
      ],
      itemsCompleto: [
        "Flores naturais",
        "Caixa de trufas",
        "Nutella",
        "Biscoitos importados",
        "Caixa de bombons",
        "Chocolates"
      ],
      preco: "R$ 360,00 "
    },
    cervejas: {
      nome: "Cesta das Cervejas",
      image: cervejas, // substitua pela imagem correta
      description:
        "Uma cesta perfeita para os amantes de cerveja, com variedade de rótulos, acompanhamentos e uma tábua de frios especial.",
      items: [
        "Cervejas variadas",
        "Tábua de frios",
        "Pão de alho",
        "Palitos crocantes"
      ],
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
      preco: "R$ 370,00 "
    },
    queijosVinho: {
      nome: "Cesta Queijos e Vinho",
      image: vinho, // substitua pela imagem correta
      description:
        "Uma cesta sofisticada com vinho chileno ou argentino, tábua de frios e acompanhamentos selecionados para momentos especiais.",
      items: [
        "Vinho chileno/argentino",
        "Tábua de frios",
        "Patê",
        "Pão artesanal"
      ],
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
      preco: "R$ 420,00 "
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
          items={cesta.items}
          preco={cesta.preco}
          itemsCompleto={cesta.itemsCompleto}
        />
      ))}
    </div>
  );
}
