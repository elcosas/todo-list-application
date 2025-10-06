// Query Selectors
const q_todoListItemArea = document.querySelector("#todo-list-items-area");
const q_btnAddToDoList = document.querySelector("#todo-list-add-item-button");

// Event listners
q_btnAddToDoList.addEventListener("click", () => {
    const inputBox = document.createElement("input");
    inputBox.setAttribute("style", "color: blue; background: white;");
    q_todoListItemArea.replaceChild(inputBox, q_btnAddToDoList);

    inputBox.addEventListener("keydown", function(event) {
        if(event.key == "Enter") {
            alert("Hey");
            // const addItemButton = document.createElement("button");
            // inputBox.id = "input-box";
            // inputBox.setAttribute("style", "color: blue; background: white;");
            // q_todoListItemArea.replaceChild(inputBox, q_btnAddToDoList);
        }
});
});




// const inputBox = document.createElement("input");
// inputBox.setAttribute("style", "color: blue; background: white;");
// q_todoListItemArea.insertBefore(inputBox, q_btnAddToDoList);