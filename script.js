function mostrarDetalhes(element) {
  const title = element.querySelector(".overlay p").innerText;
  const imageSrc = element.querySelector("img").src;
  const description = element.dataset.description;
  const videoSrc = element.dataset.video;

  const modal = document.getElementById("modal");
  modal.querySelector("h2").innerText = title;
  modal.querySelector("p").innerText = description;
  modal.querySelector("video source").src = videoSrc;
  modal.querySelector("video").load();

  modal.style.display = "block";
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

const data = [
  {
    title: "APAE - Bem Estar Gestão",
    image: "./imgs/APAE.png",
    description:
      "Sistema de gestão de nutricionismo e controle de compras e despesas para a APAE de Presidente Prudente.",
    video: "./videos/APAE.mp4",
  },
  {
    title: "Jogo Volei 3D",
    image: "./imgs/Volei3D.png",
    description: "Jogo de volei 3D feito com Unity, com multiplayer online.",
    video: "",
  },
  {
    title: "Sorteador/Twitch",
    image: "./imgs/Sorteador.png",
    description:
      "Site para sorteio de nomes, feito para ser usado em lives da Twitch. Com controle de viewers VIPs",
    video: "",
  },
  {
    title: "Ensino Estrutura De Dados",
    image: "./imgs/EnsinoEstruturaDados.png",
    description:
      "Site para ensino de estrutura de dados, com aulas, exercícios e correções automáticas. Como também gamificação com trilhas e customização de personageem",
    video: "./videos/Ensino.mp4",
  },
  {
    title: "Campo Minado",
    image: "./imgs/Campo-Minado.png",
    description: "Jogo de campo minado feito com React para aprender a usa-la.",
    video: "Campo-Minado.mp4",
  },
];

const container = document.getElementById("projetos-container");
data.forEach((project) => {
  const projectElement = document.createElement("div");
  projectElement.className = "projeto";
  projectElement.dataset.description = project.description;
  projectElement.dataset.video = project.video;
  projectElement.onclick = () => mostrarDetalhes(projectElement);
  projectElement.innerHTML = `
        <img src="${project.image}" alt="${project.title}" />
        <div class="overlay">
          <div class="overlay-border"></div>
          <p>${project.title}</p>
        </div>
        <div class="gradiant-overlay"></div>
      `;
  container.appendChild(projectElement);
});
