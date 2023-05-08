import { initialSection } from './components/list-itens.js'
import { listingSelectedElements, OptionsWithoutSpaces } from './components/filter.js'
import { resetFilter } from './components/filter-components/reset-filter.js'

initialSection()
const optionsWithHashtag = OptionsWithoutSpaces.map(option => '#' + option)
for (let i = 0; i < OptionsWithoutSpaces.length; i++) {
    listingSelectedElements(optionsWithHashtag[i])
}
resetFilter(optionsWithHashtag)


