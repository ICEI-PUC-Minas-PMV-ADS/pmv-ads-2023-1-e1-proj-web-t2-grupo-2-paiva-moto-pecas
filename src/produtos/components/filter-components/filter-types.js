export function filterTypes(numOfProductsToJump, Filtertype) {
    const divs = store.querySelectorAll("div");
    const filteringProductsToRemoveDuplicates = numOfProductsToJump.filter((value, index, arr) => arr.indexOf(value) === index);
    if (divs.length === filteringProductsToRemoveDuplicates.length + 1) {
        inputsBrand.innerHTML += `<h3>${Filtertype}</h3>`
    }
}