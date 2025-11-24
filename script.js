const img = document.querySelector('img');

img.addEventListener('mousemove', (e) => {
    let x = e.layerX;
    let y = e.layerY;

    img.style.transform =
        `perspective(500px)
             rotateX(${(y / 5) - 20}deg)
             rotateY(${(x / 5) - 15}deg)`;
});