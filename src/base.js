export function preencherElem() {
  const contElements = document.getElementById("cont-principal");
  const card = document.querySelector(".go-page");

  card.addEventListener("click", () => {
    const pegarId = card.querySelector("span");
    const elemUnico = products.find((product) => {
      product.picture === pegarId;
    });
    contElements.innerHTML = ` 
    <div id="container-produto">
    <img id="imagem-produto" src="../database/produtos/assets/${elemUnico.picture}.png" alt="">
    <div id="container-info">
        <h1 class="titulo-medio">${elemUnico.name}</h1>
        <p>${elemUnico.description}
        </p>
        <h2 class="titulo-pequeno"><strong>Marca: </strong>${elemUnico.brand}</h2>
        <h2 class="titulo-pequeno"><strong>Categoria: </strong>${elemUnico.category}</h2>
    </div>
</div>
<button class="btn btn-amarelo add-button">Adicionar a lista</button>
    `;
  });
}
