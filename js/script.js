// ----------------- SHOW MENU ---------------//

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
  // valida se, se existe as variaveis//
  if (toggle && nav) {
    // aqui adiciono a class show-menu da div com a class//
    toggle.addEventListener("click", () => {
      // adiciona a class show-menu na div que tem o id a //
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav");

// ----------------- REMOVER MENU MOBILE ---------------//

const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav");

  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// ----------------- DEIXA O LINK CLICADO A CLASS ACTIVE ---------------//

const linkcolor = document.querySelectorAll(".nav__link");

function colorLink() {
  if (linkcolor) {
    linkcolor.forEach((L) => L.classList.remove("active-link"));
    this.classList.add("active-link");
  }
}
linkcolor.forEach((L) => L.addEventListener("click", colorLink));

// ----------------- MUDAR A COR DO HEADER ---------------//

function scrollHeader() {
  const scrollHeader = document.getElementById("header");
  if (this.scrolly >= 100) scrollHeader.classList.add("scroll-header");
  else scrollHeader.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);
