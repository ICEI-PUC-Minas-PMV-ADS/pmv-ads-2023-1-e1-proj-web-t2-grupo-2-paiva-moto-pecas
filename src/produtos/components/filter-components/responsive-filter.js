export function responsiveFilter() {
    const filtersSection = document.querySelector('#filtersSection')
    const aside = document.querySelector('aside')
    const containerFilter = document.querySelector('#container-filter')
    const clickIconFilter = document.querySelector('#click-icon-filter')
    const clickCloseFilter = document.querySelector('#click-close-filter')

    addEventListener('resize', () => {
        if (window.innerWidth <= 558) {
            containerFilter.style.display = 'none'
            clickIconFilter.style.display = 'flex'
            filtersSection.style.cssText = `             
        position: sticky;
        top: 213px;
        left: 60px;
        background-color: var(--cinza-claro);  
        `
        }

        if (window.innerWidth > 558) {
            containerFilter.style.display = 'grid'
            clickIconFilter.style.display = 'none'
            clickCloseFilter.style.display = 'none'

            aside.style.cssText = `
    padding: 40px 0px;       
    height: fit-content;       
    margin: 32px 0px;       

    top: 32px;
    position: sticky;  
    z-index: 1;

    border-radius: 12px;

    background-color: var(--branco);     
    `
        }
    })

    document.querySelector('#click-icon-filter').addEventListener('click', () => {
        filtersSection.style.cssText = `             
    position: absolute;
    top: 257px;     
    `
        clickIconFilter.style.display = 'none'
        containerFilter.style.display = 'grid'

        clickCloseFilter.style.cssText = `
        display: grid;
        position: absolute;
        top: 12px;
        right: 12px;        

    `
    })

    clickCloseFilter.addEventListener('click', () => {
        containerFilter.style.display = 'none'
        clickIconFilter.style.display = 'grid'
        clickCloseFilter.style.display = 'none'

        filtersSection.style.cssText = `             
    position: sticky;
    top: 213px;
    left: 60px;
    background-color: var(--cinza-claro);      
    `
    })
}