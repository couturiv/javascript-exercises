const list = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
    const inputValue = input.value;
    input.value = '';

    const listItem = document.createElement("il");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = inputValue;
    listItem.appendChild(listBtn);
    listBtn.textContent = "Delete";
    list.appendChild(listItem);

    listBtn.addEventListener("click", function() {
        list.removeChild(listItem);
    });

    input.focus();

  });



