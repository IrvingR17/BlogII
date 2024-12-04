const container = document.getElementById('animation-container');

function createHeart(x, y) {
  const heart = document.createElement('div');
  heart.className = 'heart';

  // Posición inicial
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;

  // Tamaño aleatorio
  const size = Math.random() * 20 + 30; // entre 30px y 50px
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;

  // Color aleatorio
  const colors = ['#ff6f61', '#ffcccb', '#ffc3a0'];
  heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  // Duración de la animación
  heart.style.animationDuration = `${Math.random() * 2 + 4}s`; // entre 4s y 6s

  // Agregar al contenedor
  container.appendChild(heart);

  // Eliminar el corazón después de la animación
  heart.addEventListener('animationend', () => {
    heart.remove();
  });
}

// Generar corazones al hacer clic
document.body.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  createHeart(x, y);
});

// Generar corazones de manera automática
setInterval(() => {
  const x = Math.random() * window.innerWidth;
  createHeart(x, window.innerHeight);
}, 500);