import { getFilmes, getFilme, postFilme, deletefilme } from "../../js/filmes.js"
import { tratarData, tratarDuracao } from "./tratamento_cms.js"

export function criarBarraPesquisa(){
    const barraPesquisa = document.getElementById('barraPesquisa')

    const menuBurguer = document.createElement('div')
    menuBurguer.classList.add('menuBurguer')
    const buttonMenu = document.createElement('button')
    buttonMenu.classList.add('buttonMenu')
    const imgMenuBurguer = document.createElement('img')
    imgMenuBurguer.src = '../../image/png/menu-burguer.png'

    const logo = document.createElement('div')
    logo.classList.add('logoPrincipal')
    const buttonHome = document.createElement('button')
    buttonHome.classList.add('buttonHome')
    const imgLogo = document.createElement('img')
    imgLogo.src = '../../image/png/acmeLogo.png'

    const campoPesquisa = document.createElement('div')
    campoPesquisa.classList.add('campoPesquisa')
    const inputPesquisa = document.createElement('input')
    inputPesquisa.classList.add('inputPesquisa')

    const iconPesquisa = document.createElement('div')
    iconPesquisa.classList.add('iconPesquisa')
    const buttonPesquisa = document.createElement('button')
    buttonPesquisa.classList.add('buttonPesquisa')
    const imgLupa = document.createElement('img')
    imgLupa.src = '../../image/png/lupa.png'

    barraPesquisa.append(menuBurguer, logo, campoPesquisa, iconPerfil)
    
    menuBurguer.appendChild(buttonMenu)
    buttonMenu.appendChild(imgMenuBurguer)

    logo.appendChild(buttonHome)
    buttonHome.appendChild(imgLogo)

    campoPesquisa.append(inputPesquisa,iconPesquisa)

    iconPesquisa.appendChild(buttonPesquisa)
    buttonPesquisa.appendChild(imgLupa)

    return barraPesquisa
}

function criarItensLista(filme) {
    const linha_lista_filmes = document.createElement('ul')
    linha_lista_filmes.classList.add("list-group", "list-group-horizontal", "linha_lista_filmes", "text-center")
    
    const idFilme = document.createElement('li')
    idFilme.classList.add("list-group-item", "idFilme", "col-1")
    idFilme.textContent = filme.id

    const nomeFilme = document.createElement('li')
    nomeFilme.classList.add("list-group-item", "nomeFilme", "col-3")
    nomeFilme.textContent = filme.nome

    const duracaoFilme = document.createElement('li')
    duracaoFilme.classList.add("list-group-item", "duracaoFilme", "col-3")
    duracaoFilme.textContent = tratarDuracao(filme.duracao)

    const dataLancamentoFilme = document.createElement('li')
    dataLancamentoFilme.classList.add("list-group-item", "dataLancamentoFilme", "col-3")
    dataLancamentoFilme.textContent = tratarData(filme.data_lancamento)

    const acoes = document.createElement('li')
    acoes.classList.add("list-group-item", "acoes", "col-2")
    acoes.style.display = "flex"
    acoes.style.flexDirection = "row"
    acoes.style.alignItems = "center"
    acoes.style.justifyContent = "space-evenly"

    const btnEditar = document.createElement('button')
    btnEditar.classList.add("btnEditar", "btn", "btn-primary")
    btnEditar.style.height = "48px"
    btnEditar.style.width = "48px"
    btnEditar.style.display = "flex"
    btnEditar.style.alignItems = "center"
    btnEditar.style.justifyContent = "center"

    const divEditarIMG = document.createElement('div')
    divEditarIMG.style.backgroundImage = `url("../../image/png/editar.png")`
    divEditarIMG.style.backgroundSize = `contain`
    divEditarIMG.style.backgroundRepeat = "no-repeat"
    divEditarIMG.style.height = "22px"
    divEditarIMG.style.width = "22px"


    const btnApagar = document.createElement('button')
    btnApagar.classList.add("btnApagar", "btn", "btn-danger")
    btnApagar.style.height = "48px"
    btnApagar.style.width = "48px"
    btnApagar.style.display = "flex"
    btnApagar.style.alignItems = "center"
    btnApagar.style.justifyContent = "center"
    btnApagar.onclick = () => {
        // deletefilme(idFilme.textContent)
        var response = confirm(`Você tem certeza que deseja\nexcluir o filme ${filme.nome}?`)
        if(response==true){
            deletefilme(idFilme.textContent)
        }
    }
    
    const divApagarIMG = document.createElement('div')
    divApagarIMG.style.backgroundImage = 'url(../../image/png/lixeira_branca.png)'
    divApagarIMG.style.backgroundSize = `contain`
    divApagarIMG.style.backgroundRepeat = "no-repeat"
    divApagarIMG.style.height = "22px"
    divApagarIMG.style.width = "22px"


    linha_lista_filmes.append(idFilme, nomeFilme, duracaoFilme, dataLancamentoFilme, acoes)
    acoes.append(btnEditar, btnApagar)
    btnEditar.appendChild(divEditarIMG)
    btnApagar.appendChild(divApagarIMG)

    return linha_lista_filmes
}

export async function preencherLista() {
    const lista_filmes = document.getElementById("lista_filmes")
    const filmes = await getFilmes()



    filmes.forEach(filme => {
        const linha_lista = criarItensLista(filme)
        lista_filmes.appendChild(linha_lista)
    });
}

window.onload = async () => {

    const filme = await getFilmes()
    criarBarraPesquisa()
    preencherLista()
    console.log(filme)
}