

FAZER OS SERVIÇOS COM CLASS EM VEZ DE FUNCTION

--------------------------------------

Mudar o script do html para alternar entre produtos e serviços

<script type="module" src="./main.js"></script>

Deixar um como principal, com os botões 
e outro para filtro e produtos

-------------------------------------

Posso desligar as checkboxes caso a marca marcada seja diferente da marca do produto da busca.

Posso não mostrar nada na busca caso as marcas sejam diferentes.

- Verificar checkbox marcadas
- Verificar se marca da checkbox é igual a marca da busca.
- Se sim, passa, se não tira


Fazer uma lógica para se clicar no item do datalist ele apaga tudo e mostra só o item clicado. Ou fazer ir direto para a pagina do produto. 


Tenho que ter outra condicional verificando as checkbox e se o input ficar vazio, ele apaga os itens do input e lista novamente as checkboxes marcadas.

verificando se as checkbox estão marcadas e retornando somente o item que é da marca buscada

pegos os itens das options checkboxes selecionadas, coloco em outro array e listo eles.

Se o input for diferente de 0 ai eu vou remover os itens que não correspondem ao input, quando ele é passado antes do checkbox

replicar o mesmo código nos demais itens de quando desmarca a checkbox



PROBLEMAS PARA RESOLVER:

- Ao digitar na barra de busca e marcar mais de uma option, se desmarcar não remove o item da option desmarcada.

    - Não ta entrando na condicional on de a função "returningOnlyItemsFromTheSelectedOptions" está quando desmarca

    - tenho que chamar a função em um outro else if no principal, com a condição de ser true a optionID.checked

- Se com barra de busca vazia eu marcar uma option depois digitar na busca e marcar outra option, ao desmarcar apenas uma delas (deixar ao menos uma marcada) não retorna nada, fica vazio.

Se desmarcar todas as checkbox, não retorna os itens da barra de busca.

agora não ta retornando tudo ao apagar a busca

Tenho que verificar primeiro o input, se ele for vazio e a checkbox também ai ele pega

clicar na option, depois escrever na busca, apagar e escrever novamente esta repetindo o item da busca

marcar várias options, escrever na busca depois apagar, esta mostrando apenas itens de uma option.

- checkbox
- checkbox
- texto
- apaga

marcando entre categorias e marcas está repetindo itens

pelo valor da chekcboxx eu crio um array com tudo que ela pegar do banco de dados, depois eu filtro esse array pelas imagens.

Pegar o valor de todas as checkboxes de uma vez no primeiro if do filter, para garantir que ele esta apagando e readicionando todas que são verdadeiras. Ai eu uso o reduce para ver se a imagens não são iguais. Ou seja, limpar o array sempre e retornar depois as checkboxes marcadas.

Colocar tudo em um só e filtrar pelo campo sector:

- Passar um filter que resolve

mudar o banco de dados com condicional:

-  A condicional resolve por sí só.

Se deixar marcado e mudar de setor ele guarda o estado

escrevo algo que não existe, marco 2 checkbox, apago o input e escrevo algo que existe e desmarco 1 checkbox e não retorna o conteudo da outra

Se tiver checkbox marcada e escrita na barra de busca e todas as checkboxex forem desmarcadas primeiro, apartir dai quando desmarcar checkbox e tiverem mais de 1 marcada, ele retorna vazio.

oi 0

search1
search4
search3
search5
search2

oi1
oi2

oi0

oi0

oi1
oi4
oi6


 

vc consegue colocar um if pra usar o style object-fit: contain na imagem do card (.card img) se for produtos e object-fit: cover se for serçivos?

produtos = object-fit: contain
serviços = object-fit: cover 