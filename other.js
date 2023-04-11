
// 1) Створити функцію яка обробляє массив обєктів і вираховує площу фігури в обєкті (sizeA*sizeB),

// let figurs = [
//     {
//         figure:"Squar",
//         sizeA: 4,
//         sizeB: 4
//     },
//     {
//         figure:"Rectangle",
//         sizeA: 4,
//         sizeB: 8
//     }
// ]

console.log("1) Rectangles");

function rectangleInfo () {

    let arr = [];

    while (true) {

        let obj = {};
        let sizeA = Number(prompt(`1) Enter first side of rectangle #${arr.length + 1}:`));
        if(isNaN(sizeA) || sizeA === 0){
            break;
        }
        let sizeB = Number(prompt(`1) Enter second side of rectangle #${arr.length + 1}:`));
        if(isNaN(sizeB) || sizeB === 0) {
            break;
        }

        obj.figure = sizeA === sizeB ? "Square" : "Rectangle";
        obj.sizeA = sizeA;
        obj.sizeB = sizeB;

        arr.push(obj);
    }

    return arr;
}

// function builder (arr) {
//     for (let index of arr) {
//         console.log(index.figure);
//     }
// }

// builder(rectangleInfo());
let arr = rectangleInfo()

if(arr.length>0){
    arr.forEach((item)=>{

        console.log(`${item.figure}:`)

        let blocks = "";

        for(let i = 0; i < item.sizeA; i++){
            blocks+="*";
        }

        let evenIm = item.sizeB%2 === 0 ? true : false;

        if(evenIm === true){
            for(let i = item.sizeB/2; i > 0; i--){
                console.log(blocks);
                console.log(blocks+" ");
            }
        }
        else{
            for(let i = (item.sizeB-1)/2; i > 0; i--){
                console.log(blocks);
                console.log(blocks+" ");
            }
            console.log(blocks);
        }
    });
}
else{
    console.log("Array is empty or undone!");
}

// 2) Створіть новий массив за допомогою методів розглянутих на уроці в якому видалені всі  значення "Remove" ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"] в результаті повинен бути ось такий новий массив ["Keep", "Keep", "Keep", ...]

console.log("2) Remove");

arr = ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"];
console.log(arr.filter((value)=>value!=="Remove"))

// 3)Створіть конструктор CatConstructor який створює обєкт з ключати age, nema, bread ( порода ), color. Використайте цей конструктор щоб створити 3 кота

console.log("3) Cat editor");

function CatConstructor(name, age, breed, color){
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.color = color;
}
let cats = [];
for(let i = 1; true; i++){

    let name = String(prompt(`3) Enter your cat's ${i} name:`));
    if(name==="" || name === null){
        break;
    }
    let age = Number(prompt(`3) Enter your cat's age ${i} (number):`));
    if(isNaN(age)){
        break;
    }
    let breed = String(prompt(`3) Enter your cat's ${i} breed:`));
    if(breed==="" || breed === null){
        break;
    }
    let color = String(prompt(`3) Enter your cat's ${i} color:`));
    if(color==="" || color === null){
        break;
    }

    let cat = new CatConstructor(name, age, breed, color);
    console.log(cat);
    cats.push(cat);
}

// 4) Створіть масив, помістіть туди створених котів і відфільтруйте массив за віком котів

console.log("4) Search for a cat by age");

if(cats.length>0){
    let catSearchAge = Number(prompt("Enter age of cat:"));
    console.log(cats.filter((element) => element.age === catSearchAge));
}
else{
    console.log("The array does not have any cat");
}

// 5)Створіть змінну userMoney в якій розмістіть сумму гршей що має користувач. Використовуючи массив обєктів

console.log("5) Money");

let bank = [
    {
        currency: 'usa',
        price:38
    },
    {
        currency: 'eur',
        price:39
    },
    {
        currency: 'zlt',
        price:10
    }
]

let userMoney = Number(prompt("5) How much money do you have?:"));
userMoney = isNaN(userMoney) ? 0 : userMoney;
console.log(`You have ${userMoney} money`);

// CТворіть массив з  інформацію скільки валюти може отримати користувач з його збережень в форматі " за 76 грн ви можете отримати 2 usa " і т.д

bank.forEach(money => {
    console.log(`You can get ${Math.floor(userMoney/money.price)} ${money.currency}`);
});

// Додаткове завдання не обовязкове, але буде виконано перевірку:
// Напишіть гру камінь ножниці бумага. Де користувач вводить загадане слово,  а js  за допомогою random вибирає слово з масива. І повертає вам результат гри

console.log("Bonus game");

while(true){

    let person = String(prompt("камінь ножниці бумага:"));
    if(person === "камінь" || person === "ножниці" || person === "бумага"){
        let arr = ["камінь", "ножниці", "бумага"];
        let bot = arr[Math.floor(Math.random() * 3)];

        console.log(`You: ${person}`);
        console.log(`Bot: ${bot}`);

        let result =
        person === "камінь" && bot === "ножниці" ? "you win" :
        person === "ножниці" && bot === "бумага" ? "you win" :
        person === "бумага" && bot === "камінь" ? "you win" :
        person === bot ? "draw" : "you lose";

        console.log(`Result: ${result}`);
    }
    else{
        break;
    }
}

console.log("Alle ist DONE");