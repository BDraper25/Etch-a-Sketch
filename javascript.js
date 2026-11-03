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
    let userInput = prompt("How many squares would you like per side?");
    if (userInput !== null) {
    const number = Number(userInput);
    
        if (Number.isInteger(number) && number > 0 && number <= 100) {
            container.innerHTML = "";
            createGrid(number);
    } 
}}
);



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