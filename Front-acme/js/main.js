import { getFilmes, getFilme, postFilme } from "./filmes.js"

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
    criarCard(filme)
    preencherContainer()
}