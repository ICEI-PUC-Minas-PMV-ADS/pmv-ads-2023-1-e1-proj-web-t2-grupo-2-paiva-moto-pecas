import { listingSelectedElements, fullItens } from './components/filter.js'
import { resetFilter } from './components/reset-filter.js'
import { products } from '../database/produtos/produtos-db.js';

const completeSection = document.querySelector('#completeSection');

function printProdutos(picture, name, presentation) {
    completeSection.innerHTML += `
    <div  class="produtoUnit" >    
        <img class="img" src="../database/produtos/public/${picture}.png" alt="">
        <h3>${name}</h3>
        <p>${presentation}</p>
    </div>     
    `
}

export function initialSection() {
    return products.map((product) => {
        const { picture, name, presentation } = product
        printProdutos(
            picture,
            name,
            presentation
        )
    })
}
initialSection()

const itens = []
fullItens.map((brand) => {
    itens.push(brand.split(' ').join(""))
})
const itemWithHashtag = itens.map(brand => '#' + brand);

for (let i = 0; i < itens.length; i++) {
    listingSelectedElements(itemWithHashtag[i], itens[i])
}

resetFilter(itemWithHashtag)

