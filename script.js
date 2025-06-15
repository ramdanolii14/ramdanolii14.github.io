// Tambahan efek interaktif sederhana

document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.btn');

  btns.forEach(btn => {
    btn.addEventListener('mouseover', () => {
      btn.style.transform = 'scale(1.05)';
    });

    btn.addEventListener('mouseout', () => {
      btn.style.transform = 'scale(1)';
    });
  });
});
