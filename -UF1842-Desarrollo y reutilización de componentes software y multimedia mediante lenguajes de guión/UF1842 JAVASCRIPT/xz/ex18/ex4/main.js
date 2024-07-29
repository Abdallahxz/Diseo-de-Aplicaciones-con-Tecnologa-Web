const object = document.getElementById('object');
let opacity = 1;
let decreasing = true;

setInterval(() => {
    if (decreasing) {
        opacity -= 0.1;
        if (opacity <= 0) {
            decreasing = false;
        }
    } else {
        opacity += 0.1;
        if (opacity >= 1) {
            decreasing = true;
        }
    }
    object.style.opacity = opacity;
}, 100);
