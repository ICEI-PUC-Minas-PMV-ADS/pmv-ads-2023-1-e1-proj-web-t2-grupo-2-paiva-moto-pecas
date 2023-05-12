import { listCards } from "../components/list-cards.js";
import { products } from "../database/produtos/produtos-db.js";

const containerProdutos = document.querySelector(".produtos");

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
      "id"
    );
  });
}

featuredProducts();
