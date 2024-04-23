import { getFilmes, getFilme, postFilme } from "./filmes.js"
import { tratarData, tratarDuracao } from "../cms/js_cms/tratamento_cms.js"

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
    cardIMG.style.backgroundImage = `url(${filme.foto_capa})`
    cardIMG.style.backgroundSize = `cover`


    const avaliacoes = document.createElement('div')
    avaliacoes.classList.add('avaliacoes')

    const numEstrelas = document.createElement('h1')
    numEstrelas.classList.add('numEstrelas')

    const starIMG = document.createElement('img')
    starIMG.classList.add('starIMG')



    const infoFilme = document.createElement('div')
    infoFilme.classList.add('infoFilme')

    const titulo = document.createElement('h2')
    titulo.classList.add('titulo')
    titulo.textContent = filme.nome

    const duracao = document.createElement('time')
    duracao.classList.add('duracao')
    duracao.textContent = tratarDuracao(filme.duracao)

    const dtLanca = document.createElement('data')
    dtLanca.classList.add('dtLanca')
    dtLanca.textContent = tratarData(filme.data_lancamento)

    card.append(cardIMG, infoFilme)
    cardIMG.append( avaliacoes)
    avaliacoes.append(numEstrelas, starIMG)
    infoFilme.append(titulo, duracao, dtLanca)
    
    return card
}

function criarPaginaFilme(filme) {
    const cardPaginaFilmes = document.createElement('div')
    cardPaginaFilmes.classList.add('cardPaginaFilmes')

    const cardPaginaIMG = document.createElement('div')
    cardPaginaIMG.classList.add('cardPaginaIMG')
    cardPaginaIMG.style.backgroundImage = `url(${filme.foto_capa})`
    cardPaginaIMG.style.backgroundSize = `cover`
    
    const classificacao = document.createElement('div')
    classificacao.classList.add('classificacao')

    const avaliacoes = document.createElement('div')
    avaliacoes.classList.add('avaliacoes')

    const numEstrelas = document.createElement('h1')
    numEstrelas.classList.add('numEstrelas')

    const starIMG = document.createElement('img')
    starIMG.classList.add('starIMG')



    const infoFilmePagina = document.createElement('div')
    infoFilmePagina.classList.add('infoFilmePagina')

    const tituloPagina = document.createElement('h2')
    tituloPagina.classList.add('tituloPagina')
    tituloPagina.textContent = filme.nome

    const legendaComSinopsePagina = document.createElement('div')
    legendaComSinopsePagina.classList.add('legendaComSinopsePagina')

    const legendaSinopsePagina = document.createElement('h1')
    legendaSinopsePagina.classList.add('legendadtLancaPagina')
    legendaSinopsePagina.textContent = "Sinopse:"

    const sinopsePagina = document.createElement('p')
    sinopsePagina.classList.add('sinopsePagina')
    sinopsePagina.textContent = filme.sinopse



    const legendaComDtLancaPagina= document.createElement('div')
    legendaComDtLancaPagina.classList.add('legendaComDtRelancaPagina')

    const legendadtLancaPagina = document.createElement('h1')
    legendadtLancaPagina.classList.add('legendadtLancaPagina')
    legendadtLancaPagina.textContent = "Data Lançamento:"

    const dtLancaPagina = document.createElement('data')
    dtLancaPagina.classList.add('dtLancaPagina')
    dtLancaPagina.textContent = tratarData(filme.data_lancamento)

    

    const legendaComDtRelancaPagina= document.createElement('div')
    legendaComDtRelancaPagina.classList.add('legendaComDtRelancaPagina')

    const legendadtRelancaPagina = document.createElement('h1')
    legendadtRelancaPagina.classList.add('legendadtRelancaPagina')
    legendadtRelancaPagina.textContent = "Data Relançamento:"

    const dtRelancaPagina = document.createElement('data')
    dtRelancaPagina.classList.add('dtRelancaPagina')
    dtRelancaPagina.textContent = tratarData(filme.data_relancamento)



    const legendaComDuracao = document.createElement('div')
    legendaComDuracao.classList.add('legendaComDuracao')

    const legendaDuracao = document.createElement('h1')
    legendaDuracao.classList.add('legendaDuracao')
    legendaDuracao.textContent = "Duração:"

    const duracaoPagina = document.createElement('time')
    duracaoPagina.classList.add('duracaoPagina')
    duracaoPagina.textContent = tratarDuracao(filme.duracao)


    const valorECompra = document.createElement('div')
    valorECompra.classList.add('valorECompra')

    const legendaComValorUnitario = document.createElement('div')
    legendaComValorUnitario.classList.add('legendaComValorUnitario')

    const legendaValor = document.createElement('h1')
    legendaValor.classList.add('legendaValor')
    legendaValor.textContent = "Valor Unitário:"

    const valorUnitario = document.createElement('h1')
    valorUnitario.classList.add('valorUnitarioPagina')
    valorUnitario.textContent = filme.valor_unitario

    const btn_comprar = document.createElement('button')
    btn_comprar.classList.add('btn_comprar')
    btn_comprar.textContent = "Comprar"

    cardPaginaFilmes.append(cardPaginaIMG, infoFilmePagina)
    cardPaginaIMG.append(classificacao, avaliacoes)
    avaliacoes.append(numEstrelas, starIMG)
    infoFilmePagina.append(tituloPagina,legendaComSinopsePagina, legendaComDtLancaPagina, legendaComDtRelancaPagina,legendaComDuracao, valorECompra)
    legendaComSinopsePagina.append(legendaSinopsePagina,sinopsePagina)
    legendaComDtLancaPagina.append(legendadtLancaPagina,dtLancaPagina)
    legendaComDtRelancaPagina.append(legendadtRelancaPagina,dtRelancaPagina)
    legendaComDuracao.append(legendaDuracao,duracaoPagina)
    valorECompra.append(legendaComValorUnitario,btn_comprar)
    legendaComValorUnitario.append(legendaValor,valorUnitario)

    return cardPaginaFilmes
}

export async function preencherContainer() {
    const cardsHolder = document.getElementById("cardsHolder")
    const modalPagina = document.getElementById("modalPagina")
    const filmes = await getFilmes()

    filmes.forEach(filme => {
        const card = criarCard(filme)
        cardsHolder.appendChild(card)
        const pagina = criarPaginaFilme(filme)
        modalPagina.append(pagina)
    });
}

window.onload = async () => {

    const filme = await getFilmes()
    criarBarraPesquisa()
    criarCard(filme)
    preencherContainer()
    console.log(filme)
}