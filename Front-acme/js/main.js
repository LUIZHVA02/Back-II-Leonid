import { getFilmes, getFilme, postFilme, getFilmeByName } from "./filmes.js"
import { tratarData, tratarDuracao } from "./tratamento.js"

export function criarBarraPesquisa() {

  const barraPesquisa = document.getElementById('barraPesquisa')

  const menuBurguer = document.createElement('div')
  menuBurguer.classList.add('menuBurguer')
  menuBurguer.setAttribute('id', 'menuBurguer')
  const buttonMenu = document.createElement('button')
  buttonMenu.classList.add('buttonMenu')
  buttonMenu.setAttribute('id', 'buttonMenu')
  buttonMenu.setAttribute('data-bs-toggle',"offcanvas")
  buttonMenu.setAttribute('data-bs-target', '#staticBackdrop')
  buttonMenu.setAttribute('aria-controls', 'staticBackdrop')
  const imgMenuBurguer = document.createElement('img')
  imgMenuBurguer.src = './image/png/menu-burguer.png'

  const logo = document.createElement('div')
  logo.classList.add('logoPrincipal')
  const buttonHome = document.createElement('button')
  buttonHome.classList.add('buttonHome')
  buttonHome.setAttribute('id', 'buttonHome')
  const imgLogo = document.createElement('img')
  imgLogo.src = './image/png/acmeLogo.png'

  const campoPesquisa = document.createElement('div')
  campoPesquisa.classList.add('campoPesquisa')
  campoPesquisa.setAttribute('id', 'campoPesquisa')
  const inputPesquisa = document.createElement('input')
  inputPesquisa.classList.add('inputPesquisa')
  inputPesquisa.setAttribute('id', 'inputPesquisa')

  const iconPesquisa = document.createElement('div')
  iconPesquisa.classList.add('iconPesquisa')
  iconPesquisa.setAttribute('id', 'iconPesquisa')
  const buttonPesquisa = document.createElement('button')
  buttonPesquisa.classList.add('buttonPesquisa')
  buttonPesquisa.setAttribute('id', 'buttonPesquisa')
  buttonPesquisa.onclick = () => {
    fazerPesquisa(inputPesquisa.value)
  }

  const imgLupa = document.createElement('img')
  imgLupa.src = './image/png/lupa.png'


  const iconPerfil = document.createElement('div')
  iconPerfil.classList.add('iconPerfil')
  const buttonPerfil = document.createElement('button')
  buttonPerfil.classList.add('buttonPerfil')
  buttonPerfil.setAttribute('id','buttonPerfil')
  buttonPerfil.setAttribute('data-bs-toggle','modal')
  buttonPerfil.setAttribute('data-bs-target','#exampleModalLogin')
  const imgIconPerfil = document.createElement('img')
  imgIconPerfil.src = './image/png/botão-perfil.png'

  barraPesquisa.append(menuBurguer, logo, campoPesquisa, iconPerfil)

  menuBurguer.appendChild(buttonMenu)
  buttonMenu.appendChild(imgMenuBurguer)

  logo.appendChild(buttonHome)
  buttonHome.appendChild(imgLogo)

  campoPesquisa.append(inputPesquisa, iconPesquisa)

  iconPesquisa.appendChild(buttonPesquisa)
  buttonPesquisa.appendChild(imgLupa)

  iconPerfil.appendChild(buttonPerfil)
  buttonPerfil.appendChild(imgIconPerfil)

  return barraPesquisa
}

async function fazerPesquisa(pesquisa) {
  const cardsHolder = document.getElementById('cardsHolder')
  const filmeByName = await getFilmeByName(pesquisa)

  console.log(pesquisa)

  filmeByName.forEach(filme => {
    const card = criarCard(filme)
    cardsHolder.appendChild(card)
    console.table(filme)
  });
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
  if (
    filme.data_relancamento != undefined &&
    filme.data_relancamento != '' &&
    filme.data_relancamento != null
) {
    modal.innerHTML = `
        <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <div class="botao-sair">
              <div class="sair">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            </div>
            <div class="cardPaginaFilmes">
            <div class="campoImagemClassificacao">
            <div class="cardPaginaIMG">
              <div class="imgPagina" style="background-image: url('${filme.foto_capa}');">
                <div class="classificacao">
              <img src="${filme.imagem}" alt="">
            </div>
              <div class="infoFilmePagina">
                <h2 class="tituloPagina">${filme.nome}</h2>
                <div class="legendaComSinopsePagina">
                  <h1 class="legendaSinopsePagina">Sinopse:</h1>
                  <textarea class="sinopsePagina" id="sinopsePagina" cols="80" rows="6">${filme.sinopse}</textarea>
                </div>
                <div class="dtLanca_RelancaPagina">
                <div class="legendaComDtRelancaPagina">
                  <h1 class="legendadtLancaPagina">Data Lançamento:</h1>
                  <data class="dtLancaPagina">${tratarData(filme.data_lancamento)}</data>
                </div>
                <div class="legendaComDtRelancaPagina">
                  <h1 class="legendadtRelancaPagina">Data Relançamento:</h1>
                  <data class="dtRelancaPagina">${tratarData(filme.data_relancamento)}</data>
                </div>
                </div>
                <div class="legendaComDuracao">
                  <h1 class="legendaDuracao">Duração:</h1>
                  <time class="duracaoPagina">${tratarDuracao(filme.duracao)}</time>
                </div>
                <div class="valorECompra">
                  <div class="legendaComValorUnitario">
                    <h1 class="legendaValor">Valor Unitário:</h1>
                    <h1 class="valorUnitarioPagina">${filme.valor_unitario}</h1>
                  </div>
                  <button class="btn btn-primary btn-lg btn_comprar">Comprar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    `
  }
  if (
    filme.data_relancamento == undefined ||
    filme.data_relancamento == '' ||
    filme.data_relancamento == null
) {
    modal.innerHTML = `
    <div class="modal-dialog modal-xl modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
        <div class="botao-sair">
          <div class="sair">
            <button type="button" class="btn-close btn-sair" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        </div>
        <div class="cardPaginaFilmes">
          <div class="campoImagemClassificacao">
            <div class="cardPaginaIMG">
              <div class="imgPagina" style="background-image: url('${filme.foto_capa}');">
                <div class="classificacao">
              <img src="${filme.imagem}" alt="">
            </div>
            <div class="avaliacoes">
              <h1 class="numEstrelas"></h1>
              <img class="starIMG">
            </div>
              </div>
            </div>
            
          </div>
          <div class="infoFilmePagina">
            <h2 class="tituloPagina">${filme.nome}</h2>
            <div class="legendaComSinopsePagina">
              <h1 class="legendaSinopsePagina">Sinopse:</h1>
              <textarea class="sinopsePagina" id="sinopsePagina" cols="80" rows="6">${filme.sinopse}</textarea>
            </div>
            <div class="holderDtLancaPagina">
            <div class="legendaComDtLancaPagina2">
              <h1 class="legendadtLancaPagina2">Data Lançamento:</h1>
              <data class="dtLancaPagina2">${tratarData(filme.data_lancamento)}</data>
            </div>
            </div>
            <div class="legendaComDuracao">
              <h1 class="legendaDuracao">Duração:</h1>
              <time class="duracaoPagina">${tratarDuracao(filme.duracao)}</time>
            </div>
            <div class="valorECompra">
              <div class="legendaComValorUnitario">
                <h1 class="legendaValor">Valor Unitário:</h1>
                <h1 class="valorUnitarioPagina">${filme.valor_unitario}</h1>
              </div>
              <button class="btn btn-primary btn-lg btn_comprar">Comprar</button>
            </div>
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
  });
}

window.onload = async () => {

  const filme = await getFilmes()
  criarBarraPesquisa()
  criarCard(filme)
  preencherContainer()
}