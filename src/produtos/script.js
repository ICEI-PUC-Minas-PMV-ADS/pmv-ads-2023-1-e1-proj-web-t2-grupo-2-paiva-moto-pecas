import { produtos } from '../database/produtos/produtos-db.js';

const loja = document.querySelector('#loja');
const divProduto = document.querySelector('#divProduto');
const honda = document.querySelector('#honda')
const yamaha = document.querySelector('#yamaha')


function printProdutos(imagem, nome, apresentacao) {
    divProduto.innerHTML += `
    <div  class="produtoUnit" >    
        <img id="img" src="../database/produtos/public/${imagem}.png" alt="">
        <h3>${nome}</h3>
        <p>${apresentacao}</p>
    </div>     
    `
}

function printFilterProdutos(imagem, nome, apresentacao) {
    loja.innerHTML += `
    <section class="clasProcutos" id="filterSection">        
    </section >`
    const filterSection = document.querySelector('#filterSection')
    filterSection.innerHTML += `        
        <div class="produtoUnit" >
            <img id="img" src="../database/produtos/public/${imagem}.png" alt="">
            <h3>${nome}</h3>
            <p>${apresentacao}</p>
        </div>     
    `
}


let filtrados
// let filtradosHonda
// let filtradosYamaha


function initial() {
    return produtos.map((produto) => {
        printProdutos(
            produto.imagem,
            produto.nome,
            produto.apresentacao
        )
    })
}

function changeHonda() {

    honda.addEventListener('change', () => {
        if (honda.checked === true) {
            filtrados = produtos.filter((produto) => {
                return produto.marca === 'Honda'
            })
        }
        if (honda.checked === false) {
            location.reload();
        }
        divProduto.innerHTML = ''
        return filtrados.map((produto) => {
            printFilterProdutos(
                produto.imagem,
                produto.nome,
                produto.apresentacao
            )
        })
    })

}

function changeYamaha() {

    yamaha.addEventListener('change', () => {
        if (yamaha.checked === true) {
            filtrados = produtos.filter((produto) => {
                return produto.marca === 'Yamaha'
            })
        }
        if (yamaha.checked === false) {
            location.reload();
        }
        divProduto.innerHTML = ''
        return filtrados.map((produto) => {
            printFilterProdutos(
                produto.imagem,
                produto.nome,
                produto.apresentacao
            )
        })
    })

}


initial()
changeHonda()
changeYamaha()
