export function rodape() {
  const footer = document.querySelector("footer");

  footer.innerHTML = `
  <div class="container">
        <div>
          <h3 class="titulo-pequeno">Endereço</h3>
          <p>
            Rua São Sebastião, 1234 Bela Vista - Arapiraca - MG CEP: 12345-678
          </p>
        </div>
        <div>
          <h3 class="titulo-pequeno">Contatos</h3>
          <p>Telefone: (31)99999-9999</p>
          <a href="mailto:contato@paivamotopecas.com">Email: contato@paivamotopecas.com</a>
        </div>
        <div>
          <h3 class="titulo-pequeno">Horário de funcionamento</h3>
          <p>Seg a sexta - 08:00 ás 18:00</p>
          <p>Sábado - 09:00 ás 12:00</p>
        </div>
      </div>
   `;
}
