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
                const addItemButton = document.createElement("button");
                addItemButton.id = "todo-list-add-item-button";
                addItemButton.textContent = "+ Add Item";
                q_todoListItemArea.replaceChild(addItemButton, inputBox);
            }
        });
    }

});




// const inputBox = document.createElement("input");
// inputBox.setAttribute("style", "color: blue; background: white;");
// q_todoListItemArea.insertBefore(inputBox, q_btnAddToDoList);