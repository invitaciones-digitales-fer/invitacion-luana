/* ====== Countdown ====== */
const clock = document.getElementById('clock');
const eventDate = new Date('August 9, 2025 21:30:00').getTime();
const pad = n => n.toString().padStart(2,'0');

function updateClock(){
  const gap = eventDate - Date.now();
  const d = Math.floor(gap/864e5);
  const h = Math.floor(gap/36e5)%24;
  const m = Math.floor(gap/6e4)%60;
  const s = Math.floor(gap/1e3)%60;

  clock.innerHTML = `
    <div><strong>${pad(d)}</strong><span>días</span></div>
    <div><strong>${pad(h)}</strong><span>horas</span></div>
    <div><strong>${pad(m)}</strong><span>min</span></div>
    <div><strong>${pad(s)}</strong><span>seg</span></div>`;
}

setInterval(updateClock,1000); updateClock();

/* ====== Modal ====== */
const btnGift = document.getElementById('btnGift');
const modal   = document.getElementById('modalRegalo');
const close   = modal.querySelector('.close');
btnGift.onclick = () => modal.style.display = 'flex';
close.onclick   = () => modal.style.display = 'none';
window.onclick  = e => { if(e.target === modal) modal.style.display = 'none'; };

/* ====== Scroll reveal ====== */
const obs = new IntersectionObserver(
  entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('appear');
        obs.unobserve(e.target);
      }
    });
  },
  {threshold:0.2}
);

document.querySelectorAll('.section').forEach(sec=>{
  sec.classList.add('hidden');
  obs.observe(sec);
});
// ======= Mensaje de bienvenida + Reproductor de música =========

const music = document.getElementById('bg-music'); // Declarada una sola vez
const enterBtn = document.getElementById('enter-btn');
const overlay = document.getElementById('welcome-overlay');
const toggle = document.getElementById('music-toggle');
let isPlaying = false;

enterBtn.addEventListener('click', () => {
  overlay.classList.add('fade-out'); // animación
  setTimeout(() => {
    overlay.style.display = 'none'; // ocultar después de animar
  }, 1000);

  if (music) {
    music.volume = 0.2;
    music.play().then(() => {
      isPlaying = true;
      toggle.textContent = '⏸️';
    }).catch(err => console.log('Autoplay bloqueado:', err));
  }
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


toggle.classList.add('playing'); // cuando empieza
toggle.classList.remove('playing'); // cuando se pausa




