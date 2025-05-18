/* ===== Countdown ===== */
const eventDate = new Date('2025-08-09T21:30:00');
const clock     = document.getElementById('clock');
setInterval(()=>{
  const t = eventDate - new Date();
  const d = Math.floor(t/864e5);
  const h = Math.floor(t/36e5)%24;
  const m = Math.floor(t/6e4)%60;
  const s = Math.floor(t/1e3)%60;
  clock.textContent = `${d}d ${h}h ${m}m ${s}s`;
},1000);

/* ===== Modal Regalos ===== */
const btnGift = document.getElementById('btnGift');
const modal   = document.getElementById('modalRegalo');
const close   = modal.querySelector('.close');
btnGift.onclick = ()=> modal.style.display = 'flex';
close.onclick   = ()=> modal.style.display = 'none';
window.onclick  = e => { if(e.target === modal) modal.style.display = 'none'; };
