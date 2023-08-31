const navMenu = document.querySelector("#nav-menu"),
  navToggle = document.querySelector("#toggle-menu");

navToggle.addEventListener("click", (e) => {
  e.preventDefault();

  const visiblity = navMenu.getAttribute("data-visible", false);
  console.log(visiblity);

  if (visiblity === "false") {
    navMenu.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visiblity === "true") {
    navMenu.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
