const frasesFrikisInformatica = [
    "¡No soy un bug, soy una característica!",
    "En la vida real, no hay Ctrl+Z.",
    "Los programadores también tienen sentimientos (a veces).",
    "¿En qué idioma está escrito esto? En binario.",
    "La vida es un script, ejecútalo."
];

const colores = [
    "red", "blue", "green", "purple", "orange", "brown", "pink", "gray"
];

function showRandomPhrase() {
    // Selecciona una frase aleatoria
    const randomIndex = Math.floor(Math.random() * frasesFrikisInformatica.length);
    const randomPhrase = frasesFrikisInformatica[randomIndex];
    
    // Selecciona colores aleatorios
    const randomColor = colores[Math.floor(Math.random() * colores.length)];
    const randomButtonColor = colores[Math.floor(Math.random() * colores.length)];

    // Muestra la frase y cambia el color
    const phraseElement = document.getElementById('randomPhrase');
    phraseElement.innerText = randomPhrase;
    phraseElement.style.color = randomColor;

    // Cambia el color del botón
    const buttonElement = document.getElementById('texto-informatica');
    buttonElement.style.backgroundColor = randomButtonColor;
    buttonElement.style.color = randomColor; // O puedes usar otro color si prefieres
}

// Asocia la función al evento click del botón
document.getElementById('texto-informatica').addEventListener('click', showRandomPhrase);
