export function filterTypes(numOfProductsToJump, FilterType) {
    const cardsNumber = store.querySelectorAll("div");
    const filteringProductsToRemoveDuplicates = numOfProductsToJump.filter((value, index, arr) => arr.indexOf(value) === index);
    if (cardsNumber.length === filteringProductsToRemoveDuplicates.length + 1) {
        inputsFilterOptions.innerHTML += `<h3>${FilterType}</h3>`
    }
}