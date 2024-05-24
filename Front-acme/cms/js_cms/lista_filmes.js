import { getClassificacao, getClassificacoes } from "../../js/classificacoes.js"
import { getFilmes, getFilme, postFilme, deletefilme, putFilme } from "../../js/filmes.js"
import { tratarDataSimples, tratarDuracaoSimples, tratarValorUnitario } from "../../js/tratamento.js"
import { tratarData, tratarDuracao } from "./tratamento_cms.js"

export function criarBarraPesquisa() {
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

function criarItensLista(filme) {
  const linha_lista_filmes = document.createElement('ul')
  linha_lista_filmes.classList.add("list-group", "list-group-horizontal", "linha_lista_filmes", "text-center")

  const idFilme = document.createElement('li')
  idFilme.classList.add("list-group-item", "idFilme", "col-1")
  idFilme.textContent = filme.id

  const nomeFilme = document.createElement('li')
  nomeFilme.classList.add("list-group-item", "nomeFilme", "col-3")
  nomeFilme.textContent = filme.nome

  const duracaoFilme = document.createElement('li')
  duracaoFilme.classList.add("list-group-item", "duracaoFilme", "col-2")
  duracaoFilme.textContent = tratarDuracao(filme.duracao)

  const dataLancamentoFilme = document.createElement('li')
  dataLancamentoFilme.classList.add("list-group-item", "dataLancamentoFilme", "col-2")
  dataLancamentoFilme.textContent = tratarData(filme.data_lancamento)

  const dataRELancamentoFilme = document.createElement('li')
  dataRELancamentoFilme.classList.add("list-group-item", "dataRELancamentoFilme", "col-2")

  if (
    filme.data_relancamento != undefined &&
    filme.data_relancamento != '' &&
    filme.data_relancamento != null
  ) {
    dataRELancamentoFilme.textContent = tratarData(filme.data_relancamento)
  }


  const acoes = document.createElement('li')
  acoes.classList.add("list-group-item", "acoes", "col-2")
  acoes.style.display = "flex"
  acoes.style.flexDirection = "row"
  acoes.style.alignItems = "center"
  acoes.style.justifyContent = "space-evenly"

  const btnUserView = document.createElement('button')
  btnUserView.classList.add("btnUserView", "btn", "btn-success")
  btnUserView.style.height = "48px"
  btnUserView.style.width = "48px"
  btnUserView.style.display = "flex"
  btnUserView.style.alignItems = "center"
  btnUserView.style.justifyContent = "center"
  btnUserView.addEventListener('click', (event) => {
    event.stopPropagation()
    const modal = criarModalUserView(filme)
    document.body.appendChild(modal)
    var myModal = new bootstrap.Modal(modal)
    myModal.show()

    const btnSair = document.getElementById('btn_close')
    btnSair.addEventListener('click', () => {
      const modalUserView = document.getElementById("staticBackdrop")
      modalUserView.parentNode.removeChild(modalUserView)
    })
  })

  const divUserViewIMG = document.createElement('div')
  divUserViewIMG.style.backgroundImage = 'url(../../image/png/user_view_branco.png)'
  divUserViewIMG.style.backgroundSize = `contain`
  divUserViewIMG.style.backgroundRepeat = "no-repeat"
  divUserViewIMG.style.height = "10px"
  divUserViewIMG.style.width = "22px"

  const btnEditar = document.createElement('button')
  btnEditar.classList.add("btnEditar", "btn", "btn-primary")
  btnEditar.style.height = "48px"
  btnEditar.style.width = "48px"
  btnEditar.style.display = "flex"
  btnEditar.style.alignItems = "center"
  btnEditar.style.justifyContent = "center"

  btnEditar.addEventListener('click', (event) => {
    event.stopPropagation()
    const modal = criarModalEdicao(filme)
    document.body.appendChild(modal)
    var myModal = new bootstrap.Modal(modal)
    myModal.show()
    preencherSelectClassificacoes("classificacoes")

    const btnSalvar = document.getElementById('btn_Salvar')
    btnSalvar.addEventListener('click', async () => {

      const selectClassificacoes = document.getElementById('classificacoes')
      const option = selectClassificacoes.options[selectClassificacoes.selectedIndex].text

      const id = filme.id
      const nome = document.getElementById('tituloPaginaEdicao').value
      const sinopse = document.getElementById('sinopsePaginaEdicao').value
      const duracao = document.getElementById('duracaoPaginaEdicao').value
      const data_lancamento = document.getElementById('dtLancaPaginaEdicao').value
      const data_relancamento = document.getElementById('dtRelancaPaginaEdicao').value
      const foto_capa = document.getElementById('imgCapaFilmeEdicao').value
      const valor_unitario = document.getElementById('valorUnitarioPaginaEdicao').value
      const id_classificacao = option.split(" -")[0];

      const novoFilme = {
        id,
        nome,
        sinopse,
        duracao,
        data_lancamento,
        data_relancamento,
        foto_capa,
        valor_unitario,
        id_classificacao
      }

      const filmeAtualizado = await putFilme(novoFilme)

    })

    const btnSair = document.getElementById('btn-sair')
    btnSair.addEventListener('click', () => {
      const modalEdicao = document.getElementById("staticBackdrop");
      modalEdicao.parentNode.removeChild(modalEdicao);
    })
  })

  const divEditarIMG = document.createElement('div')
  divEditarIMG.style.backgroundImage = `url("../../image/png/editar.png")`
  divEditarIMG.style.backgroundSize = `contain`
  divEditarIMG.style.backgroundRepeat = "no-repeat"
  divEditarIMG.style.height = "22px"
  divEditarIMG.style.width = "22px"


  const btnApagar = document.createElement('button')
  btnApagar.classList.add("btnApagar", "btn", "btn-danger")
  btnApagar.style.height = "48px"
  btnApagar.style.width = "48px"
  btnApagar.style.display = "flex"
  btnApagar.style.alignItems = "center"
  btnApagar.style.justifyContent = "center"
  btnApagar.onclick = () => {
    var response = confirm(`Você tem certeza que deseja\nexcluir o filme ${filme.nome}?`)
    if (response == true) {
      deletefilme(idFilme.textContent)
    }
  }

  const divApagarIMG = document.createElement('div')
  divApagarIMG.style.backgroundImage = 'url(../../image/png/lixeira_branca.png)'
  divApagarIMG.style.backgroundSize = `contain`
  divApagarIMG.style.backgroundRepeat = "no-repeat"
  divApagarIMG.style.height = "22px"
  divApagarIMG.style.width = "22px"

  linha_lista_filmes.append(idFilme, nomeFilme, duracaoFilme, dataLancamentoFilme, dataRELancamentoFilme, acoes)
  acoes.append(btnUserView, btnEditar, btnApagar)
  btnUserView.appendChild(divUserViewIMG)
  btnEditar.appendChild(divEditarIMG)
  btnApagar.appendChild(divApagarIMG)

  return linha_lista_filmes
}

export async function preencherLista() {
  const lista_filmes = document.getElementById("lista_filmes")
  const filmes = await getFilmes()


  filmes.forEach(filme => {
    const linha_lista = criarItensLista(filme)
    lista_filmes.appendChild(linha_lista)

  });
}

function criarOpcoesClassificacoes(classificacoes) {
  const optionClassificacao = document.createElement('option')
  optionClassificacao.classList.add("optionClassificacao", `option${classificacoes.sigla}`)
  optionClassificacao.textContent = `${classificacoes.id} - ${classificacoes.sigla}, ${classificacoes.classificacao}`

  return optionClassificacao
}

const preencherSelectClassificacoes = async function (idDesejado) {
  const selectClassificacoes = document.getElementById(idDesejado)
  const classificacoes = await getClassificacoes()

  classificacoes.forEach(classificacao => {
    const optionsClassificacao = criarOpcoesClassificacoes(classificacao)
    selectClassificacoes.appendChild(optionsClassificacao)

  })
}

function criarModalUserView(filme) {

  const modal = document.createElement('div')
  modal.classList.add('modal', 'fade')
  modal.setAttribute('tabindex', '-1')
  modal.setAttribute('aria-labelledby', 'staticBackdropLabel')
  modal.setAttribute('aria-hidden', 'true')
  modal.setAttribute('data-bs-backdrop', 'static')
  modal.setAttribute('data-bs-keyboard', 'false')
  modal.setAttribute('id', 'staticBackdrop')


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
                    <button type="button" class="btn-close btn-sair" id="btn_close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                </div>
                <div class="cardPaginaUserViewFilmes">
                <div class="campoImagemClassificacaoUserView">
                <div class="cardPaginaUserViewIMG">
                  <div class="imgPaginaUserView" style="background-image: url('${filme.foto_capa}');">
                    <div class="classificacaoUserView">
                  <img src="${filme.imagem}" alt="">
                </div>
                  </div>
                </div>
                </div>
    
                  <div class="infoFilmePaginaUserView">
                    <h2 class="tituloPaginaUserView">${filme.nome}</h2>
                    <div class="legendaComSinopsePaginaUserView">
                      <h1 class="legendaSinopsePaginaUserView">Sinopse:</h1>
                      <textarea class="sinopsePaginaUserView" id="sinopsePaginaUserView" cols="80" rows="6">${filme.sinopse}</textarea>
                    </div>
                    <div class="dtLanca_RelancaPaginaUserView">
                    <div class="legendaComDtRelancaPaginaUserView">
                      <h1 class="legendadtLancaPaginaUserView">Data Lançamento:</h1>
                      <data class="dtLancaPaginaUserView">${tratarData(filme.data_lancamento)}</data>
                    </div>
                    <div class="legendaComDtRelancaPaginaUserView">
                      <h1 class="legendadtRelancaPaginaUserView">Data Relançamento:</h1>
                      <data class="dtRelancaPaginaUserView">${tratarData(filme.data_relancamento)}</data>
                    </div>
                    </div>
                    <div class="legendaComDuracaoUserView">
                      <h1 class="legendaDuracaoUserView">Duração:</h1>
                      <time class="duracaoPaginaUserView">${tratarDuracao(filme.duracao)}</time>
                    </div>
                    <div class="valorECompraUserView">
                      <div class="legendaComValorUnitario">
                        <h1 class="legendaValorUserView">Valor Unitário:</h1>
                        <h1 class="valorUnitarioPaginaUserView">${tratarValorUnitario(filme.valor_unitario)}</h1>
                      </div>
                      <button class="btn btn-primary btn-lg btn_comprarUserView">Comprar</button>
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
                <button type="button" class="btn-close btn-sair" id="btn_close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            </div>
            <div class="cardPaginaUserViewFilmes">
              <div class="campoImagemClassificacaoUserView">
                <div class="cardPaginaUserViewIMG">
                  <div class="imgPaginaUserView" style="background-image: url('${filme.foto_capa}');">
                    <div class="classificacaoUserView">
                        <img src="${filme.imagem}" alt="">
                    </div>
                  </div>
                </div>
                
              </div>
              <div class="infoFilmePaginaUserView">
                <h2 class="tituloPaginaUserView">${filme.nome}</h2>
                <div class="legendaComSinopsePaginaUserView">
                  <h1 class="legendaSinopsePaginaUserView">Sinopse:</h1>
                  <textarea class="sinopsePaginaUserView" id="sinopsePaginaUserView" cols="80" rows="6">${filme.sinopse}</textarea>
                </div>
                <div class="holderDtLancaPaginaUserView">
                <div class="legendaComDtLancaPaginaUserView2">
                  <h1 class="legendadtLancaPaginaUserView2">Data Lançamento:</h1>
                  <data class="dtLancaPaginaUserView2">${tratarData(filme.data_lancamento)}</data>
                </div>
                </div>
                <div class="legendaComDuracaoUserView">
                  <h1 class="legendaDuracaoUserView">Duração:</h1>
                  <time class="duracaoPaginaUserView">${tratarDuracao(filme.duracao)}</time>
                </div>
                <div class="valorECompraUserView">
                  <div class="legendaComValorUnitarioUserView">
                    <h1 class="legendaValorUserView">Valor Unitário:</h1>
                    <h1 class="valorUnitarioPaginaUserView">${tratarValorUnitario(filme.valor_unitario)}</h1>
                  </div>
                  <button class="btn btn-primary btn-lg btn_comprarUserView">Comprar</button>
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

function criarModalEdicao(filme) {

  const modal = document.createElement('div')
  modal.classList.add('modal', 'fade')
  modal.setAttribute('tabindex', '-1')
  modal.setAttribute('aria-labelledby', 'staticBackdropLabel')
  modal.setAttribute('aria-hidden', 'true')
  modal.setAttribute('data-bs-backdrop', 'static')
  modal.setAttribute('data-bs-keyboard', 'false')
  modal.setAttribute('id', 'staticBackdrop')


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
                        <button type="button" class="btn-close btn-sair" id="btn-sair" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                </div>
                <div class="cardPaginaEdicaoFilmes">
                    <div class="campoImagemClassificacaoEdicao">
                        <div class="cardPaginaEdicaoIMG">
                            <div class="imgPaginaEdicao">
                                <div class="classificacaoEdicao">
                                    <h2 class="legendaClassificacaoFilmeEdicao">Escolha a nova classificação do filme:</h2>
                                    <select name="classificacoes" id="classificacoes" class="classificacoes">
                                      <option class="optionClassificacao optionPadrao">Selecione a categoria aqui!</option>
                                    </select>
                                </div>

                                <div class="legendaComInputLinkCapaFilmeEdicao">
                                    <h2 class="legendaCapaFilmeEdicao">Digite o link da nova capa do filme:</h2>
                                    <input type="url" class="imgCapaFilmeEdicao" id="imgCapaFilmeEdicao" value="${filme.foto_capa}">
                                </div>
                            </div>
                        </div>
    
                    </div>
                    <div class="infoFilmePaginaEdicao">
                        <input type="text" class="tituloPaginaEdicao" id="tituloPaginaEdicao" value="${filme.nome}">
                        <div class="legendaComSinopsePaginaEdicao">
                            <h1 class="legendaSinopsePaginaEdicao">Sinopse:</h1>
                            <textarea class="sinopsePaginaEdicao" id="sinopsePaginaEdicao" cols="80"
                                rows="6">${filme.sinopse}</textarea>
                        </div>
                        <div class="dtLanca_RelancaPaginaEdicao">
                            <div class="legendaComDtLancaPaginaEdicao">
                                <h1 class="legendadtLancaPaginaEdicao">Data Lançamento:</h1>
                                <input type="date" id="dtLancaPaginaEdicao" class="dtLancaPaginaEdicao"
                                    value="${tratarDataSimples(filme.data_lancamento)}">
    
                            </div>
                            <div class="legendaComDtRelancaPaginaEdicao">
                                <h1 class="legendadtRelancaPaginaEdicao">Data Relançamento:</h1>
                                <input type="date" id="dtRelancaPaginaEdicao" class="dtRelancaPaginaEdicao"
                                    value="${tratarDataSimples(filme.data_relancamento)}">
    
                            </div>
                        </div>
                        <div class="legendaComDuracaoEdicao">
                            <h1 class="legendaDuracaoEdicao">Duração:</h1>
                            <input type="time" id="duracaoPaginaEdicao" class="duracaoPaginaEdicao"
                                value="${tratarDuracaoSimples(filme.duracao)}">
                        </div>
                        <div class="valorECompraEdicao">
                            <div class="legendaComValorUnitarioEdicao">
                                <h1 class="legendaValorEdicao">Valor Unitário:</h1>
                                <input type="number" id="valorUnitarioPaginaEdicao" class="valorUnitarioPaginaEdicao" value="${tratarValorUnitario(filme.valor_unitario)}">
                            </div>
                            <button class="btn btn-primary btn-lg btn_Salvar" id="btn_Salvar">Salvar Alterações</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
     `
    return modal
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
                        <button type="button" class="btn-close btn-sair" id="btn-sair" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                </div>
                <div class="cardPaginaEdicaoFilmes">
                    <div class="campoImagemClassificacaoEdicao">
                        <div class="cardPaginaEdicaoIMG">
                            <div class="imgPaginaEdicao">
                                <div class="classificacaoEdicao">
                                    <h2 class="legendaClassificacaoFilmeEdicao">Escolha a nova classificação do filme:</h2>
                                    <select name="classificacoes" id="classificacoes" class="classificacoes">
                                      <option class="optionClassificacao optionPadrao">Selecione a categoria aqui!</option>
                                    </select>
                                </div>

                                <div class="legendaComInputLinkCapaFilmeEdicao">
                                    <h2 class="legendaCapaFilmeEdicao">Digite o link da nova capa do filme:</h2>
                                    <input type="url" class="imgCapaFilmeEdicao" id="imgCapaFilmeEdicao" value="${filme.foto_capa}">
                                </div>
                            </div>
                        </div>
    
                    </div>
                    <div class="infoFilmePaginaEdicao">
                        <input type="text" class="tituloPaginaEdicao" id="tituloPaginaEdicao" value="${filme.nome}">
                        <div class="legendaComSinopsePaginaEdicao">
                            <h1 class="legendaSinopsePaginaEdicao">Sinopse:</h1>
                            <textarea class="sinopsePaginaEdicao" id="sinopsePaginaEdicao" cols="80"
                                rows="6">${filme.sinopse}</textarea>
                        </div>
                        <div class="dtLanca_RelancaPaginaEdicao">
                            <div class="legendaComDtLancaPaginaEdicao">
                                <h1 class="legendadtLancaPaginaEdicao">Data Lançamento:</h1>
                                <input type="date" id="dtLancaPaginaEdicao" class="dtLancaPaginaEdicao"
                                    value="${tratarDataSimples(filme.data_lancamento)}">
    
                            </div>
                            <div class="legendaComDtRelancaPaginaEdicao">
                                <h1 class="legendadtRelancaPaginaEdicao">Data Relançamento:</h1>
                                <input type="date" id="dtRelancaPaginaEdicao" class="dtRelancaPaginaEdicao"
                                    value="">
    
                            </div>
                        </div>
                        <div class="legendaComDuracaoEdicao">
                            <h1 class="legendaDuracaoEdicao">Duração:</h1>
                            <input type="time" id="duracaoPaginaEdicao" class="duracaoPaginaEdicao"
                                value="${tratarDuracaoSimples(filme.duracao)}">
                        </div>
                        <div class="valorECompraEdicao">
                            <div class="legendaComValorUnitarioEdicao">
                                <h1 class="legendaValorEdicao">Valor Unitário:</h1>
                                <input type="number" id="valorUnitarioPaginaEdicao" class="valorUnitarioPaginaEdicao" value="${tratarValorUnitario(filme.valor_unitario)}">
                            </div>
                            <button class="btn btn-primary btn-lg btn_Salvar" id="btn_Salvar">Salvar Alterações</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
     `
    return modal
  }
}

function criaModalPostagemFilme() {


  const modal = document.createElement('div')
  modal.classList.add('modal', 'fade')
  modal.setAttribute('tabindex', '-1')
  modal.setAttribute('aria-labelledby', 'staticBackdropLabel')
  modal.setAttribute('aria-hidden', 'true')
  modal.setAttribute('data-bs-backdrop', 'static')
  modal.setAttribute('data-bs-keyboard', 'false')
  modal.setAttribute('id', 'staticBackdrop1')

  const modal_dialog = document.createElement('div')
  modal_dialog.classList.add('modal-dialog', 'modal-xl', 'modal-dialog-centered')

  const modal_content = document.createElement('div')
  modal_content.classList.add('modal-content')

  const modal_body = document.createElement('div')
  modal_body.classList.add('modal-body')

  const holderBotaoSairCriacao = document.createElement('div')
  holderBotaoSairCriacao.classList.add('holderBotaoSairCriacao')

  const sairCriacao = document.createElement('div')
  sairCriacao.classList.add('sairCriacao')

  const btn_sairCriacao = document.createElement('button')
  btn_sairCriacao.classList.add("btn-close", "btn-sair")
  btn_sairCriacao.setAttribute('id', 'btn-sair')
  btn_sairCriacao.setAttribute('data-bs-dismiss', 'modal')
  btn_sairCriacao.setAttribute('aria-label', 'Close')
  btn_sairCriacao.type = "button"

  btn_sairCriacao.addEventListener('click', () => {
    const modalCriacao = document.getElementById("staticBackdrop")
    modalCriacao.parentNode.removeChild(modalCriacao)
  })

  const paginaCriacaoFilmes = document.createElement('div')
  paginaCriacaoFilmes.classList.add('paginaCriacaoFilmes')

  const campoImagemClassificacaoCriacao = document.createElement('div')
  campoImagemClassificacaoCriacao.classList.add('campoImagemClassificacaoCriacao')

  const cardPaginaCriacaoIMG = document.createElement('div')
  cardPaginaCriacaoIMG.classList.add('cardPaginaCriacaoIMG')

  const imgPaginaCriacao = document.createElement('div')
  imgPaginaCriacao.classList.add('imgPaginaCriacao')

  const classificacaoCriacao = document.createElement('div')
  classificacaoCriacao.classList.add('classificacaoCriacao')

  const legendaClassificacaoFilmeCriacao = document.createElement('h2')
  legendaClassificacaoFilmeCriacao.classList.add('legendaClassificacaoFilmeCriacao')
  legendaClassificacaoFilmeCriacao.textContent = "Escolha a classificação do novo filme:"

  const classificacoesCriacao = document.createElement('select')
  classificacoesCriacao.classList.add('classificacoesCriacao')
  classificacoesCriacao.setAttribute('id', 'classificacoesCriacao')

  const optionClassificacao = document.createElement('option')
  optionClassificacao.classList.add('optionClassificacao', 'optionPadrao')
  optionClassificacao.textContent = "Selecione a classificação aqui!"

  const legendaComInputLinkCapaFilmeCriacao = document.createElement('div')
  legendaComInputLinkCapaFilmeCriacao.classList.add('legendaComInputLinkCapaFilmeCriacao')

  const legendaCapaFilmeCriacao = document.createElement('h2')
  legendaCapaFilmeCriacao.classList.add('legendaCapaFilmeCriacao')
  legendaCapaFilmeCriacao.textContent = "Digite o link da capa do novo filme:"

  const imgCapaFilmeCriacao = document.createElement('input')
  imgCapaFilmeCriacao.classList.add('imgCapaFilmeCriacao')
  imgCapaFilmeCriacao.setAttribute('id', 'imgCapaFilmeCriacao')
  imgCapaFilmeCriacao.type = "url"


  const infoFilmePaginaCriacao = document.createElement('div')
  infoFilmePaginaCriacao.classList.add('infoFilmePaginaCriacao')

  const tituloPaginaCriacao = document.createElement('input')
  tituloPaginaCriacao.classList.add('tituloPaginaCriacao')
  tituloPaginaCriacao.setAttribute('id', 'tituloPaginaCriacao')
  tituloPaginaCriacao.value = "Insira o nome do novo filme aqui!"
  tituloPaginaCriacao.type = 'text'

  const legendaComSinopsePaginaCriacao = document.createElement('div')
  legendaComSinopsePaginaCriacao.classList.add('legendaComSinopsePaginaCriacao')

  const legendaSinopsePaginaCriacao = document.createElement('h1')
  legendaSinopsePaginaCriacao.classList.add('legendaSinopsePaginaCriacao')
  legendaSinopsePaginaCriacao.textContent = "Sinopse:"

  const sinopsePaginaCriacao = document.createElement('textarea')
  sinopsePaginaCriacao.classList.add('sinopsePaginaCriacao')
  sinopsePaginaCriacao.setAttribute('id', 'sinopsePaginaCriacao')
  sinopsePaginaCriacao.setAttribute('cols', '80')
  sinopsePaginaCriacao.setAttribute('rows', '6')


  const dtLanca_RelancaPaginaCriacao = document.createElement('div')
  dtLanca_RelancaPaginaCriacao.classList.add('dtLanca_RelancaPaginaCriacao')

  const legendaComDtLancaPaginaCriacao = document.createElement('div')
  legendaComDtLancaPaginaCriacao.classList.add('legendaComDtLancaPaginaCriacao')

  const legendadtLancaPaginaCriacao = document.createElement('h1')
  legendadtLancaPaginaCriacao.classList.add('legendadtLancaPaginaCriacao')
  legendadtLancaPaginaCriacao.textContent = 'Data Lançamento:'

  const dtLancaPaginaCriacao = document.createElement('input')
  dtLancaPaginaCriacao.classList.add('dtLancaPaginaCriacao')
  dtLancaPaginaCriacao.setAttribute('id', 'dtLancaPaginaCriacao')
  dtLancaPaginaCriacao.type('date')


  const legendaComDtRelancaPaginaCriacao = document.createElement('div')
  legendaComDtRelancaPaginaCriacao.classList.add('legendaComDtRelancaPaginaCriacao')

  const legendadtRelancaPaginaCriacao = document.createElement('h1')
  legendadtRelancaPaginaCriacao.classList.add('legendadtRelancaPaginaCriacao')
  legendadtRelancaPaginaCriacao.textContent = 'Data Relançamento:'

  const dtRelancaPaginaCriacao = document.createElement('input')
  dtRelancaPaginaCriacao.classList.add('dtRelancaPaginaCriacao')
  dtRelancaPaginaCriacao.setAttribute('id', 'dtRelancaPaginaCriacao')
  dtRelancaPaginaCriacao.type('date')

  const legendaComDuracaoCriacao = document.createElement('div')
  legendaComDuracaoCriacao.classList.add('legendaComDuracaoCriacao')

  const legendaDuracaoCriacao = document.createElement('h1')
  legendaDuracaoCriacao.classList.add('legendaDuracaoCriacao')
  legendaDuracaoCriacao.textContent = 'Duração:'

  const duracaoPaginaCriacao = document.createElement('input')
  duracaoPaginaCriacao.classList.add('duracaoPaginaCriacao')
  duracaoPaginaCriacao.setAttribute('id', 'duracaoPaginaCriacao')
  duracaoPaginaCriacao.type('time')

  const valorECompraCriacao = document.createElement('div')
  valorECompraCriacao.classList.add('valorECompraCriacao')

  const legendaComValorUnitarioCriacao = document.createElement('div')
  legendaComValorUnitarioCriacao.classList.add('legendaComValorUnitarioCriacao')

  const legendaValorCriacao = document.createElement('h1')
  legendaValorCriacao.classList.add('legendaValorCriacao')
  legendaValorCriacao.textContent = 'Valor Unitário:'

  const valorUnitarioPaginaCriacao = document.createElement('input')
  valorUnitarioPaginaCriacao.classList.add('valorUnitarioPaginaCriacao')
  valorUnitarioPaginaCriacao.setAttribute('id', 'valorUnitarioPaginaCriacao')
  valorUnitarioPaginaCriacao.type('number')

  const btn_Criar_Filme = document.createElement('button')
  btn_Criar_Filme.classList.add("btn", "btn-primary", "btn-lg", "btn_Criar_Filme")
  btn_Criar_Filme.setAttribute('id', 'btn_Criar_Filme')
  btn_Criar_Filme.type = "button"
  btn_Criar_Filme.textContent = 'Criar Filme!'


}

window.onload = async () => {

  const filme = await getFilmes()
  const classificacoes = await getClassificacoes()

  criarBarraPesquisa()
  preencherLista()
  console.table(filme);
  console.table(classificacoes);
}