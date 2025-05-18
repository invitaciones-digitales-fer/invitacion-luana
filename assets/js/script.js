/* ===== Countdown ===== */
function pad(n){return n.toString().padStart(2,'0');}
function renderCountdown() {
  const t = eventDate - new Date();
  const d = Math.floor(t/864e5);
  const h = Math.floor(t/36e5)%24;
  const m = Math.floor(t/6e4)%60;
  const s = Math.floor(t/1e3)%60;
  clock.innerHTML =
    `<span class="time"><strong>${pad(d)}</strong><em>días</em></span>
     <span class="time"><strong>${pad(h)}</strong><em>hs</em></span>
     <span class="time"><strong>${pad(m)}</strong><em>min</em></span>
     <span class="time"><strong>${pad(s)}</strong><em>seg</em></span>`;
}
setInterval(renderCountdown,1000); renderCountdown();


/* ===== Modal Regalos ===== */
const btnGift = document.getElementById('btnGift');
const modal   = document.getElementById('modalRegalo');
const close   = modal.querySelector('.close');
btnGift.onclick = ()=> modal.style.display = 'flex';
close.onclick   = ()=> modal.style.display = 'none';
window.onclick  = e => { if(e.target === modal) modal.style.display = 'none'; };
