import { produtos } from './database/prdutos-db.js'

const divProduto = document.querySelector('#divProduto');

function produto(imagem, nome, apresentacao) {
    divProduto.innerHTML += `
    <div  class="produtoUnit" >    
        <img id="img" src="./${imagem}.jpg" alt="">
        <h3>${nome}</h3>
        <p>${apresentacao}</p>
    </div>     
    `
}

for (let i = 0; i < produtos.length; i++) {
    produto(
        produtos[i].imagem,
        produtos[i].nome,
        produtos[i].apresentacao
    )
}



