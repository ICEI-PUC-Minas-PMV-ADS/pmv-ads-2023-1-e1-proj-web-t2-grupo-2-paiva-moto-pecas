import { listCards } from "../components/list-cards.js";
import { products } from "../database/produtos/produtos-db.js";
import { servicos } from "../database/serviços/servicos-db.js";
import { menu } from "../components/menu.js";
import { rodape } from "../components/rodape.js";
import { botaoWpp } from "../components/botao-wpp.js";

const containerProdutos = document.querySelector(".produtos");
const containerServicos = document.querySelector(".servicos");

function featuredProducts() {
  let homeProducts = [];
  homeProducts = products.filter((product) => {
    return product.featured == true;
  });
  return homeProducts.map((product) => {
    listCards(
      product.picture,
      product.name,
      product.presentation,
      containerProdutos,
      "produtos"
    );
  });
}

function featuredServices() {
  let homeServices = [];
  homeServices = servicos.filter((service) => {
    return service.featured == true;
  });
  return homeServices.map((service) => {
    listCards(
      service.picture,
      service.name,
      service.presentation,
      containerServicos,
      "serviços"
    );
  });
}

menu();
botaoWpp();
featuredProducts();
featuredServices();
rodape();
