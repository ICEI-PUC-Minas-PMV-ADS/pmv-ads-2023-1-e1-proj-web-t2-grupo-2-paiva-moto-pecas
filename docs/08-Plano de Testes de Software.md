# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="02-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="04-Projeto de Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:

- Site publicado na Internet
- Navegador da Internet - Chrome, Firefox ou Edge

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

| Caso de Teste         | CT-01 - Visualizar produto marcado no filtro categoria                                                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Requisitos Associados | RF-05 - O site deve permitir que os usuários naveguem pelos produtos disponíveis para venda, filtrando-os por critérios pré estabelecidos                                      |
| Objetivo do Teste     | Verificar se o filtro por categoria está funcionando corretamente                                                                                                              |
| Passos                | 1) Acessar o Navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Clicar em "Itens da loja" no menu<br> 5) Marcar filtro por categoria<br> |
| Critérios de Êxito    | Os filtros devem exibir corretamente os produtos, listado na categoria                                                                                                         |

| Caso de Teste         | CT-02 - Visualizar produtos no filtro por marca                                                                                                                             |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-05 - O site deve permitir que os usuários naveguem pelos produtos disponíveis para venda, filtrando-os por critérios pré estabelecidos                                   |
| Objetivo do Teste     | Verificar se o filtro por marca está funcionando corretamente                                                                                                               |
| Passos                | 1) Acessar o Navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Clicar em "Itens da loja" no menu<br> 5) Marcar filtro por marcas<br> |
| Critérios de Êxito    | Os filtros devem exibir corretamente os produtos, listado por marca                                                                                                         |

| Caso de Teste         | CT-03 - Visualizar produtos no filtro por marcas e categorias                                                                                                                             |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-05 - O site deve permitir que os usuários naveguem pelos produtos disponíveis para venda, filtrando-os por critérios pré estabelecidos                                                 |
| Objetivo do Teste     | Verificar se o filtro por marcas e categorias está funcionando corretamente                                                                                                               |
| Passos                | 1) Acessar o Navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Clicar em "Itens da loja" no menu<br> 5) Marcar filtros por marcas e categorias<br> |
| Critérios de Êxito    | Os filtros devem exibir corretamente os produtos listados pelas marcas e categorias selecionadas                                                                                          |

| Caso de Teste         | CT-04 - Visualizar produto/serviço por pesquisa de texto                                                                                                                                        |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-06 - O site deve fornecer um sistema de busca que permita aos usuários encontrar produtos ou serviços específicos por nome, descrição ou outras características.                             |
| Objetivo do Teste     | Verificar por nome específico se filtro funciona normalmente                                                                                                                                    |
| Passos                | 1) Acessar o Navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Clicar em "Itens da loja" no menu<br> 5) Digitar o produto desejado no campo de busca<br> |
| Critérios de Êxito    | A página deve apresentar a lista do produto solicitado na busca                                                                                                                                 |

| Caso de Teste         | CT-05 - Pesquisa de produto não encontrado na barra de busca                                                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-06 - O site deve fornecer um sistema de busca que permita aos usuários encontrar produtos específicos por nome, descrição ou outras características.                                     |
| Objetivo do Teste     | Verificar por nome específico se a barra de busca funciona normalmente                                                                                                                      |
| Passos                | 1) Acessar o Navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Clicar em "Itens da loja" no menu<br> 5) Digitar algo aleatório no campo de busca<br> |
| Critérios de Êxito    | A página exibe uma mensagem de "nenhum produto encontrado" ou "nenhum serviço encontrado"                                                                                                   |

| Caso de Teste         | CT-06 - Pesquisa de produto não encontrado no filtro                                                                                                                                                                       |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-05 - O site deve permitir que os usuários naveguem pelos produtos disponíveis para venda, filtrando-os por critérios pré estabelecidos                                                                                  |
| Objetivo do Teste     | Verificar se filtro na página de itens da loja funciona normalmente                                                                                                                                                        |
| Passos                | 1) Acessar o Navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Clicar em "Itens da loja" no menu<br> 5) Selecionar filtros na lateral esquerda da página até mostrar a mensagem<br> |
| Critérios de Êxito    | A página exibe nenhum produto encontrado                                                                                                                                                                                   |

| Caso de Teste         | CT-07 - Lista com itens selecionados                                                                                                                                              |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-10 - O site deve conter uma página onde mostra os itens selecionados pelo usuário, com a possibilidade de orçamento via WhatsApp.                                              |
| Objetivo do Teste     | Verificar se a página de lista de desejos mostra os itens adicionados.                                                                                                            |
| Passos                | 1) Acessar o Navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Clicar em adicionar a lista através da home ou página de itens da loja.<br> |
| Critérios de Êxito    | A página exibe todos os itens adicionados                                                                                                                                         |

| Caso de Teste         | CT-08 - Lista de desejos vazia                                                                                                                                                                                                    |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-10 - O site deve conter uma página onde mostra os itens selecionados pelo usuário, com a possibilidade de orçamento via WhatsApp.                                                                                              |
| Objetivo do Teste     | Verificar se a página de lista informa que a lista está vazia.                                                                                                                                                                    |
| Passos                | 1) Acessar o Navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Clicar no ícone lista de desejos<br> 5) Clicar no botão Remover todos os itens caso a página esteja exibindo algum item<br> |
| Critérios de Êxito    | A página mostrar uma mensagem informando que a lista está vazia.                                                                                                                                                                  |

| Caso de Teste         | CT-09 - Botão WhatsApp                                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-02 - O site deve possibilitar, por meio de um botão, o contato com a oficina pelo aplicativo WhatsApp.                             |
| Objetivo do Teste     | Verificar se o link externo para o whatsapp está funcionando corretamente.                                                            |
| Passos                | 1) Acessar o Navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Clicar no ícone do WhatsApp<br> |
| Critérios de Êxito    | Abrir uma nova página para o whatsapp com uma mensagem pronta para tirar dúvidas.                                                     |

| Caso de Teste         | CT-10 - Formulário de Contato                                                                                                                                                                               |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-09 - O site deve conter um formulário de contato.                                                                                                                                                        |
| Objetivo do Teste     | Verificar se existe uma validação dos campos no formulário.                                                                                                                                                 |
| Passos                | 1) Acessar o Navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Clicar em "FAQ & Contato" no menu<br> 5) Preencher informações necessárias para envio de mensagem<br> |
| Critérios de Êxito    | Mostrar mensagem de erro caso um campo obrigatório não seja preenchido.                                                                                                                                     |

| Caso de Teste         | CT-11 - Página Sobre                                                                                                                |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-07 - O site deve conter a história da empresa, horário de funcionamento e depoimento de clientes sobre a oficina.                |
| Objetivo do Teste     | Verificar se o botão da página está linkado corretamente.                                                                           |
| Passos                | 1) Acessar o Navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Clicar em "Sobre" no menu<br> |
| Critérios de Êxito    | O botão precisa levar para a página de FAQ & Contato.                                                                               |

| Caso de Teste         | CT-12 - Página inicial/home                                                                                                                  |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-10 - O site deve conter uma página onde mostra os itens selecionados pelo usuário, com a possibilidade de orçamento via WhatsApp.         |
| Objetivo do Teste     | Verificar se o item é adicionado corretamente a lista. corretamente.                                                                         |
| Passos                | 1) Acessar o Navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página inicial<br> 4) Clicar no botão de adicionar a lista<br> |
| Critérios de Êxito    | O botão precisa adicionar o item escolhido a lista.                                                                                          |
