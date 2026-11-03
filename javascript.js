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