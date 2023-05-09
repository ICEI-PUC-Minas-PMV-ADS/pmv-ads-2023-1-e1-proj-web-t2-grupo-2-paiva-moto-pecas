import { initialSection } from './components/initial.js'
import { listingSelectedElements, OptionsWithoutSpaces } from './components/filter.js'
import { resetFilter } from './components/filter-components/reset-filter.js'
// import { buttonShowMore } from './components/button-show-more.js'
import { listFilterInputsOptions } from './components/filter.js'
import { listFilterSearchInput } from './components/search.js'



export function productsMain() {
    initialSection()
    listFilterInputsOptions()
    const optionsWithHashtag = OptionsWithoutSpaces.map(option => `#${option}`)
    for (let i = 0; i < OptionsWithoutSpaces.length; i++) {
        listingSelectedElements(optionsWithHashtag[i])
    }    
    listFilterSearchInput()    
    resetFilter(optionsWithHashtag)
    // buttonShowMore()
}

productsMain()







