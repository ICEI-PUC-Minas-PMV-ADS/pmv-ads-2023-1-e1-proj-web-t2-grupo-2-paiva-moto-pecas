# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A precisa delimitação do problema e os aspectos mais importantes a serem abordados nesse projeto foram estabelecidos com a observação dos usuários em seus ambientes cotidianos e a realização de entrevistas. As informações obtidas foram então organizadas em personas e histórias de usuários.

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas nas figuras que se seguem.
### Bruna Silva
Bruna possui carteira há 4 anos e utiliza a moto para passeio e para se deslocar até o trabalho. Seu hobbie favorito é viajar longas distâncias com sua moto.
### Pedro Ribeiro
Pedro é dono de uma oficina de motos há 3 anos e acredita que o bom relacionamento com os clientes é um dos pilares de seu negócio. Seu hobbie favorito é passear com a família.

## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários.

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Bruna Silva  | quero conseguir ser atendida pelo WhatsApp         | para conseguir tirar minhas dúvidas e conseguir me sentir segura para a compra             |
|Bruna Silva       | quero conseguir filtrar os produtos por marca, categoria, tipo e relevância               | para facilitar a minha busca |
|Bruna Silva       | quero poder realizar buscas personalizadas             | para que eu possa encontrar o que eu quero com facilidade e rapidez |
|Bruna Silva       | quero ter informações técnicas sobre os produtos e serviços               | para que eu possa avaliar previamente minha compra |
|Pedro Ribeiro       | quero que o cliente consiga chegar até minha oficina com facilidade             | para que ele não deixe de comprar pela dificuldade de se localizar |
|Pedro Ribeiro       | quero que o cliente possa conhecer mais sobre a oficina              | para que o cliente se sinta seguro na compra |
|Pedro Ribeiro       | quero que o site mostre, com destaque, o nome e logotipo da oficina              | para que o cliente consiga identificar com facilidade nossa oficina. |

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades de interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais
A tabela a seguir apresenta os requisitos funcionais do projeto, identificando a prioridade em que os mesmos devem ser entregues.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve exibir todos os produtos e serviços oferecidos pela oficina, com mídias e suas respectivas informações técnicas. | ALTA | 
|RF-002| O site deve possibilitar, por meio de um botão, o contato com a oficina pelo aplicativo WhatsApp. | ALTA | 
|RF-003| O site deve possuir um banner com o nome e logotipo da oficina na página inicial, e em posição de destaque em todas as demais páginas. | MÉDIA |
|RF-004| O site deve fornecer a localização da oficina, com a possibilidade de redirecionamento para um serviço de gps com o endereço da oficina já configurado. | MÉDIA |
|RF-005| O site deve permitir que os usuários naveguem pelos produtos disponíveis para venda, filtrando-os por critérios pré estabelecidos. | MÉDIA |
|RF-006| O site deve fornecer um sistema de busca que permita aos usuários encontrar produtos específicos por nome, descrição ou outras características. | ALTA |
|RF-007| O site deve conter a história da empresa, informações dos funcionários, horário de funcionamento e avaliações de clientes sobre a oficina. | BAIXA |


### Requisitos não Funcionais
A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na internet (GitHub Pages). | ALTA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em diferentes dispositivos de forma adequada. | ALTA | 
|RNF-003| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge). | ALTA | 
|RNF-004| O site deve cumprir com boas práticas de acessibilidade, como por exemplo: contraste adequado, atributos para leitores de tela, tags semânticas em HTML, etc. | MÉDIA | 

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
