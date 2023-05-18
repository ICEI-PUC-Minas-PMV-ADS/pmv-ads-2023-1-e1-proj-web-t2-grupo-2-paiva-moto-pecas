import { checkingCheckboxes } from './filter-components/reset-filter.js'

export function showMoreFullDB(database) {
    const button = document.querySelector('#button-show-more')
    const fullDatabase = document.querySelector('#fullDatabase')
    const divsFromFullDatabase = fullDatabase.querySelectorAll('a')

    let showLength = 6;

    divsFromFullDatabase.forEach((div, index) => {
        if (index >= showLength) {
            div.style.display = 'none'
        }
    })
    button.addEventListener('click', () => {
        showLength += 6
        divsFromFullDatabase.forEach((div, index) => {
            if (index >= showLength) {
                div.style.display = 'none'
            } else {
                div.style.display = ''
            }
        })       
    })

    const buttonShowMore = () => {
        const containerFilterInputsOptions = document.querySelector('#containerFilterInputsOptions')

        window.addEventListener('scroll', function () {
            const windowHeight = window.innerHeight;
            const fullHeight = document.body.scrollHeight;
            const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

            if (scrollPosition + windowHeight >= fullHeight) {
                button.style.display = 'flex'
            }

            if (scrollPosition + windowHeight < fullHeight) {
                button.style.display = 'none'
            }

            if (checkingCheckboxes()) {
                button.style.display = 'none'
            }          

            if (showLength >= database.length) {
                button.style.display = 'none'
            }
        });
    }
    buttonShowMore()
}

