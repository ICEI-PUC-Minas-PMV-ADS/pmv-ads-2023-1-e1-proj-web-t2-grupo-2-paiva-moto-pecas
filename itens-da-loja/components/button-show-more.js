export function showMoreFullDB(database) {
    const button = document.querySelector('#button-show-more')
    const fullDatabase = document.querySelector('#fullDatabase')
    const divsFromFullDatabase = fullDatabase.querySelectorAll('a')
    const inputSearch = document.querySelector('#inputSearch')

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

            if (scrollPosition + windowHeight >= fullHeight && !checkingCheckboxes() && inputSearch.value.length === 0) {
                button.style.display = 'flex'
                button.style.opacity = '1'
            }

            if (scrollPosition + windowHeight < fullHeight) {
                button.style.opacity = '0'
            }



            if (showLength >= database.length) {
                button.style.opacity = '0'
            }
        });
    }
    buttonShowMore()
}

