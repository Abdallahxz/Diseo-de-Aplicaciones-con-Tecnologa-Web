const object = document.getElementById('object');
let positionX = 0;
let positionY = 0;
let velocityX = 2;
let velocityY = 2;
const maxX = window.innerWidth - object.clientWidth;
const maxY = window.innerHeight - object.clientHeight;

const bounce = () => {
    positionX += velocityX;
    positionY += velocityY;

    if (positionX >= maxX || positionX <= 0) {
        velocityX = -velocityX;
    }

    if (positionY >= maxY || positionY <= 0) {
        velocityY = -velocityY;
    }

    object.style.left = positionX + 'px';
    object.style.top = positionY + 'px';

    requestAnimationFrame(bounce);
};

bounce();
