// bananas start

let bananas = +prompt('Введите любое число');

bananas === 1
    ? alert(bananas + ' banana')
    : bananas > 1
        ? alert(bananas + ' bananas')
        : alert('Попробуйте ввести число заново');

// bananas end

// even start
let num = +prompt('введите число')

let sum = 0;

for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
alert('Сумма всех четных чисел до ' + num + ' равна: ' + sum);
if (isNaN(num)) {
    alert('Пожалуйста, введите корректное число.');
}


// even end

// degree start

do {
    var number = +prompt('Введите число');
    var degree = +prompt('Введите степень'); 

    if (number <= 0 || isNaN(number) || degree <= 0 || isNaN(degree)) {
        alert('Введите значения заново');
    }
} while (number <= 0 || isNaN(number) || degree <= 0 || isNaN(degree));

let answer = number ** degree;
alert('Результат: ' + answer);

// degree end