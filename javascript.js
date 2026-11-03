const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("basic");
    container.appendChild(div);
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "blue";
    })
}

const button = document.createElement("button");
document.body.insertBefore(button, container);
button.textContent = "Press to select the number of squares for your grid";
button.addEventListener("click", () => {
    const userInput = prompt("How many squares would you like per side?")
}) 

function createGrid(number) {
    for (let i = 0; i < (number * number); i++) {
    const div = document.createElement("div");
    div.classList.add("basic");
    container.appendChild(div);
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "blue";
    })
}
}