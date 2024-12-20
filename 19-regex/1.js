/* Napisz wyrażenie regularne, które znajdzie słowo “cat” w ciągu tekstowym.
Przykład:
• Dla tekstu: "I have a cat and a dog", wyrażenie powinno zwrócić true.
• Dla tekstu: "I have a dog", wyrażenie powinno zwrócić false. */

const text1 = "I have a cat and a dog";
const text2 = "I have a dog";
const regex1 = /cat/;
console.log(regex1.test(text1));
console.log(regex1.test(text2));

/* Zadanie 2: Sprawdzanie numeru telefonu
Stwórz wyrażenie regularne, które dopasuje polski numer telefonu w formacie 123-456-789.
Przykład:
• "123-456-789" → Pasuje
• "123456789" → Nie pasuje
• "12-3456-789" → Nie pasuje */

const phoneNumber = "123-456-789";
const regex2 = /\d{3}-\d{3}-\d{3}/;
console.log(regex2.test(phoneNumber));

/* Zadanie 3: Weryfikacja adresu e-mail
Napisz wyrażenie regularne, które zweryfikuje prosty adres e-mail. Załóż, że e-mail ma następującą strukturę:
• Część przed @ może zawierać litery, cyfry, kropki, myślniki, i podkreślniki.
• Część po @ musi mieć literę lub cyfrę na początku, a następnie kropkę i co najmniej dwuliterowy sufiks.
Przykład:
• "user.name123@example.com" → Pasuje
• "username@domain" → Nie pasuje
• "@domain.com" → Nie pasuje */

const email = "user.name123@example.com";
const regex3 = /([a-z0-9\.\-\_])@([a-z0-9]+)\.([a-z]{2,})/i;
console.log(regex3.test(email));

/* Zadanie 4: Znajdowanie słów w cudzysłowie
Stwórz wyrażenie regularne, które znajdzie wszystkie słowa otoczone podwójnymi cudzysłowami w ciągu tekstowym.
Przykład:
• Dla tekstu: "I said, "hello" to my friend and he replied, "hi"."
Wyrażenie powinno znaleźć "hello" i "hi". */

const text3 = 'I said, "hello" to my friend and he replied, "hi".';
const regex4 = /"[^"]+"/g;
console.log(text3.match(regex4));

/* Zadanie 5: Walidacja hasła
Stwórz wyrażenie regularne, które zweryfikuje hasło spełniające następujące kryteria:
1. Długość: co najmniej 8 znaków.
2. Zawiera przynajmniej jedną dużą literę.
3. Zawiera przynajmniej jedną małą literę.
4. Zawiera przynajmniej jedną cyfrę.
5. Może zawierać znaki specjalne (!, @, #, itd.), ale nie musi.
Przykład:
• "Password123" → Pasuje
• "password" → Nie pasuje
• "Pass123!" → Pasuje
• "12345678" → Nie pasuje */

const password = "Password123";
const regex5 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W]*).{8,}$/;
console.log(regex5.test(password));
