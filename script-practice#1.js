// pr 1

// let user = {};          // 1. Створення порожнього об'єкту user
//     user = { 
//         name: 'Іван',   // 2. Додав властивість name зі значенням Іван 
//         surname: 'Сміт' // 3. Додав властивість surname зі значенням Сміт
// };
// console.log(user);
// user.name = 'Петро';    // 4. Змінив значення на Петро
// console.log(user);
// delete user.name        // 5. Видалив властивість name
// console.log(user);

// // 2 photo

// let schedulte = {};
//     schedulte = {surname: 'Сміт', 1: '2', 2: '3'};


// function isEmpty(obj) {  // думаю правильний варіант ось цей
//     for(let item in obj){
//         return false
//     }
//     return true
// } 
    

// console.log(isEmpty(schedulte)); 



// // 3 photo


// let salaries = { // Створюємо об'єкт з властивостями Josh, Ann, Pete
//     Josh: 100, 
//     Ann: 160, 
//     Pete: 130,
// }

// let sum = 0; // Ствоємо змінну для підсумування всіх зарплат

// for(let item in salaries){ // за допомогою циклу перебираємо всі свойства об'єкту
//     sum += salaries[item] // в sum додаємо значення кожної властивості об'єкта salaries 100, 160, 130
// }

// console.log(sum); // якщо salaries буде порожній, то виведеться початкове значення 0
//                   // робив без перевірки так як для цього функціоналу думаю вона не потрібен


// // 4 photo

// let menu = {
//     width: 200, 
//     height: 300,
//     title: 'Моє меню'
// }

// function multiplyNumeric(obj) {
//     for(let item in obj){
//         if(typeof(obj[item]) == 'number'){ // перевіряємо чи значення властивості число
//             obj[item] *= 2 // якщо так, то множимо на 2
//         }else{
//             obj[item] = obj[item] // якщо ні, залишаємо таким як є
//         }
//     }
// }

// multiplyNumeric(menu)

// console.log(menu);

