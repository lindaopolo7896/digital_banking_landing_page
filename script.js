const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) =>
  item.addEventListener("click", function () {
    navItems.forEach((items) => items.classList.remove("active"));
    item.classList.add("active");
  })
);

const hamburger = document.querySelector(".nav-icons");
const menu = document.querySelector(".nav-list-mobile");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open-close");
});
