import { listCards } from '../../components/list-cards.js'
import { showMoreFullDB } from './button-show-more.js'

export function initialSection(database, assets) {
    const fullDatabase = document.querySelector('#fullDatabase')   
    fullDatabase.innerHTML = ''
    database.forEach((item) => {
        const { picture, name, presentation } = item
        listCards(
            picture,
            name,
            presentation,
            fullDatabase,
            assets
        )
    })
    showMoreFullDB(database)
}