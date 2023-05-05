import { produtos } from '../../database/produtos/produtos-db.js';

const loja = document.querySelector('#loja');

const marcas = produtos.map((produto) => {
    return produto.marca
})
const getMarcas = marcas.filter((valor, indice, arr) => arr.indexOf(valor) === indice);

const inputsMarca = document.querySelector('#inputsMarca');

getMarcas.map((marca) => {
    loja.innerHTML += `<section class="classProcutos" id="filterSection${marca.split(' ').join("")}">`
})

getMarcas.map((marca) => {
    inputsMarca.innerHTML += `
    <div class="divFilter">
        <input id="${marca.split(' ').join("")}" type="checkbox" name="${marca}" value="${marca}">
        <p>${marca}</p>
    </div>`
})

async function filterMarca(filterSection, imagem, nome, apresentacao) {
    const filterSectionMarca = document.querySelector(`${filterSection}`)
    filterSectionMarca.innerHTML += `
            <div class="produtoUnit" >
                <img class="img" src="../database/produtos/public/${imagem}.png" alt="">
                    <h3>${nome}</h3>
                    <p>${apresentacao}</p>
            </div>
        `

}

export function onEvent(marca, filterSection) {
    let filtrados = []
    const marcaID = document.querySelector(`${marca}`)
    const divProduto = document.querySelector('#divProduto');
    const filterSectionMarca = document.querySelector(`${filterSection}`)

    marcaID.addEventListener('change', () => {
        if (marcaID.checked === true) {
            filtrados = produtos.filter((produto) => {
                return produto.marca === marcaID.value
            })
            divProduto.innerHTML = ''
            filtrados.map((produto) => {
                const { imagem, nome, apresentacao } = produto
                filterMarca(
                    filterSection,
                    imagem,
                    nome,
                    apresentacao
                )
            })

        } else if (marcaID.checked === false) {
            filterSectionMarca.innerHTML = ''
        }

    })

}
function check() {
    let isChecked = false;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            isChecked = true;
            break
        }
    }

    if (!isChecked) {
        isChecked;
    }

    return isChecked;
}

export function reloadPage(...marcas) {
    const marcaID = document.querySelectorAll(`${marcas}`)

    marcaID.forEach((marca) => {
        marca.addEventListener('change', () => {
            if (check() === true) {               
                marca.addEventListener('change', () => {
                    if (check() === false) {
                        location.reload();
                    }
                })
            }
        })
    })
}




