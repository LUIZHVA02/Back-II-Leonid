import { getFilmes, getFilme, postFilme } from "./filmes.js"

export function criarBarraPesquisa(){
    const barraPesquisa = document.getElementsByClassName('barraPesquisa')

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

    menuBurguer.appendChild(imgMenuBurguer)
    logo.appendChild(imgLogo)
    campoPesquisa.append(inputPesquisa,imgLupa)
    iconPerfil.appendChild(buttonPerfil)
    buttonPerfil.appendChild(imgIconPerfil)
}