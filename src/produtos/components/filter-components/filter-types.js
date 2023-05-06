export function filterTypes(numbersOfSections, Filtertype) {
    const sections = store.querySelectorAll("section");
    if (sections.length == numbersOfSections) {
        inputsBrand.innerHTML += `<h3>${Filtertype}</h3>`
    }
}