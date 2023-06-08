# Especificações do Projeto

<span>Pré-requisitos: <a href="01-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A precisa delimitação do problema e os aspectos mais importantes a serem abordados nesse projeto foram estabelecidos com a observação dos usuários em seus ambientes cotidianos e a realização de entrevistas. As informações obtidas foram então organizadas em personas e histórias de usuários.

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas nas figuras que se seguem.

### Bruna Silva

<img height="300px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/blob/main/docs/img/persona-bruna.jpg" />

Idade: 29 <br>
Ocupação: Biomédica <br>
Bruna possui carteira há 4 anos e utiliza a moto para passeio e para se deslocar até o trabalho. Seu hobbie favorito é viajar longas distâncias com sua moto.

### Pedro Ribeiro

<img height="300px" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/blob/main/docs/img/persona-pedro.jpg" />

Idade: 30 <br>
Ocupação: Empresário <br>
Pedro é dono de uma oficina de motos há 3 anos e acredita que o bom relacionamento com os clientes é um dos pilares de seu negócio. Seu hobbie favorito é passear com a família.

## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários.

| EU COMO... `PERSONA` | QUERO/PRECISO ... `FUNCIONALIDADE`                                    | PARA ... `MOTIVO/VALOR`                                                        |
| -------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Bruna Silva          | quero conseguir ser atendida pelo WhatsApp                            | para conseguir tirar minhas dúvidas e conseguir me sentir segura para a compra |
| Bruna Silva          | quero poder ver a lista de serviços e produtos disponíveis            | para que eu possa escolher o que eu preciso                                    |
| Bruna Silva          | quero ver os horários de funcionamento da oficina                     | para que eu possa me planejar para ir até lá                                   |
| Bruna Silva          | quero ver mídias dos produtos e serviços                              | para que eu possa ter certeza do que estou comprando                           |
| Bruna Silva          | quero conseguir filtrar os produtos por marca e categoria             | para facilitar a minha busca                                                   |
| Bruna Silva          | quero poder realizar buscas por texto                                 | para que eu possa encontrar o que eu quero com facilidade e rapidez            |
| Bruna Silva          | quero ter informações técnicas sobre os produtos e serviços           | para que eu possa avaliar previamente minha compra                             |
| Bruna Silva          | quero poder realizar um orçamento com produtos que desejo do site     | para que eu possa receber um atendimento mais específico                       |
| Pedro Ribeiro        | quero que o cliente consiga chegar até minha oficina com facilidade   | para que ele não deixe de comprar pela dificuldade de se localizar             |
| Pedro Ribeiro        | quero que o cliente possa conhecer mais sobre a oficina               | para que o cliente se sinta seguro na compra                                   |
| Pedro Ribeiro        | quero que o site mostre, com destaque, o nome e logotipo da oficina   | para que o cliente consiga identificar com facilidade nossa oficina            |
| Pedro Ribeiro        | quero que meus clientes consigam tirar suas dúvidas de maneira rápida | para que não tenham dúvidas na hora da compra                                  |
| Pedro Ribeiro        | quero que meus clientes possam entrar em contato com a oficina        | para que consigam fazer orçamentos e tirar dúvidas                             |

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades de interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos funcionais do projeto, identificando a prioridade em que os mesmos devem ser entregues.

| ID    | Descrição do Requisito                                                                                                                                  | Prioridade |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| RF-01 | O site deve exibir todos os produtos e serviços oferecidos pela oficina, com mídias e suas respectivas informações técnicas.                            | ALTA       |
| RF-02 | O site deve possibilitar, por meio de um botão, o contato com a oficina pelo aplicativo WhatsApp.                                                       | ALTA       |
| RF-03 | O site deve possuir um banner com o nome e logotipo da oficina na página inicial, e em posição de destaque em todas as demais páginas.                  | MÉDIA      |
| RF-04 | O site deve fornecer a localização da oficina, com a possibilidade de redirecionamento para um serviço de gps com o endereço da oficina já configurado. | MÉDIA      |
| RF-05 | O site deve permitir que os usuários naveguem pelos produtos disponíveis para venda, filtrando-os por critérios pré estabelecidos.                      | MÉDIA      |
| RF-06 | O site deve fornecer um sistema de busca que permita aos usuários encontrar produtos específicos por nome, descrição ou outras características.         | ALTA       |
| RF-07 | O site deve conter a história da empresa, horário de funcionamento e depoimento de clientes sobre a oficina.                                            | BAIXA      |
| RF-08 | O site deve conter perguntas frequentes (faq)                                                                                                           | BAIXA      |
| RF-09 | O site deve conter um formulário de contato                                                                                                             | MÉDIA      |
| RF-10 | O site deve conter uma página onde mostra os itens selecionados pelo usuário, com a possibilidade de orçamento via WhatsApp.                            | MÉDIA      |

### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

| ID     | Descrição do Requisito                                                                                                                                        | Prioridade |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| RNF-01 | O site deve ser publicado em um ambiente acessível publicamente na internet (GitHub Pages).                                                                   | ALTA       |
| RNF-02 | O site deverá ser responsivo permitindo a visualização em diferentes dispositivos de forma adequada.                                                          | ALTA       |
| RNF-03 | O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).                                                 | ALTA       |
| RNF-04 | O site deve cumprir com boas práticas de acessibilidade, como por exemplo: contraste adequado, atributos para leitores de tela, tags semânticas em HTML, etc. | MÉDIA      |

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

| ID    | Restrição                                                                                               |
| ----- | ------------------------------------------------------------------------------------------------------- |
| RE-01 | O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 25/06/2023. |
| RE-02 | O aplicativo deve se restringir às tecnologias básicas de Web Front-end.                                |
| RE-03 | A equipe não pode subcontratar o desenvolvimento do trabalho.                                           |
