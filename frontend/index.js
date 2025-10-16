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
                console.log(inputBox.value);
                typedInTextBox = inputBox.value;
                
                const addItemButton = document.createElement("button");
                addItemButton.id = "todo-list-add-item-button";
                addItemButton.textContent = "+ Add Item";
                q_todoListItemArea.replaceChild(addItemButton, inputBox);

                const todoItem = document.createElement("div");
                todoItem.textContent = typedInTextBox;
                todoItem.setAttribute("style", "background: rgb(75, 75, 75); width: 85%; height: 25px; margin: 4px; padding: 4px; color: white; border-radius: 4px;");

                const q_btnAddToDoList = document.querySelector("#todo-list-add-item-button");
                q_todoListItemArea.insertBefore(todoItem, q_btnAddToDoList);
            }
        });
    }
});

// Save button creates a pop up
const q_saveButton = document.querySelector("#save");
const overlay = document.querySelector("#overlay");
overlay.classList.add("overlay-off");

q_saveButton.addEventListener("click", (event) => {
    overlay.classList.remove("overlay-off");
});

    // Pop up's cancel button removes itself
    const q_cancelButtonPopUpSave = document.querySelector("#overlay-buttons-cancel");
    q_cancelButtonPopUpSave.addEventListener("click", (event) => {
        overlay.classList.add("overlay-off");
    });


// Load button creates a pop up
const q_loadButton = document.querySelector("#load");
const overlayLoad = document.querySelector("#overlay");
overlayLoad.classList.add("overlay-off");

q_loadButton.addEventListener("click", (event) => {
    overlayLoad.classList.remove("overlay-off");
});

    // Pop up's cancel button removes itself
    const q_cancelButtonPopUpLoad = document.querySelector("#overlay-buttons-cancel");
    q_cancelButtonPopUp.addEventListener("click", (event) => {
        overlayLoad.classList.add("overlay-off");
    });