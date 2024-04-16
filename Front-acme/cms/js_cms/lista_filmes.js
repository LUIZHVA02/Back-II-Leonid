import { getFilmes, getFilme, postFilme } from "../../js/filmes.js"
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

    barraPesquisa.append(menuBurguer, logo, campoPesquisa)
    
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
    linha_lista_filmes.classList.add("list-group", "list-group-horizontal", "linha_lista_filmes")
    
    const idFilme = document.createElement('li')
    idFilme.classList.add("list-group-item", "idFilme")
    idFilme.textContent = filme.id

    const nomeFilme = document.createElement('li')
    nomeFilme.classList.add("list-group-item", "nomeFilme")
    nomeFilme.textContent = filme.nome

    const duracaoFilme = document.createElement('li')
    duracaoFilme.classList.add("list-group-item", "duracaoFilme")
    duracaoFilme.textContent = tratarDuracao(filme.duracao)

    const dataLancamentoFilme = document.createElement('li')
    dataLancamentoFilme.classList.add("list-group-item", "dataLancamentoFilme")
    dataLancamentoFilme.textContent = tratarData(filme.data_lancamento)

    const acoes = document.createElement('li')
    acoes.classList.add("list-group-item", "acoes")

    const btnEditar = document.createElement('button')
    btnEditar.classList.add("btnEditar")


    const btnApagar = document.createElement('button')
    btnApagar.classList.add("btnApagar")


    linha_lista_filmes.append(idFilme, nomeFilme, duracaoFilme, dataLancamentoFilme, acoes)
    acoes.append(btnEditar, btnEditar)

    return linha_lista_filmes
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
    dtLancaPagina.textContent = filme.data_lancamento

    

    const legendaComDtRelancaPagina= document.createElement('div')
    legendaComDtRelancaPagina.classList.add('legendaComDtRelancaPagina')

    const legendadtRelancaPagina = document.createElement('h1')
    legendadtRelancaPagina.classList.add('legendadtRelancaPagina')
    legendadtRelancaPagina.textContent = "Data Relançamento:"

    const dtRelancaPagina = document.createElement('data')
    dtRelancaPagina.classList.add('dtRelancaPagina')
    dtRelancaPagina.textContent = filme.data_relancamento



    const legendaComDuracao = document.createElement('div')
    legendaComDuracao.classList.add('legendaComDuracao')

    const legendaDuracao = document.createElement('h1')
    legendaDuracao.classList.add('legendaDuracao')
    legendaDuracao.textContent = "Duração:"

    const duracaoPagina = document.createElement('time')
    duracaoPagina.classList.add('duracaoPagina')
    duracaoPagina.textContent = filme.duracao


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