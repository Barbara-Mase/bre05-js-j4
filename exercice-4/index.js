let button1 = document.getElementById("tab-1");
let button2 = document.getElementById("tab-2");
let button3 = document.getElementById("tab-3");

let tab1 = document.getElementById("tab-1-content");
let tab2 = document.getElementById("tab-2-content");
let tab3 = document.getElementById("tab-3-content");

button1.addEventListener("click", (event) => {
    let tabOneShow = tab1.style.display;
    tab1.style.display = "block";
    
    
    let tabTwoHide = tab2.style.display;
    tab2.style.display = "none";
    
    let tabThreeHide = tab3.style.display;
    tab3.style.display = "none";
})

button2.addEventListener("click", (event) => {
    let tabTwoShow = tab2.style.display;
    tab2.style.display = "block";
    
    let tabOneHide = tab1.style.display;
    tab1.style.display = "none";
    
    let tabThreeHide = tab3.style.display;
    tab3.style.display = "none";
        
})

button3.addEventListener("click", (event) => {
    
    let tabThreeShow = tab3.style.display;
    tab3.style.display = "block";
    
    let tabOneHide = tab1.style.display;
    tab1.style.display = "none";
    
    let tabTwoHide = tab2.style.display;
    tab2.style.display = "none";
})