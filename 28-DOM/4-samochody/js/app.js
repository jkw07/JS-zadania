const cars = document.querySelectorAll(".car");

cars.forEach((car) => {
  const button = car.querySelector("button");
  button.addEventListener("click", () => {
    const details = car.querySelector(".car-detail");
    details.style.display = "none" ? "block" : "none";
  });
});
