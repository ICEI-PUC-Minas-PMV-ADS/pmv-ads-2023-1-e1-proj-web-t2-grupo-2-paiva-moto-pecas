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
adicionaAlista();

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

if (!servicosurl) {
  selecionarListCards(products, produtos, "produtos");
  
} else if (!produtos) {
  selecionarListCards(servicos, servicosurl, "serviços");
  const btnSeeMore = document.querySelector("#btn-veja-mais");
  btnSeeMore.innerHTML =  `<a href="/src/itens-da-loja/index.html?sector=serviços" id="btn-veja-mais" class="btn btn-preto">Veja mais serviços ➔</a>`;
}
