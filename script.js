// bananas start

let bananas = +prompt('Введите любое число');

if (bananas == 1) {
    alert(bananas + ' banana')
}
else if (bananas == bananas) {
    alert(bananas + ' bananas')
}
else {
    alert('Попробуйте ввести число заново')
}

// bananas end

// even start
let num = +prompt('введите число')
if (isNaN(num)) {
    console.log('Пожалуйста, введите корректное число.');
}
let sum = 0;

for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
alert('Сумма всех четных чисел до ' + num + ' равна: ' + sum);


// even end

// degree start

do {
    var number = +prompt('Введите число');
    var degree = +prompt('Введите степень');

    if (number < 0 || degree < 0) {
        alert('Введите значение  заново');
    }
} while (isNaN(number) || isNaN(degree) || number < 0 || degree < 0);

let answer = 1;
for (let i = 1; i <= number || i <= degree; i++) {
    answer = number ** degree
}
alert(answer);

// degree end 