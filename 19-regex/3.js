/* Zadanie 1: Walidacja daty w formacie “DD-MM-YYYY”
Napisz wyrażenie regularne, które sprawdzi, czy podany ciąg tekstowy jest poprawną datą w formacie “DD-MM-YYYY”, uwzględniając:
	•	Dni od 01 do 31.
	•	Miesiące od 01 do 12.
	•	Lata od 1000 do 9999.
Przykładowe pasujące dane:
	•	01-01-2024
	•	31-12-1999
Nie pasujące:
	•	32-01-2024 (dni poza zakresem)
	•	00-12-2023 (dni muszą być od 01)
	•	15-13-2024 (miesiące poza zakresem) */

const date = "31-12-1991";
const regex11 = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-([1-9][0-9]{3}$)/;
console.log(regex11.test(date));

/* Zadanie 2: Wyodrębnianie hashtagów z tekstu
Napisz wyrażenie regularne, które znajdzie wszystkie hashtagi w podanym tekście. Hashtag:
	•	Zaczyna się od #.
	•	Może zawierać tylko litery, cyfry i podkreślenia (_).
	•	Kończy się na granicy słowa.
Przykładowy tekst:
#HelloWorld is trending! Check out #regex_challenge and #100DaysOfCode.
Oczekiwany wynik:
	•	#HelloWorld
	•	#regex_challenge
	•	#100DaysOfCode
Nie powinny pasować fragmenty z nieprawidłowymi hashtagami, np. #Hello! (zawiera niedozwolony znak !). */

const text7 =
  "#HelloWorld is trending! Check out #regex_challenge and #100DaysOfCode.";
const regex12 = /#\w+\b/g;
const regex13 = /#\w+(?=\s|$)/g;
console.log(text7.match(regex12));

/* Zadanie 3: Walidacja adresu e-mail
Napisz wyrażenie regularne, które sprawdzi, czy podany ciąg jest poprawnym adresem e-mail. Adres e-mail musi spełniać następujące warunki:
	1.	Przed @ mogą znajdować się litery, cyfry, kropki (.), myślniki (-) i podkreślenia (_).
	2.	Po @ musi być nazwa domeny składająca się z liter i cyfr, przedzielona kropkami.
	3.	Domena najwyższego poziomu (np. .com, .org, .io) musi mieć od 2 do 6 znaków.
Przykładowe pasujące adresy:
	•	example@gmail.com
	•	john_doe123@my-domain.org
	•	regex.master@regex101.io
Nie pasujące:
	•	example@gmail (brak domeny najwyższego poziomu)
	•	@gmail.com (brak lokalnej części przed @)
	•	john.doe@domain.toolong (domena najwyższego poziomu za długa) */

const email2 = "john.doe123@my-domain.com";
const regex14 =
  /^[a-z0-9]+([\_\.\-][a-z0-9]+)*@[a-z0-9]+([\.\-][a-z0-9]+)*\.([a-z0-9]{2,6})/i;
console.log(regex14.test(email2));
