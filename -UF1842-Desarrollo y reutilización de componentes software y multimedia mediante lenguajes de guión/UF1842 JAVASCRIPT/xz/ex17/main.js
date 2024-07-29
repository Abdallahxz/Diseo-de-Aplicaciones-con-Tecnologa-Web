// Selecciona los elementos necesarios del DOM
const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const shoppingList = document.getElementById('shoppingList');

// Función para agregar un ítem a la lista
function addItem() {
    // Obtener el valor del campo de entrada
    const itemText = itemInput.value.trim();

    // Verificar que el campo no esté vacío
    if (itemText === '') {
        alert('Por favor, ingrese un artículo.');
        return;
    }

    // Crear un nuevo elemento de lista (<li>)
    const listItem = document.createElement('li');
    listItem.textContent = itemText;

    // Crear botón de completado
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Completado';
    completeButton.addEventListener('click', () => {
        listItem.classList.toggle('completed');
    });

    // Crear botón de eliminación
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => {
        shoppingList.removeChild(listItem);
    });

    // Añadir botones al elemento de lista
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);

    // Añadir el nuevo elemento a la lista
    shoppingList.appendChild(listItem);

    // Limpiar el campo de entrada
    itemInput.value = '';
}

// Vincular la función addItem al evento click del botón "Agregar"
addButton.addEventListener('click', addItem);
