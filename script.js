function mostrarDetalhes(element) {
  document.getElementById("modal").style.display = "block";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

function abrirContato() {
  window.location.href = "#contato";
}

window.onclick = function (event) {
  let modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
