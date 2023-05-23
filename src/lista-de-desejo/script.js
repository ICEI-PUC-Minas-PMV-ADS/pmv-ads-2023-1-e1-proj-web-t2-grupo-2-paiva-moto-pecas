import { menu } from '../components/menu.js'
import { rodape } from '../components/rodape.js'
import { botaoWpp } from '../components/botao-wpp.js'

menu()
rodape()
botaoWpp()

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    console.log(removeCartItemButtons)
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var addToCartButtons = document.getElementsByClassName('btn-comprar')
    for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
}
    var buttonLink = document.getElementsByClassName('link');
    for (var i = 0; i < buttonLink.length; i++) {
        var button = buttonLink[i]
        button.addEventListener('click', deleteAllProducts)
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('titulo-pequeno')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('imagem-sugestao')[0].src
    addItemToCart(title, imageSrc)
}

function deleteAllProducts() {
    var carrinhoItens = document.getElementsByClassName('carrinho-itens')[0]
    carrinhoItens.innerHTML = ''
}

function addItemToCart(title, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('produto')
    var cartItems = document.getElementsByClassName('carrinho-itens')[0]
    var cartItemsName = document.getElementsByClassName('produto-titulo')
    for (var i = 0; i < cartItemsName.length; i++) {
        if (cartItems[i].innerText == title) {
            alert('Este item já foi adicionado ao carrinho')
            return
        }
    }

    var cartRowContents = 
    `

    <img class="imagem-produto" src="${imageSrc}">
    <div class="info-produto">
      <h3 class = "produto-titulo">${title}</h3>
      <p>Em estoque</p>
      <button class="btn-danger" type="button">
     hello
     </button>
     <input class="quantidade-input" type="number" >
    </div>
    `
    
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
}