function changeColor() {

    const colors = [
        "#ff6b6b",
        "#4dabf7",
        "#51cf66",
        "#845ef7",
        "#fcc419",
        "#20c997"
    ];

    const randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
}