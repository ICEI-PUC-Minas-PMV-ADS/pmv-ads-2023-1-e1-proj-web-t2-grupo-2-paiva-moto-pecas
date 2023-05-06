export function filterTypes(numbers, type) {
    const sections = store.querySelectorAll("section");
    if (sections.length == numbers) {
        inputsBrand.innerHTML += `<h3>${type}</h3>`

    }
}