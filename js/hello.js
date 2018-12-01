// JavaScript 註解
// 變數

// 字串 String
// 把"Hello"這筆資料設定給變數greeting這個variable
var greeting = 'Hello';
var name = "John";
var city = "台北"
// Hello,我是John來自台北
console.log(greeting + ",我是" + name + "來自" + city)
city = "台中";
console.log(`${greeting},我是${name}來自${city}`)

// console.log(greeting);
// 在瀏覽器的console印出內容
// console.log(greeting + " World");
// typeof 變數名稱: 檢查變數儲存的資料型別
// console.log(typeof greeting);

// 數字 Number
var number1 = 20;
var number2 = 4;
var number3 = "4";
// 四則運算
// console.log(number1 + number2);
// console.log(number1 - number2);
// console.log(number1 * number2);
// console.log(number1 / number2);
// 取得餘數
// 取得number1除number2的餘數
// console.log(number1 % number2);
// console.log(number1 + number3);

// 布林 Boolean
// true, false
var number4 = 10;
var number5 = 1;
// number4有大於number5嗎？
console.log(number4 >= number5);
console.log(number4 <= number5);
// 問是否相等 ===
console.log(number4 === number5);
// 問是否不相等 !==
console.log(number4 !== number5);

var number6 = 49;
// 如果number6是奇數 就印出number6是奇數
// 如果number6是偶數 就印出number6是偶數
if (number6 % 2 === 1) {
    // 當number6除2的餘數等於1時,要做的事情...
    console.log(`${number6}是奇數`);
} else {
    // 當if不是true的時候執行的動作
    console.log(`${number6}是偶數`);
}

var score = 92;
var rank;
// >= 95 => A+
// >= 80 => A
// >= 60, < 80 => B
// < 60 => F
if (score >= 95) {
    rank = "A+";
} else if (score >= 80 && score < 95) {
    rank = "A";
} else if (score >= 60 && score < 80) {
    rank = "B";
} else {
    rank = "F";
}
console.log(`分數:${score},排名:${rank}`);