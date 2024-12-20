/* Zadanie 1: Znajdowanie adresów URL
Napisz wyrażenie regularne, które znajdzie wszystkie poprawne adresy URL w tekście. Zakładamy, że adres URL:
	•	Zaczyna się od http:// lub https://.
	•	Może zawierać litery, cyfry, kropki i myślniki w domenie.
	•	Może mieć ścieżkę po domenie (np. /path/to/file).
Przykład:
	•	Tekst: "Odwiedź https://example.com i http://test-site.org/path."
Wynik: ["https://example.com", "http://test-site.org/path"] */

const text4 = "Odwiedź https://example.com i http://test-site.org/path.";
const regex6 = /(https?:\/\/)([a-zA-Z0-9\.\-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?/g;
console.log(text4.match(regex6));

/* Zadanie 2: Walidacja daty w formacie DD-MM-YYYY
Napisz wyrażenie regularne, które sprawdzi, czy data jest poprawna w formacie DD-MM-YYYY, gdzie:
	•	DD: od 01 do 31.
	•	MM od 01 do 12.
	•	YYYY: dowolny rok (minimum 4 cyfry).
Przykład:
	•	"12-09-2023" → Pasuje.
	•	"32-01-2022" → Nie pasuje.
	•	"01-13-2021" → Nie pasuje. */

const date = "07-07-1991";
const regex7 = /^(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[12])-\d{4,}$/;
console.log(regex7.test(date));

/* Zadanie 3: Walidacja numeru karty kredytowej
Stwórz wyrażenie regularne, które sprawdzi, czy ciąg jest poprawnym numerem karty kredytowej. Załóż, że:
	•	Numer ma 16 cyfr.
	•	Może być podzielony spacjami lub myślnikami co 4 cyfry (np. 1234-5678-1234-5678 lub 1234 5678 1234 5678).
	•	Nie zawiera innych znaków.
Przykład:
	•	"1234-5678-1234-5678" → Pasuje.
	•	"1234567812345678" → Pasuje.
	•	"1234 5678-1234-5678" → Nie pasuje. */

const creditCardNumber = "1234 5678 1234 5678";
const regex8 = /^(?:\d{4}-){3}(\d{4}$)|^(?:\d{4} ){3}(\d{4}$)|^(\d{16}$)/;
console.log(regex8.test(creditCardNumber));

/* Zadanie 4: Wyszukiwanie słów zaczynających się na literę
Napisz wyrażenie regularne, które znajdzie wszystkie słowa zaczynające się od litery a lub A. 
Słowo to ciąg znaków oddzielony spacją, przecinkiem, kropką lub końcem linii.
Przykład:
Tekst: "Alice and Bob are amazing."
Wynik: ["Alice", "and", "are", "amazing"] */

const text5 = "Alice and Bob are amazing and mazze.";
const regex9 = /\ba[a-z]*\b/gi;
console.log(text5.match(regex9));

/* Zadanie 5: Znajdowanie par nawiasów z tekstem w środku
Napisz wyrażenie regularne, które znajdzie wszystkie teksty w nawiasach okrągłych ( ).
Przykład:
Tekst: "To jest przykład (testowy) z kilkoma (nawiasami)."
Wynik: ["testowy", "nawiasami"] */

const text6 = "To jest przykład (testowy) z kilkoma (nawiasami).";
const regex10 = /\([^\)]+\)/g;
console.log(text6.match(regex10));
