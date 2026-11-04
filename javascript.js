const container = document.querySelector(".container");

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
        } else {
            alert("Please enter a whole number between 1 and 100")
        };
    };
}
);



function createGrid(number) {
    const squareSize = 960 / number;
    
    for (let i = 0; i < (number * number); i++) {
    const div = document.createElement("div");
    div.classList.add("basic");
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;
    container.appendChild(div);
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "blue";
    })
}
}