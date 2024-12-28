const navElements = document.querySelectorAll(".nav-el");

navElements.forEach((navEl) => {
  const link = navEl.querySelector("a");
  link.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".nav-el-active")?.classList.remove("nav-el-active");
    navEl.classList.add("nav-el-active");
  });
});
