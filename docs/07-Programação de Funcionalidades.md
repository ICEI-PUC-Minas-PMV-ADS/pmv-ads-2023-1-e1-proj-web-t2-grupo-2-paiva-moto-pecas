# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="02-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="03-Metodologia.md"> Metodologia</a>, <a href="04-Projeto de Interface.md"> Projeto de Interface</a>

Nesta seção são apresentadas as páginas desenvolvidas para cada uma das funcionalidades do sistema.

## Menu

Todas as páginas do site apresentam o menu com as seguintes informações: A logo que leva para a página inicial e links que levam para as páginas de itens da loja, faq & contato, sobre e lista de desejos - facilitando a navegação do usuário. Estruturamos o css e JavaScript geral das páginas em um arquivo base e um outro arquivo css e js individual para estilizações específicas de cada página.

<img width="500px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/blob/main/docs/img/banner-principal.jpg?raw=true" />

Figura 24 - Menu desenvolvido

### Requisitos atendidos

- RF-03 - O site deve possuir um banner com o nome e logotipo da oficina na página inicial, e em posição de destaque em todas as demais páginas.

### Artefatos da funcionalidade

- index.html
- main.js
- base.css
- main.css
- base.js

## Banner principal

Banner da página principal chamando a atenção para a logo da oficina.

<img width="500px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/blob/main/docs/img/banner-principal.jpg?raw=true" />

Figura 25 - Banner desenvolvido

### Requisitos atendidos

- RF-03 - O site deve possuir um banner com o nome e logotipo da oficina na página inicial, e em posição de destaque em todas as demais páginas.

### Artefatos da funcionalidade

- index.html
- base.css
- main.css
- video.mp4

## Depoimento

Nesta seção temos o depoimento de um cliente fictício.

<img width="500px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/blob/main/docs/img/depoimento.jpg?raw=true" />

Figura 26 -Depoimento desenvolvido

### Requisitos atendidos

- RF-07 - O site deve conter a história da empresa, horário de funcionamento e depoimento de clientes sobre a oficina.

### Artefatos da funcionalidade

- index.html
- base.css
- main.css

## Mapa

Iframe do google maps incorporado na página para facilitar a navegação do usuário.

<img width="500px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/blob/main/docs/img/mapa.jpg?raw=true" />

Figura 27 - Mapa desenvolvido

### Requisitos atendidos

- RF-04 - O site deve fornecer a localização da oficina, com a possibilidade de redirecionamento para um serviço de gps com o endereço da oficina já configurado.

### Artefatos da funcionalidade

- index.html
- base.css
- main.css

## Rodapé

Todas as páginas do site apresentam o rodapé com as seguintes informações: endereço, contato e horário de funcionamento.

<img width="500px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/blob/main/docs/img/rodape.jpg?raw=true" />

Figura 28 - Rodapé desenvolvido

### Requisitos atendidos

- RF-07 - O site deve conter a história da empresa, horário de funcionamento e depoimento de clientes sobre a oficina.

### Artefatos da funcionalidade

- index.html
- base.css
- main.css

## Botão WhatsApp

Botão fixo na tela em todas as páginas que leva para o WhatsApp web da oficina.

<img width="500px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/blob/main/docs/img/rodape.jpg?raw=true" />

Figura 29 - Botão WhatsApp desenvolvido

### Requisitos atendidos

- RF-02 - O site deve possibilitar, por meio de um botão, o contato com a oficina pelo aplicativo WhatsApp.

### Artefatos da funcionalidade

- index.html
- base.css
- main.css
- main.js

## História da empresa

Seção que contém história da empresa e seus funcionários.

<img width="500px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/blob/main/docs/img/secao-sobre.jpg" />

Figura 30 - Página sobre desenvolvida

### Requisitos atendidos

- RF-07 - O site deve conter a história da empresa, horário de funcionamento e depoimento de clientes sobre a oficina.

### Artefatos da funcionalidade

- index.html
- base.css
- main.css
- main.js

## Mostruário de produtos e serviços

Seção que contém os produtos e serviços oferecidos pela oficina.

<img width="500px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/blob/main/docs/img/mostruario.jpg" />

Figura 31 - Mostruário de itens na página itens da loja

### Requisitos atendidos

- RF-01 - O site deve exibir todos os produtos e serviços oferecidos pela oficina, com mídias e suas respectivas informações técnicas.

### Artefatos da funcionalidade

- index.html
- base.css
- main.css
- initial.js
- button-show-more.js
- main.js

## Filtro de itens da loja

Seção que contém os filtros na página de itens da loja.

<img height="500px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/blob/main/docs/img/filter.jpg" />

Figura 32 - Filtros na página itens da loja

### Requisitos atendidos

- RF-05 - O site deve permitir que os usuários naveguem pelos produtos disponíveis para venda, filtrando-os por critérios pré estabelecidos.

### Artefatos da funcionalidade

- index.html
- base.css
- main.css
- initial.js
- filter.js
- options.js
- list-filter-options.js
- responsive-filter.js
- filter-types.js
- main.js

## Barra de busca de itens da loja

Seção que contém a barra de busca por texto na página de itens da loja.

<img width="500px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/blob/main/docs/img/search.jpg" />

Figura 33 - Barra de busca na página itens da loja

### Requisitos atendidos

- RF-06 - O site deve fornecer um sistema de busca que permita aos usuários encontrar produtos específicos por nome, descrição ou outras características.

### Artefatos da funcionalidade

- index.html
- base.css
- main.css
- initial.js
- filter.js
- custom-datalist.js
- main.js

## Item Individual

Página específica que mostra produto ou serviço do site de modo individual.

<img width="500px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/blob/main/docs/img/tela-prod-individual.jpg" />

Figura 34 - Página de item individual

### Requisitos atendidos

- RF-01 - O site deve exibir todos os produtos e serviços oferecidos pela oficina, com mídias e suas respectivas informações técnicas.

### Artefatos da funcionalidade

- index.html
- base.css
- main.css
- script.js

## FAQ

Página que contém a FAQ, exibindo perguntas e respostas tirando as dúvidas mais frequentes dos usuários.

<img width="500px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/blob/main/docs/img/faq.jpg" />

Figura 35 - Seção da faq na página de faq & contato

### Requisitos atendidos

- RF-08 - O site deve conter perguntas frequentes (faq).

### Artefatos da funcionalidade

- index.html
- base.css
- main.css
- main.js

## Formulário de Contato

Seção de contato, exibindo formulário com informações dos usuários e envio das dúvidas para a oficina.

<img width="500px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/blob/main/docs/img/formulario.jpg" />

Figura 36 - Seção de formulário na página de faq & contato

### Requisitos atendidos

- RF-09 - O site deve conter um formulário de contato.

### Artefatos da funcionalidade

- index.html
- base.css
- main.css
- main.js

## Lista de Desejos

Página que contém todos os itens presentes na lista, juntamente com sugestões e um botão de fechar lista. Esse botão é responsável por enviar uma mensagem via WhatsApp com os itens selecionados pelo usuário - informando nome e ID, a fim de saber mais informações sobre os itens escolhidos.

<img width="500px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/blob/main/docs/img/aplicacao-lista-de-desejo.jpg" />

Figura 37 - Lista de desejos com itens

Página que mostra a lista de desejos vazia, juntamente com algumas sugestões.

<img width="500px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/blob/main/docs/img/aplicacao-lista-de-desejo-vazia.jpg">

Figura 38 - Lista de desejos vazia

### Requisitos atendidos

- RF-10 - O site deve conter uma página onde mostra os itens selecionados pelo usuário, com a possibilidade de orçamento via WhatsApp.

### Artefatos da funcionalidade

- index.html
- base.css
- main.css
- main.js

## Banco de dados

O banco de dados é uma array de objetos, tendo sua estrutura composta por:<br>
**name:** O nome do item;<br>
**presentation:** uma breve descrição;<br>
**description:** a descrição completa do item;<br>
**brand:** sua marca;<br>
**category:** a categoria que o item pertence;<br>
**picture:** é o nome da imagem do produto, representada por um número e que também foi usado como identificador único;<br>
**sector:** a qual setor pertence, produtos ou serviços;<br>
**featured:** determina os itens classificados com destaque.<br>
Este banco de dados é utilizado nas páginas: home, itens da loja, item individual e lista de desejos.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/blob/main/docs/img/db-folder.jpg">

Figura 39 - Pastas do banco de dados

Exemplo da estrutura do banco de dados:

```javascript
export const products = [
  {
    name: "Caixa Direção CG Honda",
    presentation: "Caixa de direção original honda CG 125, CG 150, CG 160",
    description: `
        Caixa de direção original honda; 
        Material: Alumínio; 
        Posição: Superior/Inferior; 
        Diâmetro do tubo de direção: 26 mm; 
        Diâmetro do garfo: 1 mm; 
        Diâmetro do guidão: 1 mm. 
        Aplicação: CG fan 125 - CG titan 125 - CG fan 150 - CG titan 150 - CG fan 160 - CG titan 160 - CG start 160
        `,
    brand: "Honda",
    category: "Chassis",
    picture: "2",
    sector: "Produto",
    featured: false,
  },
];
```

### Requisitos atendidos

- RF-01 - O site deve exibir todos os produtos e serviços oferecidos pela oficina, com mídias e suas respectivas informações técnicas.

### Artefatos da funcionalidade

- produtos-db.js
- servicos-db.js
