export function filterTypes(numOfProductsToJump, FilterType) {
  const cardsNumber = inputsFilterOptions.querySelectorAll("div");
  const filteringProductsToRemoveDuplicates = numOfProductsToJump.filter(
    (value, index, arr) => arr.indexOf(value) === index
  );
  if (cardsNumber.length === filteringProductsToRemoveDuplicates.length) {
    inputsFilterOptions.innerHTML += `<h2 class="titulo-pequeno h3ByJS">${FilterType}</h2>`;
  }
}
