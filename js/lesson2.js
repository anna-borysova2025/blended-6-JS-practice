// // Створіть масив styles з елементами 'jazz' і 'blues'
// // Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// // Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// // Напишіть функцію logItems(array), яка приймає масив як аргумент
// // і виводить у консоль кожен його елемент у форматі:
// // "<номер елемента> - <значення елемента>".
// // Використайте цикл for для перебору елементів масиву.
// // Нумерація елементів повинна починатися з 1 (а не з 0).
// // const styles = ["jazz", "blues"];
// // styles.push("rock-n-roll");
// // const index = styles.indexOf("blues");
// // styles[index] = "classic";
// // console.log(styles);
// // function logItems(array) {
// //   for (let i = 0; i < array.length; i += 1) {
// //     console.log(`${i + 1} - ${array[i]}`);
// //   }
// // }

// // Завдання 2:
// // Напишіть функцію checkLogin(array), яка:
// // Приймає масив логінів як аргумент.
// // Запитує ім'я користувача через prompt.
// // Перевіряє, чи є введене ім'я у переданому масиві.
// // Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// // Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// // const logins = ["Peter", "John", "Igor", "Sasha"];
// // function checkLogin(array) {
// //   const userName = prompt("Enter your login");
// //   if (array.includes(userName)) {
// //     alert(`Welcome, ${userName}!`);
// //   } else {
// //     alert("User not found");
// //   }
// // }
// // console.log(checkLogin(logins));

// // Завдання 3:
// // Напишіть функцію caclculateAverage(),
// // яка приймає довільну кількість
// // аргументів і повертає їхнє середнє значення.
// // Додайте перевірку, що аргументи - це числа.
// // function caclculateAverage() {
// //   const args = Array.from(arguments);
// //   let sum = 0;
// //   let count = 0;
// //   for (const arg of args) {
// //     if (typeof arg === "number") {
// //       sum += arg;
// //       count += 1;
// //     }
// //   }
// //   return count > 0 ? sum / count : 0;
// // }
// // console.log(
// //   caclculateAverage(1, 2, 3, 4, 785, "hello", true, 106, 7, 108, 9, 10)
// // );

// // Завдання 4:
// // Напишіть функцію, яка сумуватиме сусідні числа
// // і пушитиме їх в новий масив.

// // const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// // уточнення: складати необхідно перше число з другим, потім друге - з третім,
// // третє - з четвертим і так до кінця.
// // В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].
// // function sumNeighbors(arr) {
// //   const result = [];
// //   for (let i = 0; i < arr.length - 1; i++) {
// //     result.push(arr[i] + arr[i + 1]);
// //   }
// //   return result;
// // }

// // Завдання 5:
// // Напишіть функцію findSmallestNumber(numbers),
// // яка шукає найменше число в масиві.
// // Додайте перевірку, що функція отримує саме масив, і
// // якщо функція отримує масив - поверніть з функції найменше число,
// // в іншому випадку - поверніть 'Sory, it is not an array!'.

// // const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// // завдання 6:
// // Напишіть функцію findLongestWord(string), яка
// // приймає довільний рядок, що складається лише зі слів, розділених
// // пробілами (параметр string), і повертатиме найдовше слово у реченні.

// // Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// // console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// function findLongestWord(string) {
//   const words = string.split(" ");
//   let longestWord = "";

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// // завдання 7:
// // Напишіть скрипт, який для об'єкту user, послідовно:
// // 1 - додасть поле mood зі значенням 'happy',
// // 2 - замінить hobby на 'skydiving',
// // 3 - замінить значення premium на false,
// // 4 - виведе зміст об'єкта user у форматі
// // '<ключ>:<значення>' використовуя Object.keys() та for...of

// // const user = {
// //   name: "John",
// //   age: 20,
// //   hobby: "tenis",
// //   premium: true,
// // };

// // завдання 8:
// // Є об'єкт, в якому зберігаються зарплати команди
// // Напишіть код для додавання усіх зарплат та
// // збережіть його результат в змінній sum.
// // Якщо об'єкт salaries пустий, то результат має бути 0

// // const salaries = {
// //   Mango: 100,
// //   Poly: 160,
// //   Ajax: 1470,
// // };
// // Object.values(salaries);
// // let sum = 0;

// // for (const salary of Object.values(salaries)) {
// //   sum += salary;
// // }
// // console.log(sum);

// // завдання 9:
// // Створіть об'єкт calculator з наступними методами:
// // read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// // sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// // mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// // винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// // Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// // методи sum і mult мають повертати рядок 'No such propeties'

// // Функція makeMessage приймає один параметр ім'я піци, що доставляється,
// //  pizzaName та повертає рядок з повідомленням клієнту.

// // Доповни функцію makeMessage таким чином,
// // щоб вона очікувала другим параметром (параметр callback) колбек-функцію і
// // повертала результат її виклику. Функції deliverPizza або makePizza будуть
// // передаватися як колбек для makeMessage і очікувати аргументом ім'я
// // // готової піци, що доставляється.

// // function deliverPizza(pizzaName) {
// //   return `Delivering ${pizzaName} pizza.`;
// // }

// // function makePizza(pizzaName) {
// //   return `Pizza ${pizzaName} is being prepared, please wait...`;
// // }

// // function makeMessage(pizzaName, callback) {
// //   return callback(pizzaName);
// // }

// // Виконай рефакторинг функції calculateTotalPrice(orderedItems),
// // замінивши її оголошення на стрілочну функцію. Також заміни колбек-функцію,
// // передану в метод forEach(), на стрілочну функцію.

// // const calculateTotalPrice = (orderedItems) => {
// //   let totalPrice = 0;

// //   orderedItems.forEach((item) => {
// //     totalPrice += item;
// //   });

// //   return totalPrice;
// // }

// // const filterArray = (numbers, value) => {
// //   const filteredNumbers = [];

// //   numbers.forEach((number) => {
// //     if (number > value) {
// //       filteredNumbers.push(number);
// //     }
// //   });

// //   return filteredNumbers;
// // };
// // Функція changeEven(numbers, value) приймає масив чисел numbers і
// // оновлює кожен елемент, значення якого - це парне число, додаючи
// // до нього значення параметра value, який точно є числом.

// // Виконай рефакторинг функції таким чином, щоб вона стала чистою -
// // не змінювала масив чисел numbers, а створювала, наповнювала і
// // повертала новий масив з оновленими значеннями.

// // const changeEven = (numbers, value) => {
// //   const newArray = [];
// //   for (let i = 0; i < numbers.length; i += 1) {
// //     if (numbers[i] % 2 === 0) {
// //   newArray.push(numbers[i] + value);
// //     } else {
// //       newArray.push(numbers[i]);
// //     }
// //   }

// //   return newArray;
// // };

// // В масиві planets зберігаються назви планет. Доповни код таким чином,
// // щоб у змінній planetsLengths вийшов масив, що буде складатися з довжин
// // назв кожної планети з масиву planets. Обов'язково використовуй метод map().

// // Оголошена змінна planets
// // Значення змінної planets - це масив ["Earth", "Mars", "Venus", "Jupiter"]
// // Оголошена змінна planetsLengths
// // Значення змінної planetsLengths - це масив [5, 4, 5, 7]

// // const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // const planetsLengths = planets.map(planet => planet.length);
// // Для перебирання масиву планет використаний метод map()

// // Масив books містить колекцію об'єктів книг, кожен з яких містить
// // властивість genres, значенням якої є масив жанрів. Використовуючи метод
// // flatMap(), зроби так, щоб у змінній genres вийшов масив жанрів усіх книг
// // (властивість genres) з масиву books.

// // Оголошена змінна books
// // Значення змінної books - це масив об'єктів
// // Оголошена змінна genres
// // Значення змінної genres - це масив ["adventure", "history", "fiction", "horror", "mysticism"]
// // Для перебирання масиву books використовується метод flatMap()
// // Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання. [ { name: "Moore Hensley", email: "moorehensley@indexia.com", eyeColor: "blue", friends: ["Sharron Pace"], isActive: false, balance: 2811, skills: ["ipsum", "lorem"], gender: "male", age: 37, }, { name: "Sharlene Bush", email: "sharlenebush@tubesys.com", eyeColor: "blue", friends: ["Briana Decker", "Sharron Pace"], isActive: true, balance: 3821, skills: ["tempor", "mollit", "commodo", "veniam", "laborum"], gender: "female", age: 34, }, { name: "Ross Vazquez", email: "rossvazquez@xinware.com", eyeColor: "green", friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"], isActive: false, balance: 3793, skills: ["nulla", "anim", "proident", "ipsum", "elit"], gender: "male", age: 24, }, { name: "Elma Head", email: "elmahead@omatom.com", eyeColor: "green", friends: ["Goldie Gentry", "Aisha Tran"], isActive: true, balance: 2278, skills: ["adipisicing", "irure", "velit"], gender: "female", age: 21, }, { name: "Carey Barr", email: "careybarr@nurali.com", eyeColor: "blue", friends: ["Jordan Sampson", "Eddie Strong"], isActive: true, balance: 3951, skills: ["ex", "culpa", "nostrud"], gender: "male", age: 27, }, { name: "Blackburn Dotson", email: "blackburndotson@furnigeer.com", eyeColor: "brown", friends: ["Jacklyn Lucas", "Linda Chapman"], isActive: false, balance: 1498, skills: ["non", "amet", "ipsum"], gender: "male", age: 38, }, { name: "Sheree Anthony", email: "shereeanthony@kog.com", eyeColor: "brown", friends: ["Goldie Gentry", "Briana Decker"], isActive: true, balance: 2764, skills: ["lorem", "veniam", "culpa"], gender: "female", age: 39, }, ]; Доповни стрілочну функцію getUserEmails(users) таким чином, щоб вона повертала масив поштових адрес користувачів (властивість email) з масиву об'єктів в параметрі users. Оголошена змінна getUserEmails Змінній getUserEmails присвоєна стрілочна функція з параметром (users) Для перебирання параметра users використовується метод map() Виклик функції із зазначеним масивом користувачів повертає масив ["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]
// // const getUserEmails = (users) => users.map(user => user.email);

// // // Функція getUsersWithFriend(users, friendName) приймає масив об'єктів
// // // користувачів і ім'я друга. Повертає масив користувачів, у яких є
// // // друг з ім'ям в параметрі friendName. Масив друзів користувача зберігається
// // // у властивості friends.
// // const getUsersWithFriend = (users, friendName) => {
// //   return users.filter(user => user.friends.includes(friendName));
// // };
// Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
// //     balance: 2764,
// //     gender: "female"
// //   }
// // ]
// // Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона повертала масив користувачів, у яких колір очей (властивість eyeColor) збігається зі значенням другого параметра color.

// // Оголошена змінна getUsersWithEyeColor
// // Змінній getUsersWithEyeColor присвоєна стрілочна функція з параметрами (users, color)
// // Для перебирання параметра users використовується метод filter()
// // Якщо значення параметра color - це "blue", функція повертає масив об'єктів користувачів з іменами Moore Hensley, Sharlene Bush і Carey Barr
// // Якщо значення параметра color - це "green", функція повертає масив об'єктів користувачів з іменами Ross Vazquez і Elma Head
// // Якщо значення параметра color - це "brown", функція повертає масив об'єктів користувачів з іменами Blackburn Dotson і Sheree Anthony
// // Якщо значення параметра color - це будь-який інший рядок, функція повертає порожній масив

// // const getUsersWithEyeColor = (users, color) => {
// //   return users.filter(user => user.eyeColor === color);
// // }
