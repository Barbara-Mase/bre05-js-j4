let spanPlus = document.querySelector('span');
let section = document.getElementsByClassName("closed");
let p = document.getElementsByTagName('p');
//getElementsByClassName renvoie un tableau

spanPlus.addEventListener("click", (event) => {
    // au clic : ouvert
    //au second clic : fermé
    if (section.style.display === "none") {
        section.classList.toggle("open"); 
        } else {
            section.classList.toggle("closed");
        }

})