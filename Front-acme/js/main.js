import { getFilmes, getFilme } from "./filmes.js"

function criarCard(filme) {
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

    card.append(titulo,descricao, duracao, dtLanca, dtRelanca, banner, valor) 
    return card
}

async function preencherContainer() {
    const container = document.querySelector('body')
    const filmes = await getFilmes()

    filmes.forEach(filme => {
        const card = criarCard(filme)
        container.appendChild(card)
    });
}

preencherContainer()

// criarCard(teste)
// console.table(await getFilmes())
// console.table(await getFilme(1))