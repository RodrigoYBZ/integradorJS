
// RESPONSIVE BURGER MENU 

const links = document.getElementsByClassName("links")[0];
const burger = document.getElementsByClassName("burger")[0];
const burgerMenu = document.getElementById("burger");
let open = false;

const toggleMenu = (e) => {
    links.classList.toggle("links_dos")
    links.style.transition = "transform 0.5s ease-in-out";
}

burger.addEventListener("click", function (){
    toggleMenu();
    if (document.querySelector(".burger .links_2")){
        open = true;
    }else{
        open = false;
    };
})

// FIN RESPONSIVE BURGER MENU 

