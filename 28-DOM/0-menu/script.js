/* Wykonaj następujące czynności:

Dodaj mu klasę .menu
pierwszemu LI w tym ul dodaj klasę .first
ostatniemu LI w tym ul dodaj klasę .last
trzeciemu LI w tym ul ustaw klasę .active
trzeciemu LI w tym ul ustaw za pomocą JS kolor tekstu na #fff
każdemu linkowi w tym menu ustaw atrybut title="Przejdź na stronę ..." gdzie ... to tekst danego linka
za pomocą JS każdemu linkowi w tym ul ustaw atrybut href na #. Po co to robimy? Czy jest alternatywna metoda?
Dodaj do każdego linka w ul zdarzenie CLICK. Po kliknięciu powinien pojawić się alert z tekstem, który widnieje na linku (np "Kliknięto Start")
Dla linka w li.active usuń zdarzenie click (tak by nie pojawiał sie alert po kliknięciu) */

const ulElement = document.querySelector("ul");
const ilElements = document.querySelectorAll("li");
const links = document.querySelectorAll("a");

ulElement.classList.add("menu");
liElements[0].classList.add("first");
liElements[2].classList.add("active");
liElements[liElements.length-1].classList.add("last");

liElements[2].style.color = "#fff";

links.forEach((link) => {
    link.title = `Przejdź na stronę ${link.textContent}`;
    link.href = '#';
    link.addEventListener('click', {
        alert(`Kliknięto ${link.textContent}`);
    });
}
);

const activeLink = document.querySelector(".active a");
if (activeLink) {
    activeLink.removeEventListener('click', {
        alert(`Kliknięto ${activeLink.textContent}`);
    })
}
