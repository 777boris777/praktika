// String.prototype.a = function () {
//     let str = this.toString()
//     console.log(str);
//     let b = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         b += str[i];
//     }
//     if (str === b) {
//         return true;
//     }
//     return false;
// }
// const a2 = str => str === str.split("").reverse().join("")
// let tiv = "545";
// console.log(a2(tiv));
// Array.prototype.myMap = function (func) {
//     let arr = []
//     for (let i = 0; i < this.length; i++) {
//         arr = [...arr, func(this[i], i)];
//     }
//     return arr;
// }
// console.log(arr.myMap(elem => {
//     return elem+1;
// }));
// let arr = ["1", "2", "3", "45745", "5225512"];
// Array.prototype.myFilter = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         // console.log(this[i]);
//         // console.log(callback(this[i]));
//         if (callback(this[i])) {
//             return this[i];
//         }
//     }
// }
// console.log(arr.myFilter(word => word.length > 6));
// function rekursia(tiv) {
//     let a = 1;
//     for (let i = 1; i <= tiv; i++) {
//         a *= i;
//     }
//     return a;
// }
// console.log(rekursia(5));
// https://edabit.com/challenge/xPBFGvKQfRFEyy4vx
// function validName(str) {
//     let str2 = "",
//         str3 = "",
//         isUpper;
//     str2 = str.split(" ");
//     if (str2.length < 2) return false;
//     for (let i = 0; i < str2.length; i++) {
//         console.log(str2[i]);
//         str3 = str2[i];
//         if (!isNaN(str3 * 1)) {
//             alert('character is numeric');
//         } else {
//             console.log(str3);
//             if (str3 == str3.toUpperCase()) {
//                 isUpper=true;
//             }
//             if (str3 == str3.toLowerCase()) {
//                 return false;
//             }
//         }
//     }
//     console.log(str2);
// }
// console.log(validName(prompt("your name")));
// let minute = document.getElementById("minute")
// let second = document.getElementById("second")
// function timer() {
//     let object = {
//         minute: 0,
//         second: 0
//     }
//     setInterval(() => {
//         object.second++;
//         if (object.second >= 60) {
//             object.second = 0;
//             object.minute++;
//         }
//         if (object.minute >= 60) {
//             object.minute = 0;
//         }
//         minute.innerHTML = object.minute < 10 ? "0" + object.minute : object.minute;
//         second.innerHTML = object.second < 10 ? "0" + object.second : object.second;
//         console.log(object);
//     }, 1000);
// }
// timer();
// let age = prompt("qani tarekan es ?", 18);
// let welcome;
// if (age > 18) {
//     welcome = function() {
//         alert("barev");
//     }
// } else {
//     welcome = function() {
//         alert("hajox");
//     }
// }
// welcome();
// let sum = (a, b) => a + b;
// let sum2 = (a, b) => {
//     return a + b;
// }
// let double = n => n * 2;
// let sayHi = () => alert("Hello!");
// alert(sayHi());
// let age = prompt("qani tarekan es ?", 18);
// const welcome = (age < 18) ?
//     () => alert("false") :
//     () => alert("true");
// welcome();
//const welcome = age => age < 18 ? console.log("false") : console.log("true");
//let sum =(a,b) => a+b;
//alert( sum(1, 2) );
//let double = n => n * 2;
//alert(double(3));
//let sayHi = () => alert("Hello!");
//alert( sayHi());
// let user = {
//     name: "boris",
//     age: 17
// };
// console.log(user);
// const user = {
//     name:"Boris",
//     age:17
// }
// const arr = [1,2,3,4,5]
// const man = {
//     sex:'male',
//     ...user,
// }
// const check = (...arr) => {
//     console.log(arr)
// }
// check(1,2,3,4,5,6,7)
// let user = {
//     name: "Иван",
//     age: 30
// };
// for (const key in user) {
//     console.log(key);
// }
// let user = {};
// const stugum = (user) => {
//     for (let key in user) {
//         return false;
//     }
//     return true;
// }
// let a ;
// console.log(!!a);
// console.log(stugum(user));
// let user = { name: "Иван" };
// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };
// Object.assign(user, permissions1, permissions2);
// console.log(user, permissions1, permissions2);
// let user = {
//     name: "Джон",
//     age: 30,
//     sayHi() {
//         console.log(this.name);
//     }
// };
// user.sayHi();
// let user = null;
// console.log(user?.address); // undefined
// console.log(user?.address.street); // undefined
// let user1 = {
//     name:"boris",
//     admin() {
//         console.log("Я администратор");
//     }
// }
// let user2 = {};
// user2.admin?.();
// user1.admin?.(); // Я администратор
// delete user1?.name
// console.log();
// let id1 = Symbol("id");
// let id2 = id1;
// console.log(id1.toString());
// let id = Symbol(41);
// console.log(id.description === "41"); 
// console.log(this)
// let user = {
//     name: "John",
//     money: 1000,
//     toString() {
//         return this.name;
//     },
//     valueOf() {
//         return this.money;
//     }
// };
// console.log(user); 
// console.log(user.toString()); // toString -> {name: "John"}
// console.log(+user); // valueOf -> 1000
// console.log(user + 500); // valueOf -> 1500
// const number = 7.3e9;
// const numberr = 7.3 * (10 ** 9)
// console.log(number == numberr);
Array.prototype.random = function () {
    for (let i = 0; i < this.length/2; i++) {
        let x = Math.floor(Math.random()*this.length) 
        let y = Math.floor(Math.random()*this.length) 
        let z = this[x]
        this[x] = this[y]
        this[y] = z
    }
    return this
}
let arr = [1,2,3,4,5,6,7,8,9]
console.log(arr.random())