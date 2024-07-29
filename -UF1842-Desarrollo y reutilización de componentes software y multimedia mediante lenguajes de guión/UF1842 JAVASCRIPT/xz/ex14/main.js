function findLargestNumber(numbers) {

    let largestNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i];
        }
    }

    return largestNumber;
}

function main() {

    const count = parseInt(prompt("Ingresa la cantidad de números:"));

    let numbers = [];

    for (let i = 0; i < count; i++) {
        const number = parseInt(prompt(`Ingresa el número ${i + 1}:`));
        numbers.push(number);
    }

    const largestNumber = findLargestNumber(numbers);


    console.log(`El número más grande es: ${largestNumber}`);
    alert(`El número más grande es: ${largestNumber}`);
}

main();
