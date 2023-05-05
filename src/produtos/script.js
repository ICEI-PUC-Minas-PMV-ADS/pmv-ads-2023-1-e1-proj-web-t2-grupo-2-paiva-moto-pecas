import { listingSelectedElements, reloadPage, getMarcas } from './components/filtro.js'
import { produtos } from '../database/produtos/produtos-db.js';

const completeSection = document.querySelector('#completeSection');


function printProdutos(imagem, nome, apresentacao) {
    completeSection.innerHTML += `
    <div  class="produtoUnit" >    
        <img class="img" src="../database/produtos/public/${imagem}.png" alt="">
        <h3>${nome}</h3>
        <p>${apresentacao}</p>
    </div>     
    `
}

export function initialSection() {
    return produtos.map((produto) => {
        const { imagem, nome, apresentacao } = produto
        printProdutos(
            imagem,
            nome,
            apresentacao
        )
    })
}

initialSection()

const marcas = []
getMarcas.map((marca) => {
    marcas.push(marca.split(' ').join(""))
})
const marcaComHashtag = marcas.map(marca => '#' + marca);

for (let i = 0; i < marcas.length; i++) {
    listingSelectedElements(marcaComHashtag[i], marcas[i])
}

reloadPage(marcaComHashtag)

