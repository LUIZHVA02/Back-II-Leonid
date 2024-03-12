import { getFilmes, getFilme, postFilme } from "./filmes.js"

export function criarPagina(filme) {
    const card = document.createElement('div')
    card.classList.add('cardFilme')

    const titulo = document.createElement('h2')
    titulo.classList.add('titulo')
    titulo.textContent = filme.nome

    const descricao = document.createElement('p')
    descricao.classList.add('descricao')
    descricao.textContent = filme.sinopse

    const duracao = document.createElement('time')
    duracao.classList.add('duracao')
    duracao.textContent = filme.duracao

    const dtLanca = document.createElement('data')
    dtLanca.classList.add('dtLanca')
    dtLanca.textContent = filme.data_lancamento

    const dtRelanca = document.createElement('data')
    dtRelanca.classList.add('dtRelanca')
    dtRelanca.textContent = filme.data_relancamento

    const banner = document.createElement('img')
    banner.classList.add('banner')
    banner.textContent = filme.foto_capa

    const valor = document.createElement('data')
    valor.classList.add('valor')
    valor.textContent = filme.valor_unitario

    card.append(titulo, descricao, duracao, dtLanca, dtRelanca, banner, valor)
    return card
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
    const cardsHolder = document.querySelector(cardsHolder)
    const filmes = await getFilmes()

    filmes.forEach(filme => {
        const card = criarCard(filme)
        cardsHolder.append(card)
    });
}

window.onload = async () => {

    const filme = await getFilmes()
    criarCard(filme)
    preencherContainer()
}