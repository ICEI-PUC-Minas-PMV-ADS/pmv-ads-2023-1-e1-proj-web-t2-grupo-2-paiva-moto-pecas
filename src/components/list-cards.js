export function listCards(picture, name, presentation, targetTag, directory, href) {
    targetTag.innerHTML += `
    <a href="${href}" class="card" class="go-page">
        <span>${picture}</span>    
        <img class="" src="../database/${directory}/assets/${picture}.png" alt="">
        <h3>${name}</h3>
        <p>${presentation}</p>
        <button class="btn btn-amarelo" type="submit">Adicionar a lista</button>
    </a>     
    `
}
