const addButton = document.querySelector('.addButton');
const editButton = document.querySelector('.editButton');
const removeButton = document.querySelector('.removeButton');
const input = document.querySelector('.input');
const container = document.querySelector('.container');
const item = document.querySelector('.item');
const totalCount = document.querySelector('.totalCount');

let taskCount = 0;

addButton.addEventListener('click', (e) => {
    if (input.value === '') return
    createDiv(input.value);
    // input.value = '';
})

function createDiv (itemName) {
    taskCount++;
    let input = document.createElement('input');
    input.value = itemName;
    input.disabled = true;
    input.classList.add('itemInput');
    input.type = "text";

    let itemBox = document.createElement('div');
    itemBox.classList.add('item');

    let editButton = document.createElement('button');
    editButton.innerHTML = 'edit';
    editButton.classList.add('editButton');

    let removeButton = document.createElement('button');
    removeButton.innerHTML = 'remove';
    removeButton.classList.add('removeButton');

    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);
    
    editButton.addEventListener('click', (e) => editTask(input));
    removeButton.addEventListener('click', (e) => removeTask(itemBox));

    function editTask(input) {
        input.disabled = !input.disabled;
        if (input.classList.contains('itemInput')) {
            input.classList.toggle('itemInputEdit');
        };
    }

    function removeTask(item) {
        container.removeChild(item);
        taskCount--;
    }

    totalCount.textContent = taskCount;

}


