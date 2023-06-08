






export function customDatalist(database, assets, suggestionsOptions, containerPersonalDatalist) {
    const inputSearch = document.querySelector('#inputSearch')
    const lupa = document.querySelector('#lupa')   

    containerPersonalDatalist.style.display = 'flex'

    suggestionsOptions = database.filter((item) => {
        return item.presentation.toLowerCase().includes(inputSearch.value.toLowerCase())
    })
    document.addEventListener("click", function (event) {
        const elementoClicado = event.target;

        if (elementoClicado !== containerPersonalDatalist && elementoClicado !== inputSearch) {
            containerPersonalDatalist.style.display = 'none'
        }
    });

    inputSearch.addEventListener("click", function () {
        containerPersonalDatalist.style.display = 'flex'
    });

    containerPersonalDatalist.innerHTML = '';

    return suggestionsOptions.forEach((suggestion) => {
        containerPersonalDatalist.innerHTML += `
                    <a href="../produto-individual/index.html?${assets}=${suggestion.picture}" 
                    id="personalDatalist" class="go-page">
                        <span>${suggestion.picture}</span>                                        
                        <img src="../database/${assets}/assets/${suggestion.picture}.png" alt="">
                        <p>${suggestion.name} - ${suggestion.presentation}</p>                                         
                    </a>
                `;
    });    
}

