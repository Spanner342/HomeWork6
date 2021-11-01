
// Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
// поиска и замены.

let str = 'aaa@bbb@ccc';

    str = str.replace(/@/gi, "!");

    console.log(str);

// В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
// дату в формат 31/12/2025.

let date = '2025-12-31'

    date = date.replace(/(2025)-(12)-(31)/, '$3/$2/$1');

    console.log(date);

// Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
// «javascript» тремя разными способами (через substr, substring, slice).
 
str = 'Я учу javascript!';

    console.log(str.substring(2,5));
    console.log(str.substring(6,16));

    console.log(str.substr(2,3));
    console.log(str.substr(6,10));

    console.log(str.slice(2,5));
    console.log(str.slice(6,16));

// Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
// из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let arry = [4, 2, 5, 19, 13, 0, 10];
    sum = 0;

    for(let i = 0; i < arry.length; i++) {
        sum += Math.pow(arry[i], 3);
    }

    sum = Math.sqrt(sum);
    console.log(sum);

// Даны переменные a и b. Отнимите от a переменную b и результат
// присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
// c записалось положительное значение. Проверьте работу скрипта при a и b,
// равных соответственно 3 и 5, 6 и 1.   

function positiveNumber (a, b) {
    let c = a - b;
    return Math.abs(c);
}

console.log(positiveNumber(1, 300));

// Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
// Для решения этой задачи напишите функцию, которая будет добавлять 0
// перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
// сделает 01.09.2014).

date = new Date();

function zero (number) {
    if (number > 0 && number < 10) {
        return '0' + number;
    } else {
        return number;
    }
}

date.setDate(1);
date.setMonth(3);
console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + zero(date.getDate()) + '.' + zero(date.getMonth() + 1) + '.' + date.getFullYear());

// Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
// найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
// количество раз, буква 'a'.

str = 'aa aba abba abbba abca abea';
let regexp = /a{1}b+a{1}/g;
    

    console.log(str.match(regexp));
