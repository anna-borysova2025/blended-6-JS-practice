// taks 1
// 1 - отримай body елемент і виведи його в консоль;
const bodyEl = document.querySelector("body");
console.log(bodyEl);
// 2 - отримай елемент id="title" і виведи його в консоль;
const titleEl = document.querySelector("#title");
console.log(titleEl);
// 3 - отримай елемент class="list" і виведи його в консоль;
const listElem = document.querySelector(".list");
console.log(listElem);
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const allDataElem = document.querySelectorAll("[data-topic]");
console.log(allDataElem);
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

const firstElem = allDataElem[0];
console.log(firstElem);
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

const lastElem = allDataElem[allDataElem.length - 1];
console.log(lastElem);
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const nextElem = titleEl.nextElementSibling;
console.log(nextElem);
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const allHeadings = document.querySelector("h3");
console.log(allHeadings);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка
//  на червоний колір

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation"
// і виведи його в консоль;
const liElem = document.querySelector('li[data-topic="navigation"]');
// console.log(liElem);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і
// зроби його backgroundColor жовтим
liElem.style.backgroundColor = "yellow";
console.log(liElem);

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст
// на "Я змінив тут текст!".
const dataTopicElem = document.querySelector("p");
dataTopicElem.innerHTML = "Я змінив тут текст!";
console.log(dataTopicElem);

// 13 - створи const currentTopic = "manipulation"; після цього знайди
//  елемент у якогоо атрибут data-topic має значення, яке зберігається у
// змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const currentEl = document.querySelector(`[data-topic = ${currentTopic}]`);

// console.log(currentEl);
// 14 - додай до знайденого елемента атрибут style і зроби його
// backgroundColor блакитним;
currentEl.style.backgroundColor = "blue";
console.log(currentEl);
// 15 - знайти в документі заголовок, який має class="completed" і
// виведи його в консоль;
const titleElem = document.querySelector(".completed");
console.log(titleElem);
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const completedTitle = document.querySelector("h3.completed");
const liToRemove = completedTitle.closest("li");
liToRemove.remove();
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай
// йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const titleNewElem = document.querySelector("h1");
const newParagraf = document.createElement("p");
newParagraf.textContent = "Об'єктна модель документа (Document Object Model)";
titleNewElem.after(newParagraf);
console.log(newParagraf);
// 18 - додай новий елемент списку у кінець списка, його заголовок
// це - "Властивість innerHTML" а опис (р) -
// "Ще один спосіб створити DOM-елементи і помістити їх в
// дерево - це використовувати рядки з тегами і дозволити
// браузеру зробити всю важку роботу". тобто, потрібно створити
// елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

const listElem1 = document.querySelector(".list");

const newLi = document.createElement("li");
const newTitle = document.createElement("h3");
const newParagraph = document.createElement("p");

newTitle.textContent = "Властивість innerHTML";
newParagraph.textContent =
  "Ще один спосіб створити DOM-елементи і помістити їх в дерево — це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.";

newLi.append(newTitle, newParagraph);

listElem1.append(newLi);

console.log(newLi);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const listElemNew = document.querySelector(".list");

const newItemHTML = `
  <li data-topic="innerhtml">
    <h3>Властивість innerHTML</h3>
    <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево — це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.</p>
  </li>
`;

listElemNew.insertAdjacentHTML("beforeend", newItemHTML);

// 20 - очисти список
listElemNew.innerHTML = "";

// task 2
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// task 3
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

// task 4
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
