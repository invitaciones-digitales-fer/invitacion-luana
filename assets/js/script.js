/* ====== Countdown ====== */
const clock = document.getElementById('clock');
const eventDate = new Date('August 9, 2025 21:30:00').getTime();
const pad = n => n.toString().padStart(2, '0');

function updateClock() {
  const gap = eventDate - Date.now();
  const d = Math.floor(gap / 864e5);
  const h = Math.floor(gap / 36e5) % 24;
  const m = Math.floor(gap / 6e4) % 60;
  const s = Math.floor(gap / 1e3) % 60;

  clock.innerHTML = `
    <div><strong>${pad(d)}</strong><span>días</span></div>
    <div><strong>${pad(h)}</strong><span>horas</span></div>
    <div><strong>${pad(m)}</strong><span>min</span></div>
    <div><strong>${pad(s)}</strong><span>seg</span></div>`;
}

setInterval(updateClock, 1000); updateClock();

/* ====== Modal ====== */
const btnGift = document.getElementById('btnGift');
const modal = document.getElementById('modalRegalo');
const close = modal.querySelector('.close');
btnGift.onclick = () => modal.style.display = 'flex';
close.onclick = () => modal.style.display = 'none';
window.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };





// ======= Mensaje de bienvenida + Reproductor de música =========

let music; // declaramos pero no creamos aún
const enterBtn = document.getElementById('enter-btn');
const overlay = document.getElementById('welcome-overlay');
const toggle = document.getElementById('music-toggle');
let isPlaying = false;

enterBtn.addEventListener('click', () => {
  overlay.classList.add('fade-out');
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 1000);

  // CREAMOS el audio cuando se entra
  music = new Audio('assets/musica/Inside Out-01 Bundle of Joy [Main Theme]-Soundtrack⧸OST by Michael Giacchino.mp3');
  music.volume = 0.2;
  music.loop = true;
  music.play().then(() => {
    isPlaying = true;
    toggle.textContent = '⏸️';
  }).catch(err => console.log('Autoplay bloqueado:', err));
});

toggle.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    toggle.textContent = '🔊🎵';
  } else {
    music.play();
    toggle.textContent = '⏸️';
  }
  isPlaying = !isPlaying;
});


toggle.classList.add('playing');
toggle.classList.remove('playing');

// ===== NUEVA MÚSICA MÁGICA Y SU BOTÓN =====
const magicMusic = document.getElementById('magic-music'); // Referencia al nuevo audio
const magicMusicToggle = document.getElementById('magic-music-toggle'); // Referencia al nuevo botón
let isMagicMusicPlaying = false; // Estado de la música mágica

// Asegúrate de que magicMusic exista y no esté en conflicto
if (magicMusic) {
  magicMusic.volume = 0.3; // Volumen para la música mágica (ajusta a tu gusto)
  magicMusicToggle.addEventListener('click', () => {
    // Primero, pausamos la música de fondo principal
    if (isPlaying) {
      music.pause();
      toggle.textContent = '🔊🎵'; // Actualiza el icono del botón principal
      isPlaying = false;
    }

    // Luego, controlamos la música mágica
    if (isMagicMusicPlaying) {
      magicMusic.pause();
      magicMusicToggle.textContent = '🎵 Dale Bo 🔊'; // Texto cuando está pausada
      console.log("Música mágica pausada.");
    } else {
      magicMusic.play().then(() => {
        magicMusicToggle.textContent = '⏸️ Dale booo'; // Texto cuando está sonando
        console.log("Música mágica reproduciéndose.");
      }).catch(err => console.error("Error al reproducir música mágica:", err));
    }
    isMagicMusicPlaying = !isMagicMusicPlaying;
  });
} else {
  console.warn("Elemento de audio 'magic-music' no encontrado.");
}





// -------------------glitterContainer--------------------
document.addEventListener("DOMContentLoaded", function () {
  const graciasSection = document.getElementById("gracias");
  const glitterContainer = document.getElementById("glitter-container");

  const glitterOptions = {
    fullScreen: { enable: false }, // NO pantalla completa
    background: { color: "transparent" },
    particles: {
      number: { value: 60, density: { enable: true, area: 700 } },
      color: { value: ["#0000FF", "#FFD700"] },
      shape: {
        type: ["char", "star"],
        character: {
          value: ["💙", "💛"],
          font: "Segoe UI Emoji",
          style: "",
          weight: "400",
        }
      },
      opacity: {
        value: 1,
        random: true,
        animation: { enable: true, speed: 1, minimumValue: 0.3 }
      },
      size: {
        value: 12,
        random: true,
        animation: { enable: true, speed: 2, minimumValue: 1 }
      },
      move: {
        enable: true,
        speed: 4,
        direction: "top",
        random: true,
        outModes: { default: "out" }
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "bubble" }
      },
      modes: {
        bubble: { distance: 100, size: 18, duration: 10, opacity: 1 }
      }
    }
  };

  // 🔍 Solo cargamos tsParticles si la sección está visible
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tsParticles.load("glitter-container", glitterOptions);
        observer.unobserve(entry.target); // deja de observar
      }
    });
  }, { threshold: 0.3 });

  observer.observe(graciasSection);
});


document.getElementById("magicBtn").addEventListener("click", async () => {
  const container = await tsParticles.domItem(0);
  const newColors = ["#0000FF", "#FFD700"].sort(() => 0.5 - Math.random());

  container.options.particles.color.value = newColors;
  container.refresh();
});


document.getElementById("magicBtn").addEventListener("click", () => {
  const container = tsParticles.domItem(0); // primer sistema cargado
  // Elegimos nuevos colores al azar
  const newColors = ["#0000FF"].sort(() => 0.5 - Math.random());
  // Tomamos las opciones actuales, cambiamos el color y actualizamos
  container.load({
    ...container.options,
    particles: {
      ...container.options.particles,
      color: { value: newColors }
    }
  });
});

const magicThemes = [
  {
    name: "Estrellas doradas",
    shape: { type: "star" },
    color: ["#0000FF", "#FFD700"],
    speed: 1.5
  },
  {
    name: "Corazones rosa",
    shape: {
      type: "char",
      character: {
        value: ["💖", "💗", "❤️"],
        font: "sans-serif",
        style: "",
        weight: "400"
      }
    },
    color: ["#0000FF", "#FFD700"],
    speed: 2
  },
  {
    name: "Burbujas celestes",
    shape: { type: "circle" },
    color: ["#0000FF", "#FFD700"],
    speed: 3
  },
  {
    name: "Fiesta mágica",
    shape: {
      type: "char",
      character: {
        value: ["🎈", "🎉", "✨"],
        font: "Verdana",
        style: "",
        weight: "400"
      }
    },
    color: ["#0000FF", "#FFD700"],
    speed: 5
  }
];

const randomTheme = magicThemes[Math.floor(Math.random() * magicThemes.length)];

// tsParticles.load("glitter-container", {        // id del DIV dentro de #gracias
//   fullScreen: { enable: false },               // ⬅ desactivado
//   background: { color: "transparent" },
//   particles: {
//     number: {
//       value: 40,
//       density: {
//         enable: true,
//         value_area: 800
//       }
//     },
//     color: {
//       value: randomTheme.color
//     },
//     shape: randomTheme.shape,
//     opacity: {
//       value: 0.9,
//       random: true
//     },
//     size: {
//       value: 16,
//       random: { enable: true, minimumValue: 8 }
//     },
//     move: {
//       enable: true,
//       speed: 1.5,
//       direction: "none",
//       outModes: {
//         default: "out"
//       }
//     }
//   },
//   background: {
//     color: "#ffffff00"
//   },
//   fullScreen: {
//     enable: true,
//     zIndex: -1
//   }
// });






