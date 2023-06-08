export function listCards(
  picture,
  name,
  presentation,
  targetTag,
  directory,  
) {
  targetTag.innerHTML += `
    <a href="../produto-individual/index.html?${directory}=${picture}" class="card go-page">
        <img style="${
          directory == "serviços" ? "object-fit:cover" : ""
        }" src="../database/${directory}/assets/${picture}.png" alt="">
        <h3>${name}</h3>
        <p>${presentation}</p>
        <button value="${[picture, directory]}" class="btn btn-amarelo add-button" type="submit">Adicionar a lista</button>
    </a>     
    `;
}
