const menuKnap = document.querySelector("#menuKnap");
const menu = document.querySelector("#menu");
let menuOpen = false;

menuKnap.addEventListener("click", openMenu);

function openMenu() {
  if (!menuOpen) {
    menu.style.display = "block";
    menuOpen = true;
  } else {
    menu.style.display = "none";
    menuOpen = false;
  }
}
