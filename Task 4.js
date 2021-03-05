/*Задание 4
Напишите функцию, которая принимает параметром строку и возвращает массив
 со всеми объектами, в имени которых эта строка содержится
*/
const arr =
[
  {name: 'Jonny Walker', birthDate: '1995-12-17'},
  {name: 'Andrew', birthDate: '2001-10-29'},
  {name: 'Viktor', birthDate: '1998-11-09'},
  {name: 'Andrew', birthDate: '2011-05-09'}
];
searchByName('Andrew');
/* Вариант 1
function searchByName(name){
  let result = [];
  for (let obj of arr){
    let a=obj.name;
    if (obj.name===name) result.push(obj);
  }
  return result;
}
*/

// Вариант 2
function searchByName(name){
  let result = arr.filter(item => item.name===name);
  return result;
}