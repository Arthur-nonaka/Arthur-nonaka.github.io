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

particlesJS(
  "particles-js",
  {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ["#ffffff", "#000"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: false,
      },
      size: {
        value: 3,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: {
          value: ["#ffffff", "#000", "#2223aa"],
        },
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
      },
    },
    retina_detect: true,
  },
  function () {
    console.log("particles.js loaded - callback");
  }
);
