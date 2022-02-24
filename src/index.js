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

const singlelokale = document.querySelector("#singleview");

singlelokale.addEventListener("click", funcSingleview);

function funcSingleview() {
  window.location.href = "single_view.html";
}
