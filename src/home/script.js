import { listProducts } from "../components/list-itens.js";
import { products } from "../database/produtos/produtos-db.js";

const containerProdutos = document.querySelector(".produtos");

function featuredProducts() {
  let homeProducts = [];
  homeProducts = products.filter((product) => {
    return product.featured == true;
  });
  return homeProducts.map((product) => {
    listProducts(
      product.picture,
      product.name,
      product.presentation,
      containerProdutos,
      "id"
    );
  });
}

featuredProducts();
