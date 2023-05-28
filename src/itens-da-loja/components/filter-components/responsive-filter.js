export function responsiveFilter() {
  const filtersSectionId = document.querySelector('#filtersSection')
  const defaultFiltersSection = document.querySelector('.filtersSection')
  const containerFilter = document.querySelector('#container-filter')
  const clickIconFilter = document.querySelector('#click-icon-filter')
  const clickCloseFilter = document.querySelector('#click-close-filter')
  const divMain = document.querySelector('#section ')
  const elementoBloqueado = document.querySelector("body");

  function bloquearScroll(event) {
    event.preventDefault();
  }

  addEventListener('DOMContentLoaded', () => {
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
  })

    document.querySelector('#click-icon-filter').addEventListener('click', () => {
    filtersSectionId.classList.replace("responsive-filtersSection", "open-responsive-filtersSection");    
    elementoBloqueado.addEventListener("wheel", bloquearScroll, { passive: false });
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
    clickIconFilter.style.display = 'flex'
    clickCloseFilter.style.display = 'none'

    elementoBloqueado.removeEventListener("wheel", bloquearScroll);
    filtersSectionId.classList.replace("open-responsive-filtersSection", "responsive-filtersSection");
  })
}