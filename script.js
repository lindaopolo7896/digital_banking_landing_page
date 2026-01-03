const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) =>
  item.addEventListener("click", function () {
    navItems.forEach((items) => items.classList.remove("active"));
    item.classList.add("active");
  })
);
