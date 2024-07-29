const object = document.getElementById('object');
let colors = ['red', 'green', 'blue', 'yellow', 'purple'];
let currentColorIndex = 0;

setInterval(() => {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    object.style.backgroundColor = colors[currentColorIndex];
}, 1000);
