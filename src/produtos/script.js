import { produtos } from '../database/produtos-db.js';

console.log(produtos);
const divProduto = document.querySelector('#divProduto');

function produto(imagem, nome, apresentacao) {
    divProduto.innerHTML += `
    <div  class="produtoUnit" >    
        <img id="img" src="../database/public/${imagem}.png" alt="">
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



