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


let filtrados = []

let ArrayFilterHonda = []
let ArrayFilterYamaha = []

function initial() {
    return produtos.map((produto) => {
        printProdutos(
            produto.imagem,
            produto.nome,
            produto.apresentacao
        )
    })
}

/*
Criar lets diferentes para cada um dos filtros, e coloca-los em contêineres 
diferentes para poder limpar o contêiner quando for desmarcada a checkbox do filtro

*/
function change() {
    checkBox.forEach((check) => {
        check.addEventListener('change', () => {
            if (check.checked === true) {
                filtrados = produtos.filter((produto) => {
                    return produto.marca === check.value
                })

                divProduto.innerHTML = ''
                return filtrados.map((produto) => {
                    printFilterProdutos(
                        produto.imagem,
                        produto.nome,
                        produto.apresentacao
                    )
                })
            } else if (honda.checked === false && yamaha.checked === false) {                
                location.reload();
            } else if (honda.checked === false) {
                filtrados = [] 
            }
        }
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
// changeHonda()
// changeYamaha()

change()