// Toggle class active.
const navbarNav = document.querySelector(".navbar-nav");

//When Hamburger Menu Clicked.
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Removing sidebar when clicking outside the sidebar.
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
