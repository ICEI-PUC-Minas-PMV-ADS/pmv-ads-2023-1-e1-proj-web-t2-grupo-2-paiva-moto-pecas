import { listCards } from "../components/list-cards.js";
import { products } from "../database/produtos/produtos-db.js";
import { menu } from "../components/menu.js";
import { rodape } from "../components/rodape.js";
import { botaoWpp } from "../components/botao-wpp.js";
import { preencherElem } from "../base.js";

menu();
rodape();
preencherElem();
botaoWpp();

const produtoIndividual = document.getElementById("container-produto");
const listagemProdutos = document.querySelector("#listagem-produtos");
products.length = 4;
products.sort(() => Math.random() - 0.5);
products.map((product) => {
  listCards(
    product.picture,
    product.name,
    product.presentation,
    listagemProdutos,
    "produtos"
  );
});
