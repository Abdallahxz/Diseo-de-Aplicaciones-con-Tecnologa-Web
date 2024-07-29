const object = document.getElementById('object');
let opacity = 1;

const fadeOut = () => {
    if (opacity > 0) {
        opacity -= 0.01;
        object.style.opacity = opacity;
        requestAnimationFrame(fadeOut);
    }
};

fadeOut();
