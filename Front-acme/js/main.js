import { getFilmes, getFilme, postFilme } from "./filmes.js"

export function criarBarraPesquisa(){
    const barraPesquisa = document.getElementById('barraPesquisa')

    const menuBurguer = document.createElement('div')
    menuBurguer.classList.add('menuBurguer')
    const buttonMenu = document.createElement('button')
    buttonMenu.classList.add('buttonMenu')
    const imgMenuBurguer = document.createElement('img')
    imgMenuBurguer.src = './image/png/menu-burguer.png'

    const logo = document.createElement('div')
    logo.classList.add('logoPrincipal')
    const buttonHome = document.createElement('button')
    buttonHome.classList.add('buttonHome')
    const imgLogo = document.createElement('img')
    imgLogo.src = './image/png/acmeLogo.png'

    const campoPesquisa = document.createElement('div')
    campoPesquisa.classList.add('campoPesquisa')
    const inputPesquisa = document.createElement('input')
    inputPesquisa.classList.add('inputPesquisa')

    const iconPesquisa = document.createElement('div')
    iconPesquisa.classList.add('iconPesquisa')
    const buttonPesquisa = document.createElement('button')
    buttonPesquisa.classList.add('buttonPesquisa')
    const imgLupa = document.createElement('img')
    imgLupa.src = './image/png/lupa.png'

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

export function criarCard(filme) {

    const card = document.createElement('div')
    card.classList.add('cardFilmes')

    const cardIMG = document.createElement('div')
    cardIMG.classList.add('cardIMG')
    
    const banner = document.createElement('img')
    banner.classList.add('banner')
    banner.src = filme.foto_capa

    const avaliacoes = document.createElement('div')
    avaliacoes.classList.add('avaliacoes')

    const starIMG = document.createElement('img')
    starIMG.classList.add('starIMG')

    const infoFilme = document.createElement('div')
    infoFilme.classList.add('infoFilme')

    const titulo = document.createElement('h2')
    titulo.classList.add('titulo')
    titulo.textContent = filme.nome

    const duracao = document.createElement('time')
    duracao.classList.add('duracao')
    duracao.textContent = filme.duracao

    const dtLanca = document.createElement('data')
    dtLanca.classList.add('dtLanca')
    dtLanca.textContent = filme.data_lancamento

    card.append(cardIMG, infoFilme)
    cardIMG.append(banner, avaliacoes)
    avaliacoes.append(starIMG)
    infoFilme.append(titulo, duracao, dtLanca)
    
    return card
}

export async function preencherContainer() {
    const cardsHolder = document.getElementById("cardsHolder")
    const filmes = await getFilmes()

    filmes.forEach(filme => {
        const card = criarCard(filme)
        cardsHolder.append(card)
    });
}

const modalPerfil = document.getElementById('modalLogIns')

//redireciona o usuário para a página de Login do CMS
export function loginCMS() {
    
}

//redireciona o usuário para a página de Cadastro do CMS
export function signUpCMS() {
    
}

//redireciona o usuário para a página de Login de usuário
export function loginUser() {
    
}

//redireciona o usuário para a página de Cadastro de usuário
export function signUpUser() {
    
}

window.onload = async () => {

    const filme = await getFilmes()
    criarBarraPesquisa()
    criarCard(filme)
    preencherContainer()
}