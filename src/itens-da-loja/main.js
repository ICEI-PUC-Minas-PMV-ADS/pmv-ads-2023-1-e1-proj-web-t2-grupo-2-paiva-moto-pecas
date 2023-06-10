import { initialSection } from "./components/initial.js";
import { showMoreFullDB } from "./components/button-show-more.js";
import { listFilterInputsOptions } from "./components/filter-components/list-filter-options.js";
import { menu } from "../components/menu.js";
import { rodape } from "../components/rodape.js";
import { botaoWpp } from "../components/botao-wpp.js";
import { responsiveFilter } from "./components/filter-components/responsive-filter.js";
import { products } from "../database/produtos/produtos-db.js";
import { servicos } from "../database/serviços/servicos-db.js";
import {
  OptionsWithoutSpacesProducts,
  OptionsWithoutSpacesServices,
} from "./components/filter-components/options.js";
import { pageshow } from "./components/pageshow.js";
import { filter } from "./components/filter.js";
import { adicionaAlista } from "../base.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const url = new URL(window.location.href);
const initialSector = urlParams.get("sector");

menu();
botaoWpp();
rodape();

let database, options, assets;

if (initialSector !== 'serviços') {
  database = products;
  options = OptionsWithoutSpacesProducts;
  assets = "produtos";
} else {
  database = servicos;
  options = OptionsWithoutSpacesServices;
  assets = "serviços";
}

(function main(database, options, assets) {
  initialSection(database, assets);
  listFilterInputsOptions(database);
  filter(database, assets)
  showMoreFullDB(database);
  responsiveFilter();
  adicionaAlista();
  pageshow(database, assets);

  const buttonShowMore = document.querySelector("#button-show-more");
  const buttonsChangePage = document.querySelector("#buttonsChangePage");
  const productsButton = buttonsChangePage.querySelector("button:nth-child(1)");
  const servicesButton = buttonsChangePage.querySelector("button:nth-child(2)");

  if (assets === 'produtos') {    
    productsButton.style.backgroundColor = "var(--amarelo-secundario)";
  } else {   
    servicesButton.style.backgroundColor = "var(--amarelo-secundario)";
  }
  buttonShowMore.innerText = `Ver mais ${(database[0].sector).toLowerCase()}s`;

  const dynamicServicesButton = database === products ? servicesButton : productsButton;
  const dynamicProductsButton = database === servicos ? productsButton : servicesButton;

  function setSector(button, sectorDB, optionsSector) {
    if (database !== sectorDB) {
      button.addEventListener("click", () => {        
        const dynamicServicesButton = button === productsButton ? servicesButton : productsButton;
        const dynamicProductsButton = button === productsButton ? productsButton : servicesButton;

        dynamicProductsButton.style.backgroundColor = "var(--amarelo-secundario)";
        dynamicServicesButton.style.backgroundColor = "var(--amarelo-primario)";
        main(sectorDB, optionsSector, (`${sectorDB[0].sector}s`).toLowerCase());
      });
    }
  }
  setSector(servicesButton, servicos, OptionsWithoutSpacesServices)
  setSector(productsButton, products, OptionsWithoutSpacesProducts)

})(database, options, assets);


