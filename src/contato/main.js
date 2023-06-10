import { menu } from "../components/menu.js";
import { rodape } from "../components/rodape.js";
import { botaoWpp } from "../components/botao-wpp.js";
import { adicionaAlista } from "../base.js";

menu();
botaoWpp();
rodape();
adicionaAlista();

function verificarCampos() {
  var campos = document.getElementsByTagName("input");

  for (var i = 0; i < campos.length; i++) {
    var campo = campos[i];

    if (
      campo.hasAttribute("required") &&
      (campo.value === "" || campo.value === null)
    ) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return false;
    }
  }

  // Todos os campos obrigatórios estão preenchidos
  return true;
}
