let button = document.querySelector('button');
let p = document.getElementById("text");

button.addEventListener("click", (event) => {
    p.classList.toggle("red");
})