import { onEvent, reloadPage } from './components/filtro.js'
import { produtos } from '../database/produtos/produtos-db.js';

const divProduto = document.querySelector('#divProduto');


function printProdutos(imagem, nome, apresentacao) {
    divProduto.innerHTML += `
    <div  class="produtoUnit" >    
        <img class="img" src="../database/produtos/public/${imagem}.png" alt="">
        <h3>${nome}</h3>
        <p>${apresentacao}</p>
    </div>     
    `
}

export function initial() {
    return produtos.map((produto) => {
        const { imagem, nome, apresentacao } = produto
        printProdutos(
            imagem,
            nome,
            apresentacao
        )
    })
}

initial()

const inputs = [
    '#Honda',
    '#Yamaha',
    '#MetalLeve',
    '#Magnetron',
    '#ProTork',
    '#Michelin']

const filters = [
    '#filterSectionHonda',
    '#filterSectionYamaha',
    '#filterSectionMetalLeve',
    '#filterSectionMagnetron',
    '#filterSectionProTork',
    '#filterSectionMichelin']

for (let i = 0; i < inputs.length; i++) {
    onEvent(inputs[i], filters[i])
}


reloadPage(inputs)
