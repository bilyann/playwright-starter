# Generated Guest Suite (G1-G4)

## G1: Guest opens Garage
- **Передумова**: Відкрита головна сторінка.
- **Крок 1**: Натиснути кнопку "Guest log in".
- **Очікуваний результат**: URL містить `/panel/garage`, видимий заголовок "Garage".
- **Джерело**: `specs/guest-garage.md`.

## G2: Guest adds a car
- **Передумова**: Виконано G1.
- **Тестові дані**: Brand: `Audi`, Model: `TT`, Mileage: `12000`.
- **Крок 1**: Натиснути "Add car".
- **Крок 2**: Обрати Brand "Audi", Model "TT", ввести Mileage "12000".
- **Крок 3**: Натиснути "Add".
- **Очікуваний результат**: У Garage відображається "Audi TT".
- **Джерело**: `specs/add-car.md`.

## G3: Guest adds fuel expense
- **Передумова**: Виконано G2.
- **Тестові дані**: Liters: `10`, Total cost: `100`, Mileage: `12200`.
- **Крок 1**: Натиснути кнопку додавання витрат на картці авто (або "Add fuel expense").
- **Крок 2**: Ввести Mileage "12200", Liters "10", Total cost "100".
- **Крок 3**: Натиснути "Add".
- **Очікуваний результат**: Перехід до розділу "Fuel expenses", запис присутній у таблиці.
- **Джерело**: ASSUMPTION (типовий флоу QAuto).

## G4: Guest searches for instructions
- **Передумова**: Виконано G1.
- **Тестові дані**: Brand: `BMW`, Model: `X5`.
- **Крок 1**: Перейти до розділу "Instructions" через бічне меню.
- **Крок 2**: Обрати Brand "BMW", Model "X5".
- **Крок 3**: Натиснути кнопку "Search".
- **Очікуваний результат**: Відображається список інструкцій для BMW X5.
- **Джерело**: ASSUMPTION (типовий флоу QAuto).
