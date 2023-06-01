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

        window.addEventListener('scroll', function () {
            const windowHeight = window.innerHeight;
            const fullHeight = document.body.scrollHeight - 200;
            const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

            if (scrollPosition + windowHeight >= fullHeight) {
                button.style.display = 'flex'
                button.style.opacity = '1'
            }

            if (scrollPosition + windowHeight < fullHeight) {
                button.style.opacity = '0'
            }

            if (checkingCheckboxes()) {
                button.style.display = 'none'
            }

            if (showLength >= database.length) {
                button.style.opacity = '0'
            }
        });
    }
    buttonShowMore()
}

