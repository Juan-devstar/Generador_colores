/* Archivo: script.js */
const generateButton = document.querySelector(".generate-button");
const colorPalette = document.querySelector("#color-palette");

generateButton.addEventListener("click", function(e) {
    e.preventDefault();

    colorPalette.innerHTML = "";

    for (let i = 0; i < 6; i++) {
        const randomColor = generateRandomColor();
        const colorDiv = document.createElement("div");
        colorDiv.style.backgroundColor = randomColor;
        colorDiv.textContent = randomColor;
        colorPalette.appendChild(colorDiv);
    }
});

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
