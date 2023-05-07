export function filterTypes(numbersOfSections, Filtertype) {
    const divs = store.querySelectorAll("div");
    numbersOfSections = numbersOfSections.filter((value, index, arr) => arr.indexOf(value) === index);
    if (divs.length === numbersOfSections.length + 1) {
        inputsBrand.innerHTML += `<h3>${Filtertype}</h3>`
    }
}