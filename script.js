const input = document.getElementById("inputval");
const output = document.getElementById("output");

const square = document.getElementById("square");
const table = document.getElementById("table");


// Square
square.addEventListener("click", () => {

    let number = Number(input.value);

    output.textContent = number * number;

});


// Table
table.addEventListener("click", function () {

    let number = Number(input.value);

    let result = "";

    for (let i = 1; i <= 10; i++) {

        result = result + (number * i) + "<br>";

    }

    output.innerHTML = result;

});


// Input khali hone par output khali karo
input.addEventListener("input", function () {

    if (input.value == "") {

        output.textContent = "";

    }

});