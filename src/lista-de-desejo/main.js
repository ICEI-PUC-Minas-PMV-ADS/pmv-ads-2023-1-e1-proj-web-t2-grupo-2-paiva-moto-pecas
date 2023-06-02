import { menu } from '../components/menu.js'
import { rodape } from '../components/rodape.js'
import { botaoWpp } from '../components/botao-wpp.js'
import { AdicionaAlista} from '../base.js'
import { listCards } from "../components/list-cards.js";
import { products } from "../database/produtos/produtos-db.js";

AdicionaAlista()
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