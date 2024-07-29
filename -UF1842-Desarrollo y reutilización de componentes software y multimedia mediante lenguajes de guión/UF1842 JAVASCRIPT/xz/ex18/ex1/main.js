const object = document.getElementById('object');
let left = 50;
let topPos = 50;

document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'ArrowUp':
            topPos -= 10;
            break;
        case 'ArrowDown':
            topPos += 10;
            break;
        case 'ArrowLeft':
            left -= 10;
            break;
        case 'ArrowRight':
            left += 10;
            break;
    }
    object.style.left = left + 'px';
    object.style.top = topPos + 'px';
});
