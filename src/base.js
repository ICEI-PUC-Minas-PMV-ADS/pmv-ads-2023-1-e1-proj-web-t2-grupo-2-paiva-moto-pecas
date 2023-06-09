import { products } from "./database/produtos/produtos-db.js";
import { servicos } from "./database/serviços/servicos-db.js";

export function preencherElem() {
  const contElements = document.getElementById("cont-principal");

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
    <div class="imagem-produto">
    <img src="../database/${servicosurl ? "serviços" : "produtos"}/assets/${
    elemUnico.picture
  }.png" alt="" ${servicosurl ? "style='object-fit:cover'" : ""} >
    </div>
    <div id="container-info">
        <h1 class="titulo-medio">${elemUnico.name}</h1>
        <p>${elemUnico.description}
        </p>
        ${
          elemUnico.brand
            ? `<h2 class="titulo-pequeno"><strong>Marca: </strong>${elemUnico.brand}</h2>`
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

// SCRIPT LISTA DE DESEJO
export function adicionaAlista() {
  var isInteger = (n) => parseInt(n, 10) === n;
  var listaDeDesejo = localStorage.getItem("lista");
  var CartItems = listaDeDesejo ? JSON.parse(listaDeDesejo) : [];

  const addToCartButtons = document.querySelectorAll(".add-button");
  for (let i = 0; i < addToCartButtons.length; i++) {
    const button = addToCartButtons[i];
    button.addEventListener("click", function (event) {
      var buttonEvent = event.target;

      var produtoIndex = window.location.search.split("=")[1];
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const produtos = urlParams.get("produtos");
      const servicosurl = urlParams.get("serviços");
      var produto;
      produtoIndex = Number(produtoIndex);

      if (!button.value) {
        if (!servicosurl) {
          produto = products.find((product) => {
            return product.picture === produtos;
          });
        } else if (!produtos) {
          produto = servicos.find((servico) => {
            return servico.picture === servicosurl;
          });
        }
      } else {
        produtoIndex = button.value.split(",")[0];
        var produtoLocal = button.value.split(",")[1];

        if (produtoLocal === "produtos") {
          produto = products.find((product) => {
            return product.picture === produtoIndex;
          });
        } else if (produtoLocal === "serviços") {
          produto = servicos.find((servico) => {
            return servico.picture === produtoIndex;
          });
        }
      }
      
      var produtoJaEstaNaLista = CartItems.find((item) => {
        if (item.picture === produto.picture && item.name === produto.name) {
          return true;
        }
      });
  
      if (produtoJaEstaNaLista) {
        alert("O item já se encontra na sua lista!");
        return;
      } else {
        CartItems.push(produto);
        localStorage.setItem("lista", JSON.stringify(CartItems));
        alert("Item adicionado a lista com sucesso!");
      }
    });
  }
}
