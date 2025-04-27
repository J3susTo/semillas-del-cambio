// Pequeño efecto de scroll suave para los enlaces
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var myCarousel = document.querySelector('#carruselContaminantes');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000, // Cambia de imagen cada 3000 ms (3 segundos)
    ride: 'carousel'
});

