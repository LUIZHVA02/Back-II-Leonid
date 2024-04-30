import { getFilmes, getFilme, postFilme } from "./filmes.js"
import { tratarData, tratarDuracao } from "./tratamento.js"

export function criarBarraPesquisa() {

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

    campoPesquisa.append(inputPesquisa, iconPesquisa)

    iconPesquisa.appendChild(buttonPesquisa)
    buttonPesquisa.appendChild(imgLupa)

    return barraPesquisa
}

export function criarCard(filme) {

    const cards = document.createElement('div')
    cards.classList.add('cards')

    cards.addEventListener('click', (event) => {
        event.stopPropagation()
        const modal = criarModal(filme)
        document.body.appendChild(modal)
        var myModal = new bootstrap.Modal(modal)
        myModal.show()
    })

    const cardFilmes = document.createElement('div')
    cardFilmes.classList.add('cardFilmes')

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
    if (filme.duracao != undefined) {
        duracao.textContent = tratarDuracao(filme.duracao)
    } else {
        duracao.textContent = filme.duracao
    }

    const dtLanca = document.createElement('data')
    dtLanca.classList.add('dtLanca')
    if (filme.data_lancamento != undefined) {
        dtLanca.textContent = tratarData(filme.data_lancamento)
    } else {
        dtLanca.textContent = filme.data_lancamento
    }

    cards.appendChild(cardFilmes)
    cardFilmes.append(cardIMG, infoFilme)
    cardIMG.append(avaliacoes)
    avaliacoes.append(numEstrelas, starIMG)
    infoFilme.append(titulo, duracao, dtLanca)

    return cards
}

function criarModal(filme) {
    const modal = document.createElement('div')
    modal.classList.add('modal', 'fade')
    modal.setAttribute('tabindex', '-1')
    modal.setAttribute('aria-labelledby', 'exampleModalLabel')
    modal.setAttribute('aria-hidden', 'true')

    // Conteúdo do modal
    if (filme.data_lancamento && filme.data_relancamento && filme.duracao) {
        modal.innerHTML = `
    <div class="modal-dialog modal-xl modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
        <div class="botao-sair">
          <div class="exit">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        </div>
        <div class="cardPaginaFilmes">
  <div class="cardPaginaIMG"><img src="${filme.foto_capa}" alt=""></div>
  <div class="classificacao"><img src="${filme.imagem}" alt=""></div>
  <div class="avaliacoes">
    <h1 class="numEstrelas"></h1>
    <img class="starIMG">
  </div>

  <div class="infoFilmePagina">
    <h2 class="tituloPagina">${filme.nome}</h2>
    <div class="legendaComSinopsePagina">
      <h1 class="legendadtLancaPagina">Sinopse:</h1>
      <p class="sinopsePagina">${filme.sinopse}</p>
    </div>
    <div class="legendaComDtRelancaPagina">
      <h1 class="legendadtLancaPagina">Data Lançamento:</h1>
      <data class="dtLancaPagina">${tratarData(filme.data_lancamento)}</data>
    </div>
    <div class="legendaComDtRelancaPagina">
      <h1 class="legendadtRelancaPagina">Data Relançamento:</h1>
      <data class="dtRelancaPagina">${tratarData(filme.data_relancamento)}</data>
    </div>
    <div class="legendaComDuracao">
      <h1 class="legendaDuracao">Duração:</h1>
      <time class="duracaoPagina">${tratarDuracao(filme.duracao)}</time>
    </div>
    <div class="valorECompra">
      <div class="legendaComValorUnitario">
        <h1 class="legendaValor">Valor Unitário:</h1>
        <h1 class="valorUnitarioPagina">${filme.valor_unitario}</h1>
      </div><button class="btn_comprar">Comprar</button>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  </div>
    `
    }
    if (filme.data_lancamento && filme.duracao) {
        modal.innerHTML = `
        <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <div class="botao-sair">
              <div class="exit">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            </div>
            <div class="cardPaginaFilmes">
              <div class="cardPaginaIMG"
                style="background-image: url(&quot;https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/93/20/20120876.jpg&quot;); background-size: cover;">
                <div class="classificacao"></div>
                <div class="avaliacoes">
                  <h1 class="numEstrelas"></h1><img class="starIMG">
                </div>
              </div>
              <div class="infoFilmePagina">
                <h2 class="tituloPagina">${filme.nome}</h2>
                <div class="legendaComSinopsePagina">
                  <h1 class="legendadtLancaPagina">Sinopse:</h1>
                  <p class="sinopsePagina">${filme.sinopse}</p>
                </div>
                <div class="legendaComDtRelancaPagina">
                  <h1 class="legendadtLancaPagina">Data Lançamento:</h1>
                  <data class="dtLancaPagina">${tratarData(filme.data_lancamento)}</data>
                </div>
                <div class="legendaComDuracao">
                  <h1 class="legendaDuracao">Duração:</h1>
                  <time class="duracaoPagina">${tratarDuracao(filme.duracao)}</time>
                </div>
                <div class="valorECompra">
                  <div class="legendaComValorUnitario">
                    <h1 class="legendaValor">Valor Unitário:</h1>
                    <h1 class="valorUnitarioPagina">${filme.valor_unitario}</h1>
                  </div><button class="btn_comprar">Comprar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `
    }
    return modal
}

export async function preencherContainer() {
    const cardsHolder = document.getElementById("cardsHolder")
    const filmes = await getFilmes()

    filmes.forEach(filme => {
        const card = criarCard(filme)
        cardsHolder.appendChild(card)
        console.table(filme)
    });
}

window.onload = async () => {

    const filme = await getFilmes()
    criarBarraPesquisa()
    criarCard(filme)
    preencherContainer()
}