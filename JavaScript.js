const addButton = document.querySelector(".add");
const inputBox = document.querySelector("input");
const ulSection = document.querySelector("ul");

function buildListItem() {
    const listItem = document.createElement("li");
    const removeButton = document.createElement("button");
    removeButton.textContent = "remove";

    listItem.textContent = inputBox.value + " ";
    listItem.appendChild(removeButton);

    return listItem;
}

//function for adding list item 
function addListItem(event) {
    ulSection.appendChild(buildListItem());
}

//listener for when enter is pressed in the form 
//OR add button is pressed

addButton.addEventListener("click", addListItem);