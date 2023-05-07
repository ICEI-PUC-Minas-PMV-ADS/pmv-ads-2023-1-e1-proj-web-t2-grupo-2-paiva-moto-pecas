import { listingSelectedElements, allItens } from './components/filter.js'
import { resetFilter } from './components/filter-components/reset-filter.js'
import { products } from '../database/produtos/produtos-db.js';

export function listProducts(picture, name, presentation, teste) {
    teste.innerHTML += `
    <div  class="productUnit" >    
        <img class="img" src="../database/produtos/assets/${picture}.png" alt="">
        <h3>${name}</h3>
        <p>${presentation}</p>
        <a href="#">Adicionar ao carrinho</a>
    </div>     
    `
}

export function initialSection() {
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

initialSection()

const itens = []
allItens.map((brand) => {
    itens.push(brand.split(' ').join(""))
})
const itemWithHashtag = itens.map(brand => '#' + brand);

for (let i = 0; i < itens.length; i++) {
    listingSelectedElements(itemWithHashtag[i], itens[i])
}

resetFilter(itemWithHashtag)

