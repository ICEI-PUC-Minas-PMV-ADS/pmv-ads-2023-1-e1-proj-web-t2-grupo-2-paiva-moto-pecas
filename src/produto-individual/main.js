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

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const produtos = urlParams.get("produtos");
const listagemProdutos = document.querySelector("#listagem-produtos");
const filtrarCard = products.filter((product)=>{
  return product.picture !== produtos
})

filtrarCard.sort(() => Math.random() - 0.5);
filtrarCard.length = 4;
filtrarCard.map((product) => {
  listCards(
    product.picture,
    product.name,
    product.presentation,
    listagemProdutos,
    "produtos"
  );
});


