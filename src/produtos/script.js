import { produtos } from '../database/produtos/produtos-db.js';

const loja = document.querySelector('#loja');
const divProduto = document.querySelector('#divProduto');
const honda = document.querySelector('#honda')
const yamaha = document.querySelector('#yamaha')

const checkBox = [honda, yamaha]
const marcas = ["Honda", "Yamaha"]

function printProdutos(imagem, nome, apresentacao) {
    divProduto.innerHTML += `
    <div  class="produtoUnit" >    
        <img id="img" src="../database/produtos/public/${imagem}.png" alt="">
        <h3>${nome}</h3>
        <p>${apresentacao}</p>
    </div>     
    `
}

let filtrados = []

function printFilterProdutos(imagem, nome, apresentacao) {

    marcas.forEach((marca) => {
        loja.innerHTML += `
    <section class="clasProcutos" id=filterSection${marca}></section >`
    })

    document.querySelector(`#filterSectionHonda`).innerHTML += `        
        <div class="produtoUnit" >
            <img id="img" src="../database/produtos/public/${imagem}.png" alt="">
            <h3>${nome}</h3>
            <p>${apresentacao}</p>
        </div>     
    `
    document.querySelector(`#filterSectionYamaha`).innerHTML += `        
        <div class="produtoUnit" >
            <img id="img" src="../database/produtos/public/${imagem}.png" alt="">
            <h3>${nome}</h3>
            <p>${apresentacao}</p>
        </div>     
    `


    if (honda.checked === false && yamaha.checked === true) {
        document.querySelector(`#filterSectionHonda`).style.display = 'none'
    }

    if (yamaha.checked === false && honda.checked === true) {
        document.querySelector(`#filterSectionYamaha`).style.display = 'none'
    }
}




function initial() {
    return produtos.map((produto) => {
        printProdutos(
            produto.imagem,
            produto.nome,
            produto.apresentacao
        )
    })
}

function change() {
    checkBox.forEach((check) => {
        check.addEventListener('change', () => {
            if (check.checked === true) {
                filtrados = produtos.filter((produto) => {
                    return produto.marca === check.value
                })
                divProduto.innerHTML = ''
                return filtrados.map((produto) => {
                    const { imagem, nome, apresentacao } = produto
                    printFilterProdutos(
                        imagem,
                        nome,
                        apresentacao
                    )
                })
            } else if (check.checked === false) {
                location.reload();
            }


        }
        )
    })
}

initial()
change()