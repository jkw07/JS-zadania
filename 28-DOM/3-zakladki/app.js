const tabElements = document.querySelectorAll(".tab-el");
const links = document.querySelectorAll(".tab-el a");
const divs = document.querySelectorAll(".tab-content");

tabElements.forEach((tabEl) => {
  const link = tabEl.querySelector("a");
  link.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".tab-el-active").classList.remove("tab-el-active");
    tabEl.classList.add("tab-el-active");
    divs.forEach((div) => div.classList.remove("tab-content-active"));
    const targetId = link.getAttribute("href").substring(1);
    const targetDiv = document.getElementById(targetId);
    if (targetDiv) {
      targetDiv.classList.add("tab-content-active");
    }
  });
});
