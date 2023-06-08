# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="02-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="03-Projeto de Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:

- Site publicado na Internet
- Navegador da Internet - Chrome, Firefox ou Edge

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

| Caso de Teste         | CT-01 - Visualizar produto marcado no filtro categoria                                                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Requisitos Associados | RF-05 - O site deve permitir que os usuários naveguem pelos produtos disponíveis para venda, filtrando-os por critérios pré estabelecidos                                      |
| Objetivo do Teste     | Verificar se o filtro por categoria está funcionando corretamente                                                                                                              |
| Passos                | 1) Acessar o Navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Clicar na página de filtro de produto<br> 5) Marcar filtro categoria<br> |
| Critérios de Êxito    | Os filtros devem exibir corretamente os produtos, listado na categoria                                                                                                         |

| Caso de Teste         | CT-02 - Visualizar produtos no filtro por marca                                                                                                                             |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-05 - O site deve permitir que os usuários naveguem pelos produtos disponíveis para venda, filtrando-os por critérios pré estabelecidos                                   |
| Objetivo do Teste     | Verificar se o filtro por marca está funcionando corretamente                                                                                                               |
| Passos                | 1) Acessar o Navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Clicar na página de filtro de produto<br> 5) Marcar filtro marcas<br> |
| Critérios de Êxito    | Os filtros devem exibir corretamente os produtos, listado por marca                                                                                                         |

| Caso de Teste         | CT-03 - Visualizar produtos no filtro por marcas e categorias                                                                                                                                            |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-05 - O site deve permitir que os usuários naveguem pelos produtos disponíveis para venda, filtrando-os por critérios pré estabelecidos                                                                |
| Objetivo do Teste     | Verificar se o filtro por marcas e categorias está funcionando corretamente                                                                                                                              |
| Passos                | 1) Acessar o Navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Clicar na página de filtro de produto<br> 5) Marcar filtros marcas e categorias ao mesmo tempo<br> |
| Critérios de Êxito    | Os filtros devem exibir corretamente os produtos, listados por marcas e categorias                                                                                                                       |

| Caso de Teste         | CT-04 - Visualizar produto/serviço por pesquisa                                                                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-06 - O site deve fornecer um sistema de busca que permita aos usuários encontrar produtos ou serviços específicos por nome, descrição ou outras características.                               |
| Objetivo do Teste     | Verificar por nome específico se filtro funciona normalmente                                                                                                                                      |
| Passos                | 1) Acessar o Navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Clicar na página de filtro de produto<br> 5) Digitar produto desejado no campo de busca<br> |
| Critérios de Êxito    | A página deve apresentar a lista do produto solicitado na busca                                                                                                                                   |

| Caso de Teste         | CT-05 - Pesquisa de produto não encontrado na busca                                                                                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-06 - O site deve fornecer um sistema de busca que permita aos usuários encontrar produtos específicos por nome, descrição ou outras características.                                           |
| Objetivo do Teste     | Verificar por nome específico se a barra de busca funciona normalmente                                                                                                                            |
| Passos                | 1) Acessar o Navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Clicar na página de filtro de produto<br> 5) Digitar produto desejado no campo de busca<br> |
| Critérios de Êxito    | A página exibe nenhum produto encontrado                                                                                                                                                          |

| Caso de Teste         | CT-06 - Pesquisa de produto não encontrado no filtro                                                                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-05 - O site deve permitir que os usuários naveguem pelos produtos disponíveis para venda, filtrando-os por critérios pré estabelecidos                                                         |
| Objetivo do Teste     | Verificar se filtro funciona normalmente                                                                                                                                                          |
| Passos                | 1) Acessar o Navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Clicar na página de filtro de produto<br> 5) Digitar produto desejado no campo de busca<br> |
| Critérios de Êxito    | A página exibe nenhum produto encontrado                                                                                                                                                          |

| Caso de Teste         | CT-07 - Lista com itens selecionados                                                                                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-10 - O site deve conter uma página onde mostra os itens selecionados pelo usuário, com a possibilidade de orçamento via WhatsApp.                                                        |
| Objetivo do Teste     | Verificar se a página de lista de desejos mostra os itens adicionados.                                                                                                                      |
| Passos                | 1) Acessar o Navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Clicar na página de filtro de produto<br> 5) Clicar no botão de adicionar a lista<br> |
| Critérios de Êxito    | A página computa todos os itens adicionados                                                                                                                                                 |

| Caso de Teste         | CT-08 - Lista de desejos vazia                                                                                                                                                          |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-10 - O site deve conter uma página onde mostra os itens selecionados pelo usuário, com a possibilidade de orçamento via WhatsApp.                                                    |
| Objetivo do Teste     | Verificar se a página de lista informa que a lista está vazia.                                                                                                                          |
| Passos                | 1) Acessar o Navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Clicar no ícone lista de desejo<br> 5) Clicar no botão Remover todos os itens<br> |
| Critérios de Êxito    | A página mostrar uma mensagem informando que a lista está vazia.                                                                                                                        |
