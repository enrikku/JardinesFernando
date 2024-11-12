
// Carrusel automático simple
document.querySelectorAll('.carousel').forEach(carousel => {
    let images = carousel.querySelectorAll('img');
    let index = 0;

    setInterval(() => {
        images.forEach((img, i) => {
            img.style.transform = `translateX(${(i - index) * 100}%)`;
        });
        index = (index + 1) % images.length;
    }, 3000); // Cambia de imagen cada 3 segundos
});
