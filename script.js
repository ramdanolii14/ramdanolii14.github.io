const toggle = document.getElementById('darkToggle');
const body = document.body;

// Cek preferensi tema sebelumnya
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggle.textContent = '☀️ Mode Terang';
  toggle.setAttribute('aria-pressed', 'true');
} else {
  toggle.setAttribute('aria-pressed', 'false');
}

// Event toggle tema
toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  toggle.textContent = isDark ? '☀️ Mode Terang' : '🌙 Mode Gelap';
  toggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  // Animasi klik
  toggle.classList.remove('clicked');
  void toggle.offsetWidth; // Trigger reflow
  toggle.classList.add('clicked');
});

const imageElement = document.getElementById('mahiruImage');
const imageList = [
  'images/shiina-mahiru.jpeg',
  'images/shiina-mahiru1.jpeg',
  'images/shiina-mahiru2.jpeg'
];

let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % imageList.length;
  imageElement.src = imageList[currentIndex];
}, 2500);


// Lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

// Pasang event listener ke semua gambar dalam .card
document.querySelectorAll('.card img').forEach(img => {
  img.style.cursor = 'zoom-in'; // tanda bisa klik zoom

  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || 'Gambar diperbesar';
    lightbox.setAttribute('aria-hidden', 'false');
    lightbox.focus();
  });
});

// Tutup lightbox saat tombol close diklik
lightboxClose.addEventListener('click', () => {
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImg.src = '';
});

// Tutup lightbox saat klik di luar gambar
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
  }
});

// Tutup lightbox dengan Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && lightbox.getAttribute('aria-hidden') === 'false') {
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
  }
});