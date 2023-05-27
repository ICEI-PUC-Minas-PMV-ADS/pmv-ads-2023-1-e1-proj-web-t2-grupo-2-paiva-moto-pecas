export function responsiveFilter() {
  const filtersSection = document.querySelector('#filtersSection')
  const aside = document.querySelector('aside')
  const containerFilter = document.querySelector('#container-filter')
  const clickIconFilter = document.querySelector('#click-icon-filter')
  const clickCloseFilter = document.querySelector('#click-close-filter')

  addEventListener('resize', () => {
    if (window.innerWidth <= 913) {
      containerFilter.style.display = 'none'

      filtersSection.style.cssText = `             
          background-color: transparent;
          display: flex; 
          justify-content: center;
          align-items: center;
          margin: auto;
          max-height: 50px; 
      `

      clickIconFilter.style.cssText = `
          display: flex; 
          justify-content: center;
          align-items: center;
          gap: 8px;
      `
    }

    if (window.innerWidth > 913) {
      containerFilter.style.display = 'grid'
      clickIconFilter.style.display = 'none'
      clickCloseFilter.style.display = 'none'

      filtersSection.style.cssText = `
      padding: 40px 20px;
      border-radius: 12px;
      background-color: var(--branco);
      z-index: 2;
      width: 100%;
      max-width: 220px;    
      `
    }
  })

  document.querySelector('#click-icon-filter').addEventListener('click', () => {
    filtersSection.style.cssText = `             
  position: absolute;
  top: 257px; 
  left: 50%;
  transform: translateX(-50%);   
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
    clickIconFilter.style.display = 'flex'
    clickCloseFilter.style.display = 'none'

    filtersSection.style.cssText = `             
    background-color: transparent;
    display: flex; 
    justify-content: center;
    align-items: center;
    margin: auto;
    max-height: 50px;      
  `
  })
}