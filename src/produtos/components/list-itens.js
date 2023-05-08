import { products } from '../../database/produtos/produtos-db.js';

export function listProducts(picture, name, presentation, targetTag) {
    targetTag.innerHTML += `
    <div  class="card" >    
        <img class="img" src="../database/produtos/assets/${picture}.png" alt="">
        <h3>${name}</h3>
        <p>${presentation}</p>
        <a href="#">Adicionar ao carrinho</a>
    </div>     
    `
}

export function initialSection() {
    completeSection.innerHTML = '' 
    return products.map((product) => {        
        const { picture, name, presentation } = product
        listProducts(
            picture,
            name,
            presentation,
            completeSection
        )
    })
}