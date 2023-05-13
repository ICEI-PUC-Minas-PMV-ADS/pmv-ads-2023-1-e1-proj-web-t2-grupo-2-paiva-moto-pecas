import { products } from '../../database/produtos/produtos-db.js';
import { listCards } from '../../components/list-cards.js'
import { showMoreFullDB } from './button-show-more.js'

export function initialSection() {
    const fullDatabase = document.querySelector('#fullDatabase')    
    fullDatabase.innerHTML = ''    
    products.forEach((product) => {
        const { picture, name, presentation } = product
        listCards(
            picture,
            name,
            presentation,
            fullDatabase
        )        
    })   
    showMoreFullDB()
}