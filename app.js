const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const navList = document.querySelector(".nav-list");

openMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navList.style.display = "block";
  openMenuBtn.style.display = "none";
  closeMenuBtn.style.display = "block";
});

closeMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  closeMenuBtn.style.display = "none";
  openMenuBtn.style.display = "block";
  navList.style.display = "none";
});
