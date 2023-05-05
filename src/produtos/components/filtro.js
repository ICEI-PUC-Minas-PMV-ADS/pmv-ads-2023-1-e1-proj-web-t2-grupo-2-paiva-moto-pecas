import { produtos } from '../../database/produtos/produtos-db.js';

const loja = document.querySelector('#loja');
const divProduto = document.querySelector('#divProduto');
const yamaha = document.querySelector('#yamaha')
const honda = document.querySelector('#honda')

const checkbox = [yamaha, honda]
let filtrados = []

export function change() {

    const printFilterProdutosHonda = (imagem, nome, apresentacao) => {
        let filterSectionHonda = document.querySelector('#filterSectionHonda')
        filterSectionHonda.innerHTML += `
            <div class="produtoUnit" >
                <img class="img" src="../database/produtos/public/${imagem}.png" alt="">
                    <h3>${nome}</h3>
                    <p>${apresentacao}</p>
            </div>
        `
    }

    const printFilterProdutosYamaha = (imagem, nome, apresentacao) => {
        let filterSectionYamaha = document.querySelector('#filterSectionYamaha')
        filterSectionYamaha.innerHTML += `
            <div class="produtoUnit" >
                <img class="img" src="../database/produtos/public/${imagem}.png" alt="">
                    <h3>${nome}</h3>
                    <p>${apresentacao}</p>
            </div>        `


    }


    honda.addEventListener('change', () => {
        if (honda.checked === true) {
            filtrados = produtos.filter((produto) => {
                return produto.marca === honda.value
            })
            divProduto.innerHTML = ''
            filtrados.map((produto) => {
                const { imagem, nome, apresentacao } = produto
                printFilterProdutosHonda(
                    imagem,
                    nome,
                    apresentacao
                )
            })

        } else if (honda.checked === false) {
            filterSectionHonda.innerHTML = ''
        }


    })

    yamaha.addEventListener('change', () => {
        if (yamaha.checked === true) {
            filtrados = produtos.filter((produto) => {
                return produto.marca === yamaha.value
            })
            divProduto.innerHTML = ''
            filtrados.map((produto) => {
                const { imagem, nome, apresentacao } = produto
                printFilterProdutosYamaha(
                    imagem,
                    nome,
                    apresentacao
                )
            })
        } else if (yamaha.checked === false) {
            filterSectionYamaha.innerHTML = ''
        }
    })


    checkbox.forEach((item) => {
        item.addEventListener('change', () => {
            if (yamaha.checked === true || honda.checked === true) {
                console.log('checked');
                checkbox.forEach((item) => {
                    item.addEventListener('change', () => {
                        if (honda.checked === false && yamaha.checked === false) {
                            location.reload();
                        }
                    })
                })
            }
        })
    })


}







