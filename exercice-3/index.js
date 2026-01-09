let buttonHide = document.getElementById('hide');
let buttonShow = document.getElementById('show');
let p = document.getElementById("text");




buttonHide.addEventListener("click", (event) => {
    let pHide = p.style.display;
    p.style.display = "none";
})

buttonShow.addEventListener("click", (event) => {
    let pShow = p.style.display;
    p.style.display = "block";
})