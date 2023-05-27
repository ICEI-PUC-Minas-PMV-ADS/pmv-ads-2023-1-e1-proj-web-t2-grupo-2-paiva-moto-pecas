import { products } from "./database/produtos/produtos-db.js";
import { servicos } from "./database/serviços/servicos-db.js";

export function preencherElem() {
  const contElements = document.getElementById("cont-principal");
  const card = document.querySelector(".go-page");

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const produtos = urlParams.get("produtos");
  const servicosurl = urlParams.get("serviços");
  let elemUnico;

  if (!servicosurl) {
    elemUnico = products.find((product) => {
      return product.picture === produtos;
    });
  } else if (!produtos) {
    elemUnico = servicos.find((servico) => {
      return servico.picture === servicosurl;
    });
  }

  contElements.innerHTML = ` 
    <div id="container-produto">
    <img id="imagem-produto" src="../database/${
      servicosurl ? "serviços" : "produtos"
    }/assets/${elemUnico.picture}.png" alt="">
    <div id="container-info">
        <h1 class="titulo-medio">${elemUnico.name}</h1>
        <p>${elemUnico.description}
        </p>
        <h2 class="titulo-pequeno">${
          elemUnico.brand
            ? `<strong>Marca: </strong>${elemUnico.brand}</h2>`
            : ""
        }
        <h2 class="titulo-pequeno"><strong>Categoria: </strong>${
          elemUnico.category
        }</h2>
    </div>
</div>
<button class="btn btn-amarelo add-button">Adicionar a lista</button>
    `;
}
