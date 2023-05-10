import { initialSection } from '../initial.js';

function checkingCheckboxes() {
    let isChecked = false;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            isChecked = true;
            break
        }
    }
    if (!isChecked) {
        isChecked;
    }
    return isChecked;
}

export function resetFilter(...marcas) {
    const marcaID = document.querySelectorAll(`${marcas}`)   
    const inputSearch = document.querySelector('#inputSearch')
    
    marcaID.forEach((marca) => {
        marca.addEventListener('change', () => {            
            if (checkingCheckboxes() === true) {
                marca.addEventListener('change', () => {
                    if (checkingCheckboxes() === false && inputSearch.value !== '') {
                        completeSection.style.display = 'flex'
                        initialSection()
                    }
                })
            }
        })
    })
}
