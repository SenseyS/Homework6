// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"
const content = document.getElementById('content');
console.log(content);

// b) отримує текст з блоку з id "rules"
const rules = document.getElementById('rules');
console.log(rules);

// c) замініть текст параграфа з id 'content' на будь-який інший
content.innerText = 'Fight club';

// d) замініть текст параграфа з id 'rules' на будь-який інший
rules.innerText = 'Rules of Fight club';

// e) змініть кожному елементу колір фону на червоний
content.style.backgroundColor = 'red';
rules.style.backgroundColor = 'red';

// f) змініть кожному елементу колір тексту на синій
content.style.backgroundColor = 'blue';
rules.style.backgroundColor = 'blue';
// g) отримати весь список класів елемента з id=rules і вивести їх в console.log
let contentClass = document.getElementsByClassName('fc bp');
console.log(contentClass);

// h) отримати всі елементи з класом fc_rules
let classInUl = document.getElementsByClassName('fc_rules');
console.log(classInUl);

// i) поміняти колір тексту у всіх елементів fc_rules на червоний
for (const allClass of classInUl) {
    allClass.style.color = 'red';
}


let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Вставити цей блок на сторінку
for (const user of users) {
    console.log(user);
    const userDiv = document.createElement('div');
    userDiv.innerHTML = `Імя : ${user.name} <br> Вік: ${user.age}`;
    userDiv.style.margin = '20px';
    userDiv.style.border = '2px solid grey';
    document.body.appendChild(userDiv);
}

// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості
for (const user of users) {
    console.log(user);
    const userDiv = document.createElement('div');
    const userDivX = document.createElement('div');
    userDiv.innerHTML = `Імя : ${user.name} <br> Вік: ${user.age}`;
    userDivX.innerHTML = `Адреса : <br> <div style="border: 2px solid darkred">${user.address.city}</div> <br> <div style="border: 2px solid darkred">${user.address.country}</div> <br> <div style="border: 2px solid darkred">${user.address.street}</div> <br> <div style="border: 2px solid darkred">${user.address.houseNumber}</div>`;
    userDiv.style.margin = '20px';
    userDiv.style.border = '2px solid grey';
    document.body.appendChild(userDiv);
    document.body.appendChild(userDivX);
    userDivX.style.margin = '20px';
    userDivX.style.border = '2px solid blue';


}