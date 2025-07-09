const hamBuger = document.getElementById("hambuger");

const nav = document.getElementById("moblie-nav");

hamBuger.onclick = function doSomeThing() {
console.log(nav.style.display);

  nav.style.display="block";

}


const hamBugerClose = document.getElementById("hambuger-close");

const menu = document.getElementById("moblie-nav");

hamBugerClose.onclick = function someThing() {

  menu.style.display="none";

}