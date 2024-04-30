document.addEventListener("DOMContentLoaded", function () {
      
    const modalBotoes = document.querySelectorAll(".cardFilmes")
    modalBotoes.forEach(modalBotao => {
      modalBotao.addEventListener('click', function () {
        var myModal = new bootstrap.Modal(document.getElementById('modalExemplo'))
        myModal.show()
      })
    })
  })