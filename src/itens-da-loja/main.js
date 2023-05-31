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



(function main(database, options, assets) {
  menu();
  initialSection(database, assets);
  listFilterInputsOptions(database);
  filter(database, assets)
  showMoreFullDB(database);
  responsiveFilter();
  botaoWpp();
  rodape();
  pageshow(database, assets);
  const title = document.querySelector("title");
  const productsButton = buttonsChangePage.querySelector("button:nth-child(1)");
  const servicesButton = buttonsChangePage.querySelector("button:nth-child(2)");

  function setSector(button, sectorDB, optionsSector){  
    if (database !== sectorDB) {
      button.addEventListener("click", () => {
        title.innerText = `Paiva Moto Peças | ${database[0].sector}s`;
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

})(products, OptionsWithoutSpacesProducts, "produtos");






