# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="02-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="03-Projeto de Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:

- Site publicado na Internet
- Navegador da Internet - Chrome, Firefox ou Edge
- Conectividade de Internet para acesso às plataformas (APISs)

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

| Caso de Teste          | CT-01 - Visualizar produto marcado no filtro categoria                                                                 |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados  | RF-05 - O site deve permitir que os usuários naveguem pelos produtos disponíveis para venda, filtrando-os por critérios pré estabelecidos                       |
| Objetivo do Teste      | Verificar se o filtro categoria está funcionando corretamente                                                                                                   |        
| Passos                 | 1) Acessar o Navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Clicar na página de filtro de produto<br>  5) Marcar filtro categoria<br>|   
| Critérios de Êxito     | Os filtros devem exibir corretamente os produtos, listado na categoria                                                                                          |

| Caso de Teste          | CT-02 - Visualizar produto marcado no filtro por marca                                                                |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados  | RF-05 - O site deve permitir que os usuários naveguem pelos produtos disponíveis para venda, filtrando-os por critérios pré estabelecidos                       |
| Objetivo do Teste      | Verificar se o filtro categoria está funcionando corretamente                                                                                                   |        
| Passos                 | 1) Acessar o Navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Clicar na página de filtro de produto<br>  5) Marcar filtro marcas<br>|   
| Critérios de Êxito     | Os filtros devem exibir corretamente os produtos, listado por marca  |

| Caso de Teste          | CT-03 - Visualizar produto marcado no filtro por marcas e categorias                                                                |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados  | RF-05 - O site deve permitir que os usuários naveguem pelos produtos disponíveis para venda, filtrando-os por critérios pré estabelecidos                       |
| Objetivo do Teste      | Verificar se o filtro categoria está funcionando corretamente                                                                                                   |        
| Passos                 | 1) Acessar o Navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Clicar na página de filtro de produto<br>  5) Marcar filtros marcas e categorias ao mesmo tempo<br>|   
| Critérios de Êxito     | Os filtros devem exibir corretamente os produtos, listados por marcas e categorias|

| Caso de Teste          | CT-04 - Visualizar produto por pesquisa  |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados  | RF-06 - O site deve fornecer um sistema de busca que permita aos usuários encontrar produtos específicos por nome, descrição ou outras características.                      |
| Objetivo do Teste      | Verificar por nome específico se filtro funciona normalmente   |        
| Passos                 | 1) Acessar o Navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Clicar na página de filtro de produto<br>  5) Digitar produto desejado no campo de busca<br>|   
| Critérios de Êxito     | A página deve apresentar a lista do produto solicitado na busca|

| Caso de Teste          | CT-05 - Pesquisa de produto não encontrado no filtro |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados  | RF-06 - O site deve fornecer um sistema de busca que permita aos usuários encontrar produtos específicos por nome, descrição ou outras características.                      |
| Objetivo do Teste      | Verificar por nome específico se filtro funciona normalmente   |        
| Passos                 | 1) Acessar o Navegador<br> 2) Informar o endereço do Site<br> 3) Visualizar a página principal<br> 4) Clicar na página de filtro de produto<br>  5) Digitar produto desejado no campo de busca<br>|   
| Critérios de Êxito     |A página exibe nenhum produto encontrado|
