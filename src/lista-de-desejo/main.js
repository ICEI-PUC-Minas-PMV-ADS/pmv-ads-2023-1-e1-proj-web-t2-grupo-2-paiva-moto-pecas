import { menu } from "../components/menu.js";
import { rodape } from "../components/rodape.js";
import { botaoWpp } from "../components/botao-wpp.js";
import { products } from "../database/produtos/produtos-db.js";


mostraSugestao()

var listaDeDesejo = localStorage.getItem("lista");
var lista = listaDeDesejo ? JSON.parse(listaDeDesejo) : [];
const closeList = JSON.parse(localStorage.getItem("list"));

const removeCartItemButtons = document.querySelectorAll(".btn-danger");
for (let i = 0; i < removeCartItemButtons.length; i++) {
  const button = removeCartItemButtons[i];

  button.addEventListener("click", removeCart);
}

function removeCart(event) {
  var buttonClicked = event.target;
  var titulo =
    buttonClicked.parentElement.parentElement.parentElement.querySelector(
      ".card-remove-info"
    ).innerText;
  console.log(titulo);

  for (let i = 0; i < lista.length; i++) {
    if (lista[i].name == titulo) {
      lista.splice(i, 1);
    }
  }
  localStorage.setItem("lista", JSON.stringify(lista));
  window.location.reload(true);
}

const removeAllItens = document.getElementById("link");
removeAllItens.addEventListener("click", removeAll);

function removeAll(event) {
  localStorage.removeItem("lista");
  window.location.reload(true);
}

function mostraSugestao() {
const listagemProdutos = document.querySelector(".produtos-listados");
const listaVazia = []
const listaDeSugestao = listaVazia.concat(products) 
listaDeSugestao.sort(() => Math.random() - 0.5);
listaDeSugestao.length = 4;
listaDeSugestao.map((product) => {
  listCards(
    product.picture,
    product.name,
    product.presentation,
    listagemProdutos,
    "produtos"
  );
});
}
var numero = 1;
console.log(numero);
numero = numero + "";
console.log(numero);
console.log(products);
var bug = products.find((product) => {
  return product.picture === numero;
});

console.log(bug);

var buttons = document.querySelectorAll(".add-button");
for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener("click", function (event) {
    var buttonEvent = event.target;
    var itemIndex =
      buttonEvent.parentElement.parentElement.parentElement.querySelector(
        ".card-remove-info"
      ).innerText;
    console.log(itemIndex);


    var produto = products.find((product) => {
      return product.picture === itemIndex;
    });

    var produtoJaEstaNaLista = lista.find((item) => {
      return item.name === produto.name;
    });
    if (!produtoJaEstaNaLista) {
      lista.push(produto);
      localStorage.setItem("lista", JSON.stringify(lista));
      window.location.reload(true);
    }
  });

}

var listaContainer = document.getElementById("carrinho-itens");
console.log(lista.length);
if (lista.length == 0) {
  console.log("lista vazia");
  listaContainer.innerHTML = `
  <div id="carrinho-vazio">
  <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M61.5391 69.1984C63.2318 67.5057 65.1849 66.6593 67.3984 66.6593C69.612 66.6593 71.5 67.5057 73.0625 69.1984C74.7552 70.8911 75.6016 72.8442 75.6016 75.0577C75.6016 77.2713 74.7552 79.2244 73.0625 80.9171C71.5 82.4796 69.612 83.2609 67.3984 83.2609C65.1849 83.2609 63.2318 82.4796 61.5391 80.9171C59.8464 79.2244 59 77.2713 59 75.0577C59 72.8442 59.8464 70.8911 61.5391 69.1984ZM0.601562 0.0577393H14.2734L18.1797 8.26086H79.8984C81.0703 8.26086 82.0469 8.71659 82.8281 9.62805C83.6094 10.4093 84 11.3859 84 12.5577C84 12.6879 83.8047 13.339 83.4141 14.5109L68.5703 41.464C67.0078 44.3286 64.599 45.7609 61.3438 45.7609H30.2891L26.5781 52.5968L26.3828 53.1827C26.3828 53.8338 26.7083 54.1593 27.3594 54.1593H75.6016V62.5577H25.6016C23.388 62.5577 21.4349 61.7114 19.7422 60.0187C18.1797 58.326 17.3984 56.3728 17.3984 54.1593C17.3984 52.8572 17.724 51.5551 18.375 50.2531L24.0391 39.9015L9 8.26086H0.601562V0.0577393ZM19.7422 69.1984C21.4349 67.5057 23.388 66.6593 25.6016 66.6593C27.8151 66.6593 29.7682 67.5057 31.4609 69.1984C33.1536 70.8911 34 72.8442 34 75.0577C34 77.2713 33.1536 79.2244 31.4609 80.9171C29.7682 82.4796 27.8151 83.2609 25.6016 83.2609C23.388 83.2609 21.4349 82.4796 19.7422 80.9171C18.1797 79.2244 17.3984 77.2713 17.3984 75.0577C17.3984 72.8442 18.1797 70.8911 19.7422 69.1984Z" fill="#D1D1D1"/>
</svg>
    <p>Sua lista de desejos está vazia</p>
  </div>
  `;

  document.getElementById("fechar-lista").style.display = "none";
  document.getElementById("sugestao-produtos").style.marginTop = "0";
  document.getElementById("link").style.display = "none";
} else {
  lista.forEach(function (item) {
    var itemElement = document.createElement("div");
    itemElement.classList.add("card-item");
    var quantidade;

    itemElement.innerHTML = `
  <div class="card-info">
  <img src="../database/${
    item.sector == "Produto" ? "produtos" : "serviços"
  }/assets/${item.picture}.png">
  <div>
    <h2 class="titulo-pequeno">${item.name}</h2>
    <p>Em estoque</p>
  </div>
  </div>
  <div id="card-buttons">
  <div class = "option-select">
  <select class=" btn-quantidade" name = "job">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="mais">mais</option>
  </select>
  </div>
  <button class="btn-danger">
  <p class = "card-remove-info">${item.name}</p>
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">
      <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 
      0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 
      26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"/></svg>
  </button>
  </div>
  <p class = "card-remove-info">${item.name}</p>
  
</div>`;

    // Adicione o elemento ao container
    listaContainer.appendChild(itemElement);
    itemElement
      .querySelector(".btn-danger")
      .addEventListener("click", removeCart);
  });
}

function listCards(picture, name, presentation, targetTag, directory) {

  targetTag.innerHTML += `
  <div class="produto-sugerido">
  <a href="../produto-individual/index.html?${directory}=${picture}">
  <img style="${
    directory == "serviços" ? "object-fit:cover" : ""
  }" src="../database/${directory}/assets/${picture}.png" alt="">
  </a>
  <div>
    <h4 class="titulo-pequeno">${name}</h4>
    <div>
      <button class="btn btn-amarelo add-button">
      Adicionar ao carrinho
      <p class = "card-remove-info">${picture}</p>
      </button>
    </div>
  </div>
</div>
`;
}

function whatsappWithCloseList(content) {
  const wppNumber = "5511999999999";
  document.querySelector(".btn-fechar").innerHTML = `
<a href="https://api.whatsapp.com/send?phone=${wppNumber}&text=Ola gostaria de saber mais sobre:%0A${
    content
      ? content.map((item) => {
          return `*Nome*: ${item.name}, *ID*: ${item.pictured} %0A`;
        })
      : ""
  }" 
      target="_blank" rel="noopener noreferrer"> Fechar-Lista
</a>
`;
}

var input = document.getElementById('job');
function loadSettings() {
    if (localStorage['job']) {
        input.value = localStorage['job'];
    }
}

function saveSettings() {
    localStorage['job'] = input.value;
}

whatsappWithCloseList(closeList);
menu();
rodape();
botaoWpp();
