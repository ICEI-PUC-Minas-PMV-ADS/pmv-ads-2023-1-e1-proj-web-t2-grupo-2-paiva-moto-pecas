export function listCards(picture, name, presentation, targetTag, directory) {
  targetTag.innerHTML += `
  <div class="card">
    <a href="../produto-individual/index.html?${directory}=${picture}">
        <img style="${
          directory == "serviços" ? "object-fit:cover" : ""
        }" src="../database/${directory}/assets/${picture}.png" alt="">
        <h3>${name}</h3>
        <p>${presentation}</p>
    </a>
    <button value="${[
      picture,
      directory,
    ]}" class="btn btn-amarelo add-button" type="submit">Adicionar a lista</button>
    </div>
    `;
}
