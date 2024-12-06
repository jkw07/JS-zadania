/* Stwórz konstruktor/klasę User. Każdy obiekt budowany na jego bazie powinien mieć właściwości:

nick - string
name - string
surname - string
email - string
role - string - typ użytkownika - "editor", "reader", "admin"
loginDates - tablica - początkowo pusta - z datami kolejnych logowań
active - boolean - domyślnie ustawione na true - czy dany użytkownik jest aktywny
Właściwości nick, name, surname, email, role powinny być podawane podczas tworzenia pojedynczego obiektu.

Dodaj także metody:

logIn(), która wstawi do tablicy loginDates nową datę logowania. Aktualną datę możesz pobrać za pomocą kodu new Intl.DateTimeFormat('pl-PL', { dateStyle: 'full', timeStyle: 'long' }).format(new Date())
showLoginDates(), która w pętli pokaże wszystkie daty logowań
showDetails(), która robiąc pętlę po kluczach wypisze w konsoli wszystkie informacje o danym użytkowniku
toggleActive(active), która przełączy właściwość active na odwrotną wartość.
Stwórz tablicę users i dodaj do niej 3 obiekty utworzone na bazie powyższej klasy. Poeksperymentuj z ich metodami. */
