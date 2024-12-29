const userList = document.querySelector(".user-list");
const form = document.querySelector("form");
const regexName = /^[a-z]+\s[a-z]+$/i;
const regexPhone = /^\d{3}\s\d{3}\s\d{3}$/;

userList.addEventListener("click", (event) => {
  if (event.target.classList.contains("user-delete")) {
    const user = event.target.closest("li");
    if (user) {
      user.remove();
    }
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userName = form.elements["name"];
  const userPhone = form.elements["phone"];
  if (
    !validateInput(
      userName.value.trim(),
      regexName,
      "Wymagany format: Imię Nazwisko"
    ) ||
    !validateInput(
      userPhone.value.trim(),
      regexPhone,
      "Wymagany format numeru telefonu to XXX XXX XXX"
    )
  ) {
    return;
  }
  addUser(userName.value.trim(), userPhone.value.trim());
  userName.value = "";
  userPhone.value = "";
});

function addUser(name, phone) {
  const li = document.createElement("li");
  li.className = "user";
  li.innerHTML += `
            <div class="user-data">
                <div class="user-name">${name}</div>
                <div class="user-phone">${phone}</div>
            </div>
            <button type="button" class="btn user-delete">
                Usuń
            </button>
    `;
  userList.appendChild(li);
}

function validateInput(input, regex, alertMsg) {
  if (!regex.test(input)) {
    alert(alertMsg);
    return false;
  }
  return true;
}
