import { getFilmes, getFilme, postFilme } from "./filmes.js"

export function criarBarraPesquisa(){
    const barraPesquisa = document.getElementById('barraPesquisa')

    const menuBurguer = document.createElement('div')
    menuBurguer.classList.add('menuBurguer')

    const imgMenuBurguer = document.createElement('img')
    imgMenuBurguer.src = '../image/png/menu-burguer.png'

    const logo = document.createElement('div')
    logo.classList.add('logoPrincipal')

    const imgLogo = document.createElement('img')
    imgLogo.src = '../image/png/acmeLogo.png'

    const campoPesquisa = document.createElement('div')
    campoPesquisa.classList.add('campoPesquisa')

    const inputPesquisa = document.createElement('input')
    inputPesquisa.classList.add('inputPesquisa')

    const imgLupa = document.createElement('img')
    imgLupa.src = '../image/png/lupa.png'

    const iconPerfil = document.createElement('div')
    iconPerfil.classList.add('iconPerfil')

    const buttonPerfil = document.createElement('button')
    buttonPerfil.classList.add('buttonPerfil')

    const imgIconPerfil = document.createElement('img')
    imgIconPerfil.src = '../image/png/botão-perfil.png'

    barraPesquisa.append(menuBurguer, logo, campoPesquisa, iconPerfil, buttonPerfil)
    menuBurguer.appendChild(imgMenuBurguer)
    logo.appendChild(imgLogo)
    campoPesquisa.append(inputPesquisa,imgLupa)
    iconPerfil.appendChild(buttonPerfil)
    buttonPerfil.appendChild(imgIconPerfil)

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

window.onload = async () => {

    const filme = await getFilmes()
    criarBarraPesquisa()
    criarCard(filme)
    preencherContainer()
}