// Query Selectors
const q_todoListItemArea = document.querySelector("#todo-list-items-area");

// Event listners
q_todoListItemArea.addEventListener("click", (event) => {
    const q_btnAddToDoList = document.querySelector("#todo-list-add-item-button");
    if(event.target.id === "todo-list-add-item-button") {
        const inputBox = document.createElement("input");
        inputBox.setAttribute("style", "color: blue; background: white;");
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
                todoItem.setAttribute("style", "background: rgba(89, 148, 148, 1); width: 85%; height: 25px; margin: 4px; padding: 4px; borderRadius: 4px;");

                const q_btnAddToDoList = document.querySelector("#todo-list-add-item-button");
                q_todoListItemArea.insertBefore(todoItem, q_btnAddToDoList);
            }
        });
    }
});