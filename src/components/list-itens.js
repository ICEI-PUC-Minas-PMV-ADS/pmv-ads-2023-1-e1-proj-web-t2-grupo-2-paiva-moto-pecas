
export function listProducts(picture, name, presentation, targetTag, id) {
    targetTag.innerHTML += `
    <div  class="card" >    
        <img class="" src="../database/produtos/assets/${picture}.png" alt="">
        <h3>${name}</h3>
        <p>${presentation}</p>
        <button id="${id}" class="btn btn-amarelo" type="submit">Adicionar ao carrinho</button>
    </div>     
    `
}

