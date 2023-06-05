import { menu } from '../components/menu.js'
import { rodape } from '../components/rodape.js'
import { botaoWpp } from '../components/botao-wpp.js'
import { AdicionaAlista} from '../base.js'
import { listCards } from "../components/list-cards.js";
import { products } from "../database/produtos/produtos-db.js";
import { CartItems } from '../base.js';

AdicionaAlista(CartItems)
menu()
rodape()
botaoWpp()

// script apaga item da lista
const removeCartItemButtons = document.querySelectorAll('.btn-danger')
for (let i = 0; i < removeCartItemButtons.length; i++) {
    const button = removeCartItemButtons[i]
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
    })
}

const listagemProdutos = document.querySelector(".produtos-listados");
products.length = 3;
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


var listaDeDesejo = localStorage.getItem('lista');
var lista = listaDeDesejo ? JSON.parse(listaDeDesejo) : [];
var listaContainer = document.getElementById('carrinho-itens');

lista.forEach(function(item) {
  var itemElement = document.createElement("div");
  itemElement.classList.add("card-item");
  

  itemElement.innerHTML = `
  <div class="card-info">
  <img src="../database/${servicosurl ? "serviços" : "produtos"}/assets/${item.picture}.png">
  <div>
    <h2 class="titulo-pequeno">${item.name}</h2>
    <p>Em estoque</p>
  </div>
  </div>
  <button class="btn-danger">
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">
      <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 
      0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 
      26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"/></svg>
  </button>
</div>`;
  
  // Adicione o elemento ao container
  listaContainer.appendChild(itemElement);

});


