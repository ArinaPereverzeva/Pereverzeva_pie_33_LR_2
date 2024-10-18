let A = parseFloat(prompt("Введите первое число:")); // Пользователь вводит первое число
let B = parseFloat(prompt("Введите второе число, неравное нулю:")); // Пользователь вводит второе число
		
// Задаем переменные (сумма, разность, произведение и частное), которые будут являться вещественными числами
let sum = parseFloat(Math.abs(A) + Math.abs(B));
let difference = parseFloat(Math.abs(A) - Math.abs(B));
let product = parseFloat(Math.abs(A) * Math.abs(B));
let quotient = parseFloat( Math.abs(A) / Math.abs(B) );

// Выводим результаты
alert("Первое число: " + A + "\n Второе число: " + B + "\n Сумма модулей: " + sum + "\n Разность модулей: " + difference + "\n Произведение модулей: " + product + "\n Частное модулей: " + quotient);
