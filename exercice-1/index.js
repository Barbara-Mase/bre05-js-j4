

let button = document.querySelector('button');
let p = document.getElementById('text');


button.addEventListener("click", (event) => {
   let red = p.style.color;
   p.style.color = "red";
})