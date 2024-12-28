const firstAttempt = document.querySelectorAll(".first-attempt");
firstAttempt.forEach((el) => el.classList.add("active"));

const dataBorder = document.querySelectorAll("[data-border]");
dataBorder.forEach((el) => (el.dataset.elActive = ""));

const hackElements = document.querySelectorAll(".hack");
hackElements.forEach((el) => {
  el.setAttribute("title", "hacking");
});

const hijackElements = document.querySelectorAll(".hijack");
hijackElements.forEach((el) => {
  el.removeAttribute("title");
});

const st = document.querySelectorAll(".st1.st2");
st.forEach((el) => {
  el.style.color = "red";
  el.style.fontSize = "15px";
});

const attrib = document.querySelectorAll(".attrib");
attrib.forEach((el) => {
  el.dataset.hackActive = "";
  el.removeAttribute("data-hack-inactive");
});

const lastAttempt = document.querySelectorAll(".last-attempt");
lastAttempt.forEach((el) => {
  const spans = el.querySelectorAll("span");
  spans.forEach((span) => {
    span.style.display = "none";
  });
});
