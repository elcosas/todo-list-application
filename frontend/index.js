// Add todo items
const q_todoListItemArea = document.querySelector("#todo-list-items-area");

q_todoListItemArea.addEventListener("click", (event) => {
    const q_btnAddToDoList = document.querySelector("#todo-list-add-item-button");
    if(event.target.id === "todo-list-add-item-button") {
        const inputBox = document.createElement("input");
        inputBox.setAttribute("style", "color: black; background: white; border: solid 2px rgba(72, 105, 255, 1); width: 25%; border-radius: 4px;");
        q_todoListItemArea.replaceChild(inputBox, q_btnAddToDoList);

        inputBox.addEventListener("keydown", function(event) {
            if(event.key == "Enter") {
                console.log(inputBox.value); // logs the text that user just typed in and places it as one todo item
                typedInTextBox = inputBox.value;
                
                const addItemButton = document.createElement("button");
                addItemButton.id = "todo-list-add-item-button";
                addItemButton.textContent = "+ Add Item";
                q_todoListItemArea.replaceChild(addItemButton, inputBox);

                const todoItem = document.createElement("div");
                todoItem.textContent = typedInTextBox;
                todoItem.classList.add("todo-list-items");
                todoItem.setAttribute("style", "background: rgb(75, 75, 75); width: 85%; height: 25px; margin: 4px; padding: 4px; color: white; border-radius: 4px;");

                const q_btnAddToDoList = document.querySelector("#todo-list-add-item-button");
                q_todoListItemArea.insertBefore(todoItem, q_btnAddToDoList);
            }
        });
    }
});

// Save button creates a pop up
const q_saveButton = document.querySelector("#save");
const overlay = document.querySelector("#overlay-save");
overlay.classList.add("overlay-off");

q_saveButton.addEventListener("click", (event) => {
    overlay.classList.remove("overlay-off");

    // Pop up's cancel button removes the pop up
    const q_cancelButtonPopUpSave = document.querySelector("#overlay-buttons-cancel");
    q_cancelButtonPopUpSave.addEventListener("click", (event) => {
        overlay.classList.add("overlay-off");
    });
    

    const q_SaveButtonPopUpSave = document.querySelector("#overlay-buttons-save");
    q_SaveButtonPopUpSave.addEventListener("click", (event) => {
        const q_idTextbox = document.querySelector("#overlay-input");
        let saveId = q_idTextbox.value;

        const q_todo_list_items = document.querySelectorAll(".todo-list-items");
        let saveTodoListItems = q_todo_list_items;
        q_todo_list_items.forEach(element => {
            console.log(element.textContent); // Logs the text content of each div in the todo list
        });
    });
});




// Load button creates a pop up
const q_loadButton = document.querySelector("#load");
const overlayLoad = document.querySelector("#overlay-load");
overlayLoad.classList.add("overlay-off");

q_loadButton.addEventListener("click", (event) => {
    overlayLoad.classList.remove("overlay-off");

    // Pop up's cancel button removes the pop up
    const q_cancelButtonPopUpLoad = document.querySelector("#overlay-buttons-cancel-load");
    q_cancelButtonPopUpLoad.addEventListener("click", (event) => {
        overlayLoad.classList.add("overlay-off");
    });
});

