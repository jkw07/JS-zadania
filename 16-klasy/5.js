/* Mamy przykładową tablicę:

const names = [ "Baraka", "Jax", "Johnny Cage", "Kitana", "Kung Lao", "Liu Kang", "Mileena", "Raiden", "Reptile", "Scorpion", "Shang Tsung", "Sub-Zero"];
Stwórz konstruktor/klasę Fighter. Powinna mieć ona właściwości: 
name - imię 
live - życie 
power - moc uderzenia

oraz metody: 
attack(who) - metoda będzie służyć do ataku innego zawodnika. 
W metodzie dany obiekt będzie atakował obiekt who. 
Po celnym ataku obiekt who powinien stracić tyle punktów życia, ile atakujący ma siły. 
To czy atak się uda możemy wyliczyć za pomocą wzoru Math.random() < 0.5. 
Dodatkowo metoda ta powinna wstawiać do tablicy log informacje kto kogo zaatakował 
i ile walczącym postaciom pozostało życia.

Stwórz dwie tablice: log oraz fighters. 
Do tej pierwszej będziesz zapisywał informacje o akcjach. 
Do tej drugiej wstaw wojowników, których stworzysz na bazie klasy Fighter. 
Każdy wojownik powinien mieć unikalną nazwę pobraną z tablicy names, 
życie na poziomie 20, oraz siłę 3. Możesz tutaj poeksperymentować z parametrami.

Napisz funkcję getFighter(), która będzie wybierać z tablicy nowego wojownika i go zwracać.

Stwórz dwie dodatkowe zmienne np. leftFighter i rightFighter początkowo ustawione na null.

Mamy już w zasadzie wszystko co potrzebne. Czas rozpocząć turniej. 
Rozegramy go w zapętlonej postaci. Możesz do tego wykorzystać poniższy fragment kodu:

function loop() {
    //coś tam dłubię i wyliczam

    if (koniec) {
        return false;
    }

    setTimeout(() => loop(), 100);
}

loop();
Wewnątrz pętli twoim zadaniem będzie:

Jeżeli to konieczne pod zmienne leftFighter i rightFighter pobierz nowych wojowników
walka to losowa wymiana ciosów wykorzystująca metodę attack każdego z walczących wojowników. 
Dla dodania losowości ponownie możemy tutaj użyć równania Math.random() < 0.5
jeżeli życie walczącej postaci dojdzie do zera, ustaw ją na null, 
a jej przeciwnikowi przywróć życie do początkowej wartości (20).
wyświetl log. Wykorzystaj tutaj console.log() i console.clear()
sprawdź czy po wymianie ciosów któryś z walczących wojowników jest równy nullowi 
oraz czy w tablicy pozostały jeszcze jakieś postacie. Jeżeli tablica jest pusta, 
oznacza to, że na polu walki pozostał zwycięzca. Dodaj odpowiednią informację do loga i 
zakończ turniej zwracając false. */
