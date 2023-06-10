# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="02-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="03-Metodologia.md"> Metodologia</a>, <a href="04-Projeto de Interface.md"> Projeto de Interface</a>, <a href="05-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema.

## Menu

Todas as telas do site apresentam o menu com as seguintes informações: A logo que leva para a página inicial e links que levam para as páginas de produtos/serviços, faq & contato, sobre e lista de desejos - facilitando a navegação do usuário. Estruturamos o css geral das telas em um arquivo base e um outro arquivo css individual para estilizações específicas de cada página. Um exemplo da tela é apresentado na Figura 24.

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

Iframe do google maps incorporado no mapa para facilitar a navegação do usuário.

<img width="500px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/blob/main/docs/img/mapa.jpg?raw=true" />

Figura 27 - Mapa desenvolvido

### Requisitos atendidos

- RF-04 - O site deve fornecer a localização da oficina, com a possibilidade de redirecionamento para um serviço de gps com o endereço da oficina já configurado.

### Artefatos da funcionalidade

- index.html
- base.css
- main.css

## Rodapé

Todas as telas do site apresentam o rodapé com as seguintes informações: endereço, contato e horário de funcionamento.

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

Figura 30 - Tela sobre desenvolvida

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

Figura 31 - Tela produtos e serviços

### Requisitos atendidos

- RF-01 - O site deve exibir todos os produtos e serviços oferecidos pela oficina, com mídias e suas respectivas informações técnicas.

### Artefatos da funcionalidade

- index.html
- base.css
- main.css
- initial.js
- main.js

## Filtro de produtos e serviços

Seção que contém os produtos e serviços oferecidos pela oficina.

<img height="500px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/blob/main/docs/img/filter.jpg" />

Figura 32 - Tela produtos e serviços

### Requisitos atendidos

- RF-05 - O site deve permitir que os usuários naveguem pelos produtos disponíveis para venda, filtrando-os por critérios pré estabelecidos.

### Artefatos da funcionalidade

- index.html
- base.css
- main.css
- initial.js
- filter.js
- filter-types.js
- reset-filter.js
- main.js

## Barra de busca de produtos e serviços

Seção que contém os produtos e serviços oferecidos pela oficina.

<img width="500px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/blob/main/docs/img/search.jpg" />

Figura 33 - Tela produtos e serviços

### Requisitos atendidos

- RF-06 - O site deve fornecer um sistema de busca que permita aos usuários encontrar produtos específicos por nome, descrição ou outras características.

### Artefatos da funcionalidade

- index.html
- base.css
- main.css
- initial.js
- search.js
- main.js

## Item Individual

Tela específica que mostra produto ou serviço do site de modo individual.

<img width="500px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/blob/main/docs/img/tela-prod-individual.jpg" />

Figura 34 - Tela item individual

### Requisitos atendidos

- RF-01 - O site deve exibir todos os produtos e serviços oferecidos pela oficina, com mídias e suas respectivas informações técnicas.

### Artefatos da funcionalidade

- index.html
- base.css
- main.css
- script.js

## FAQ

Tela que contém FAQ, exibindo perguntas e respostas tirando as principais dúvidas dos usuários.

<img width="500px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/blob/main/docs/img/faq.jpg" />

Figura 35 - Tela FAQ

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

Figura 36 - Tela Formulário

### Requisitos atendidos

- RF-09 - O site deve conter um formulário de contato

### Artefatos da funcionalidade

- index.html
- base.css
- main.css
- main.js

## Lista de Desejos

Tela que contem todos os itens presentes na lista, juntamente com sugestões e um botão de fechar lista.

<img width="500px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/blob/main/docs/img/aplicacao-lista-de-desejo.jpg" />

Figura 37 - Lista de Desejos com itens

Tela que mostra nenhum item juntamente com algumnas sugestões.

<img width="500px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/blob/main/docs/img/aplicacao-lista-de-desejo-vazia.jpg">

Figura 38 - Lista de Desejos sem itens

### Requisitos atendidos

- RF-10 - O site deve conter uma página onde mostra os itens selecionados pelo usuário, com a possibilidade de orçamento via WhatsApp.

### Artefatos da funcionalidade

- index.html
- base.css
- main.css
- main.js
