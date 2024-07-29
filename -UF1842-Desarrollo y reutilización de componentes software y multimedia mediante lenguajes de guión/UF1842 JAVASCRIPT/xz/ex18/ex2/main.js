const object = document.getElementById('object');
let width = 50;
let height = 50;

document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case '+':
            width += 10;
            height += 10;
            break;
        case '-':
            width -= 10;
            height -= 10;
            break;
    }
    object.style.width = width + 'px';
    object.style.height = height + 'px';
});
