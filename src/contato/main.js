import { menu } from '../components/menu.js';
import { rodape } from '../components/rodape.js';
import { botaoWpp } from '../components/botao-wpp.js';

menu();
botaoWpp();
rodape();

document.querySelector("#botao").addEventListener("click", () => { alert("Você será redirecionado a uma página de confirmação!") })