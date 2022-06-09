const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", (e) => {
  document.body.style.overflow = "hidden";
  close.style.display = "block";
  nav.classList.add("mobile-menu");
});

close.addEventListener("click", (e) => {
  document.body.style.overflow = "auto";
  close.style.display = "none";
  nav.classList.remove("mobile-menu");
});
