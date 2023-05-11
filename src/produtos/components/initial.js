import { products } from '../../database/produtos/produtos-db.js';
// import { buttonShowMore } from './button-show-more.js'

import { listCards } from '../../components/list-cards.js'

export function initialSection() {
    completeSection.innerHTML = ''
    // buttonShowMore(1470, 3450) 
    return products.forEach((product) => {
        const { picture, name, presentation } = product
        listCards(
            picture,
            name,
            presentation,
            completeSection
        )
    })
}