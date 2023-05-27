export function listCards(
  picture,
  name,
  presentation,
  targetTag,
  directory,
  href
) {
  targetTag.innerHTML += `
    <a href="../produto-individual/index.html" class="card go-page">
        <span>${picture}</span>    
        <img src="../database/${directory}/assets/${picture}.png" alt="">
        <h3>${name}</h3>
        <p>${presentation}</p>
        <button class="btn btn-amarelo add-button" type="submit">Adicionar a lista</button>
    </a>     
    `;
}
