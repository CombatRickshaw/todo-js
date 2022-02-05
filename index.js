//Select the elements


const todoList = document.querySelector('.todo-list');
const addButton = document.querySelector('#todo-add-button');
const todoInput = document.querySelector('#todo-input');

//event listeners
addButton.addEventListener('click', (event) => { // addition
    
    event.preventDefault(); // preventing the page from refreshing 
    
    if (todoInput.value !== "") {
        
        let toDoDiv = document.createElement('div'); // Creating a div and assigning it a class
        toDoDiv.setAttribute("class", "todo");

        let toDoItem = document.createElement('li'); // Creating a list item and assigning it a class
        toDoItem.setAttribute("class", "todo-text");
        
        toDoDiv.appendChild(toDoItem); // appending the li to div
        toDoItem.textContent = todoInput.value;
        todoInput.value = "";
        
        
        let buttonContainer = document.createElement('span');
        buttonContainer.setAttribute('class', 'button-container-span');
        
        let checkButton = document.createElement('button'); // Creating the check button and assigning it a class
        checkButton.setAttribute("class", "check-button");
        checkButton.innerHTML = '<i><img src="./svg/plus-square.svg"></i>';
        buttonContainer.appendChild(checkButton);
        
        
        let deleteButton = document.createElement('button'); // creating and assigning a class to deleteButton
        deleteButton.setAttribute("class", "delete-button");
        deleteButton.innerHTML = '<i><img src="./svg/backspace.svg"></i>'
        buttonContainer.appendChild(deleteButton);
        
        toDoDiv.appendChild(buttonContainer);
        
        todoList.appendChild(toDoDiv);



    }
    
    else {
        todoInput.setAttribute('placeholder', 'You need to input something here');
    }
});

todoList.addEventListener('click', (event) => {
    // console.log(event.target);
    const targetItem = event.target;
    if (targetItem.className === 'delete-button') {
        // const todoDiv = targetItem.parentElement;
        const containerDiv = targetItem.parentElement.parentElement;
        containerDiv.remove();
    }
})


todoList.addEventListener('click', (event) => {
    
    const targetItem = event.target;
    if (targetItem.className === 'check-button') {
        const todoText = targetItem.parentElement.previousElementSibling; // accessing the todo text element
        todoText.innerHTML = "<s>" + todoText.textContent + "</s>";
    }
})