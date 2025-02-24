## BonjourScanner
#### English description below

<br>

![BonjourScanner_desktop](https://github.com/user-attachments/assets/f2ea0b24-689f-4890-8f7b-5aded69327d1)

https://bonjour-scanner.netlify.app/
### Opis / Description

Strona obsługuje stan asortymentu magazynu z odzieżą. Została zbudowana w React.js z wykorzystaniem Bootstrap i Sass. Pobiera dostępne produkty z bazy MongoDB, a następnie wyświetla informacje na temat danego produktu w formie tekstu i kodu QR. Dane te obejmują m.in. rodzaj odzieży, kolor, pozostałą ilość, a także firmę przewozową. Pracownicy mogą edytować te informacje, a także całkowicie usuwać produkty z systemu. Kod QR, zawierający dane produktu w formacie JSON, może zostać zeskanowany przez dedykowaną aplikację mobilną zbudowaną - [BonjourScanner App](https://github.com/Kicknee/bonjourScannerApp). Dzięki temu pracownik może udać się do wskazanego przez aplikację miejsca w magazynie i zaznaczyć, ile sztuk danego produktu bierze do wysyłki. Po podaniu liczby aplikacja zaktualizuje bieżący stan asortymentu w bazie MongoDB.
<br><br>
The website manages the inventory of a clothing warehouse. It is built with React.js, using Bootstrap and Sass. It retrieves available products from a MongoDB database and displays information about each product in text and QR code format. This data includes details such as the type of clothing, color, remaining quantity, and shipping company. Employees can edit this information or delete products from the system entirely. The QR code, containing product data in JSON format, can be scanned using a dedicated mobile app built with React Native – [BonjourScanner App](https://github.com/Kicknee/bonjourScannerApp). With this app, employees can navigate to the location specified by the system and mark the number of products they are picking for shipment. Once the quantity is entered, the app updates the current inventory in the MongoDB database.

---

![Zrzut ekranu 2025-02-24 005856](https://github.com/user-attachments/assets/e1cba6b4-d2c6-48e8-807f-b60257bc6716)
*Główna strona z listą dostępnych produktów po lewerj i szczegółami wybranego produktu po prawej / Home page with a list of available products on the left and details of the selected product on the right*

---

![Zrzut ekranu 2025-02-24 010033](https://github.com/user-attachments/assets/756e5c38-784d-44ef-9993-69d30a14c556)
*Możemy zawęzić wyniki wyszukiwania do interesującego na produktu na podstawie stylu / We can narrow down the search results based on the style of our product*

---

![Zrzut ekranu 2025-02-24 005942](https://github.com/user-attachments/assets/3b5589e9-23af-493a-aa57-2446cf423e81)
*Możemy wprowadzić do bazy nowy produkt / We can enter a new product into the database*

---

![Zrzut ekranu 2025-02-24 025240](https://github.com/user-attachments/assets/20ac6a78-d1a7-4d96-be9d-e714875cc55a)![BonjourScanner_mobile](https://github.com/user-attachments/assets/4b7d4ac1-96fb-47d4-8af8-414902bb3791)
<br>*Mobilna wersja / Mobile version*

---
