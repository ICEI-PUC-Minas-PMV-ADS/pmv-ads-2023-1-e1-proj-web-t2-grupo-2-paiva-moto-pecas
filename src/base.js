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
    <img src="../database/${servicosurl ? "serviços" : "produtos"
    }/assets/${elemUnico.picture}.png" alt="" ${servicosurl ? "style='object-fit:cover'" : ""
  } >
    </div>
    <div id="container-info">
        <h1 class="titulo-medio">${elemUnico.name}</h1>
        <p>${elemUnico.description}
        </p>
        ${elemUnico.brand
      ? `<h2 class="titulo-pequeno"><strong>Marca: </strong>${elemUnico.brand}</h2>`
      : ""
    }
        <h2 class="titulo-pequeno"><strong>Categoria: </strong>${elemUnico.category
    }</h2>
    </div>
</div>
<button class="btn btn-amarelo add-button">Adicionar a lista</button>
    `;
}

// SCRIPT LISTA DE DESEJO
export function adicionaAlista() {
  var listaDeDesejo = localStorage.getItem('lista');
  var CartItems = listaDeDesejo ? JSON.parse(listaDeDesejo) : [];
  console.log(CartItems)

  const addToCartButtons = document.querySelectorAll('.add-button')
  for (let i = 0; i < addToCartButtons.length; i++) {
    const button = addToCartButtons[i]
    button.addEventListener('click', function (event) {
      var buttonEvent = event.target

      var produtoIndex = window.location.search.split('=')[1]
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const produtos = urlParams.get("produtos");
      const servicosurl = urlParams.get("serviços");

      console.log(produtoIndex);

      if (!servicosurl) {

        var produto = products.find((product) => {
          return product.picture === produtoIndex;
        }
        );
      } else if (!produtos) {
        var produto = servicos.find((servico) => {
          return servico.picture === produtoIndex;
        })};

        // ve se o produto ja esta na lista, se tiver, nao adiciona
        var produtoJaEstaNaLista = CartItems.find((item) => {
          return item.name === produto.name
        }
        );
        if(!produtoJaEstaNaLista){
          CartItems.push(produto)
          localStorage.setItem("lista", JSON.stringify(CartItems))
          console.log(CartItems)
        }
        
      }
    )
  }

}
