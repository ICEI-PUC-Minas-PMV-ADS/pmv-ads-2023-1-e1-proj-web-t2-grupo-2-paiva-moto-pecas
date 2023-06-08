import { listCards } from '../../components/list-cards.js'
import { showMoreFullDB } from './button-show-more.js'

export function initialSection(database, assets) {
    const fullDatabase = document.querySelector('#fullDatabase')    
    const inputSearch = document.querySelector("#inputSearch");

    inputSearch.value = '';        
    fullDatabase.innerHTML = ''
    fullDatabase.style.display = 'flex';
    
    database.forEach((item) => {
        const { picture, name, presentation } = item
        listCards(
            picture,
            name,
            presentation,
            fullDatabase,
            assets,            
        )
    })
    showMoreFullDB(database)
}