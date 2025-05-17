const addButton = document.querySelector(".add");
const inputBox = document.querySelector("input");
const ulSection = document.querySelector("ul");

function buildListItem() {
    const listItem = document.createElement("li");

    const removeButton = document.createElement("button");
    removeButton.textContent = "remove";
    removeButton.addEventListener("click", removeListItem);

    listItem.textContent = inputBox.value + " ";
    listItem.appendChild(removeButton);

    return listItem;
}

function removeListItem (event) {
    this.parentNode.remove();
}

function addListItem(event) {
    ulSection.appendChild(buildListItem());

    inputBox.value = "";
    focus(inputBox);
}

addButton.addEventListener("click", addListItem);
inputBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter")
    {
        addListItem();
    }
});