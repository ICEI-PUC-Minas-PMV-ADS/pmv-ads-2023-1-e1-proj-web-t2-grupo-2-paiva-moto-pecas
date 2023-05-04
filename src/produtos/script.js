import { produtos } from '../database/produtos/produtos-db.js';

const divProduto = document.querySelector('#divProduto');

function printProdutos(imagem, nome, apresentacao) {
    divProduto.innerHTML += `
    <div  class="produtoUnit" >    
        <img id="img" src="../database/produtos/public/${imagem}.png" alt="">
        <h3>${nome}</h3>
        <p>${apresentacao}</p>
    </div>     
    `
}

const honda = document.querySelector('#honda')


let filtrados





function change() {

    honda.addEventListener('change', () => {
        if (honda.checked === true) {
            filtrados = produtos.filter((produto) => {
                return produto.marca == 'Honda'
            })
        }
        if (honda.checked === false) {
            location.reload();
        }
        divProduto.innerHTML = ''
        return filtrados.map((produt) => {
            printProdutos(
                produt.imagem,
                produt.nome,
                produt.apresentacao
            )
        })
    })
    return produtos.map((produto) => {
        printProdutos(
            produto.imagem,
            produto.nome,
            produto.apresentacao
        )
    })
}





change()

