for (let i = 20; i <= 30; i++) {
    console.log(i);
}

for (let i = 30; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let sum = 0;
for (let i = 1; i <= 50; i++) {
    sum += i;
}
console.log("La suma de los primeros 50 números naturales es:", sum);

const number = 8;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

const array = [1, 2, 3, 4, 5];
array.forEach(element => {
    console.log(element);
});

let height = 9;
for (let i = 1; i <= height; i++) {
    console.log('*'.repeat(i));
}

let sumEven = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    }
}
console.log("La suma de los números pares entre 1 y 50 es:", sumEven);

for (let i = 30; i >= 20; i--) {
    console.log(i);
}

const numbersArray = [10, 20, 30, 40, 50];
let total = 0;
numbersArray.forEach(num => {
    total += num;
});
let average = total / numbersArray.length;
console.log("El promedio del arreglo es:", average);

const phrases = [
    "La vida es bella.",
    "El conocimiento es poder.",
    "Sigue tus sueños.",
    "El tiempo es oro.",
    "La práctica hace al maestro."
];

function showRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];
    document.getElementById('randomPhrase').innerText = randomPhrase;
}