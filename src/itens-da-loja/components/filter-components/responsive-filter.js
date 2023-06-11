export function responsiveFilter() {
  const filtersSectionId = document.querySelector('#filtersSection')
  const defaultFiltersSection = document.querySelector('.filtersSection')
  const containerFilter = document.querySelector('#container-filter')
  const clickIconFilter = document.querySelector('#click-icon-filter')
  const clickCloseFilter = document.querySelector('#click-close-filter')
  const divMain = document.querySelector('#section ')
  const elementoBloqueado = document.querySelector("body");
  const fundo = document.querySelector('#fundo')


  function responsive() {
    if (window.innerWidth <= 768) {
      containerFilter.style.display = 'none'
      filtersSectionId.classList.replace("filtersSection", "responsive-filtersSection");

      clickIconFilter.style.cssText = `
            display: flex; 
            justify-content: center;
            align-items: center;
            gap: 8px;
        `
    }

    if (window.innerWidth > 768) {
      containerFilter.style.display = 'grid'
      clickIconFilter.style.display = 'none'
      clickCloseFilter.style.display = 'none'
      filtersSectionId.classList.replace("responsive-filtersSection", "filtersSection");
    }
  }

  addEventListener('DOMContentLoaded', () => {
    responsive()
  })

  // addEventListener('resize', () => {
  //   responsive()
  // })

  document.querySelector('#click-icon-filter').addEventListener('click', () => {
    filtersSectionId.classList.replace("responsive-filtersSection", "open-responsive-filtersSection");


    let i = 0;

    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const filtersSectionId = document.querySelector('.open-responsive-filtersSection');
    
      if (scrollPosition >= 100) {
        filtersSectionId.style.top = `${32 + i}px`;
      } else {
        filtersSectionId.style.top = `${150}px`;
      }
    
      if (scrollPosition >= 2500) {
        i = -10 - (scrollPosition - 2500);     
        filtersSectionId.style.top = `${i}px`;
      } else {
        i = 0;
      }
    });
    





    clickIconFilter.style.display = 'none'
    containerFilter.style.display = 'block'
    fundo.style.display = 'block'
    fundo.style.height = `${divMain.offsetHeight}px`

    clickCloseFilter.style.cssText = `
        display: grid;
        position: absolute;
        top: 12px;
        right: 12px;        
    `
  })
  clickCloseFilter.addEventListener('click', () => {
    containerFilter.style.display = 'none'
    clickIconFilter.style.display = 'flex'
    clickCloseFilter.style.display = 'none'
    fundo.style.display = 'none'

    filtersSectionId.classList.replace("open-responsive-filtersSection", "responsive-filtersSection");
  })

}