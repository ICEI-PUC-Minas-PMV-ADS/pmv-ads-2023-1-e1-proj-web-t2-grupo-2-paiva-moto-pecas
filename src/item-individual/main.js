import { listCards } from "../components/list-cards.js";
import { products } from "../database/produtos/produtos-db.js";
import { menu } from "../components/menu.js";
import { rodape } from "../components/rodape.js";
import { botaoWpp } from "../components/botao-wpp.js";
import { preencherElem } from "../base.js";
import { servicos } from "../database/serviços/servicos-db.js";
import { adicionaAlista } from "../base.js";

menu();
rodape();
preencherElem();
botaoWpp();

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const produtos = urlParams.get("produtos");
const servicosurl = urlParams.get("serviços");

function selecionarListCards(database, urlParams, directory) {
  const listagemProdutos = document.querySelector("#listagem-produtos");
  const filtrarCard = database.filter((item) => {
    return item.picture !== urlParams;
  });

  filtrarCard.sort(() => Math.random() - 0.5);
  filtrarCard.length = 4;
  filtrarCard.map((item) => {
    listCards(
      item.picture,
      item.name,
      item.presentation,
      listagemProdutos,
      directory
    );
  });
}

const btnSeeMore = document.querySelector("#listagem-produtos");

if (!servicosurl) {
  selecionarListCards(products, produtos, "produtos");
  btnSeeMore.innerHTML += `<a href="../itens-da-loja/index.html?sector=produtos" class="btn btn-preto">Veja mais produtos ➔</a>`;
} else if (!produtos) {
  selecionarListCards(servicos, servicosurl, "serviços");
  btnSeeMore.innerHTML += `<a href="../itens-da-loja/index.html?sector=serviços" class="btn btn-preto">Veja mais serviços ➔</a>`;
}

adicionaAlista();