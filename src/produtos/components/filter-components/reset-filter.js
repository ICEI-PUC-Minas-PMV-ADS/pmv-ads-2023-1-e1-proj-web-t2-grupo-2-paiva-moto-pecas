import { initialSection } from '../../main.js';

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

    marcaID.forEach((marca) => {
        marca.addEventListener('change', () => {
            if (checkingCheckboxes() === true) {
                marca.addEventListener('change', () => {
                    if (checkingCheckboxes() === false) {
                        initialSection()
                    }
                })
            }
        })
    })
}
