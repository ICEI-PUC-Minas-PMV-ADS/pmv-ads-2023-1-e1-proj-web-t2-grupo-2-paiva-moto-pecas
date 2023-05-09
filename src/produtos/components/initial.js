import { products } from '../../database/produtos/produtos-db.js';
import { buttonShowMore } from './button-show-more.js'

import {listProducts} from '../../components/list-itens.js'

export function initialSection() {
    completeSection.innerHTML = ''
    buttonShowMore(1470, 3450) 
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