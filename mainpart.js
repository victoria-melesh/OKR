//задание 2: в консоль сумму чисел от 1 до 50
function TASK1sumUpp()
{
    let sum = 0;
    for(let i = 1; i<=50; i++)
    {
        sum+=i;
    }
    return sum;
}
console.log(TASK1sumUpp());

//задание 3: вывод console.log(), объект с ключами-странами и х+значения-массивами городов
const arr = {
    "Беларусь": ["Минск", "Гродно", "Витебск"],
    "Россия": ["Москва", "Сибирь"],
    "Украина": ["Духань", "Киев"]
}
function TASK2make(arr)
{
    return Object.values(arr).flat().join(', ')
}
console.log(TASK2make(arr));

//задание 3: вывод в консоль объекта в котором категории будут ключами, а значениями - суммы всех value для каждой категории
const data = [
    {"category": "food", "value": 150},
    {"category": "transport", "value": 300},
    {"category": "food", "value": 75},
    {"category": "entertainment", "value": 500},
    {"category": "transport", "value": 120},
    {"category": "food", "value": 200}
];

function TASK3category(arr)
{
     return arr.reduce((result, item) => {
        const { category, value } = item;
        if (result[category]) {
            result[category] += value;
        } else {
            result[category] = value;
        }
        
        return result;
    }, {});
}
console.log(TASK3category(data));