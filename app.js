const burgerB = document.getElementById("burgerButton");
console.log(burgerB);

function mostrarMenu() {
const menuD = document.getElementById("burgerMenu");
menuD.classList.toggle("navbar-burger");

}

burgerB.addEventListener("click",mostrarMenu,false);