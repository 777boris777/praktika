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
// Array.prototype.random = function () {
//     for (let i = 0; i < this.length / 2; i++) {
//         let x = Math.floor(Math.random() * this.length)
//         let y = Math.floor(Math.random() * this.length)
//         let z = this[x]
//         this[x] = this[y]
//         this[y] = z
//     }
//     return this
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(arr.random())
// const MyParsser = (str) => {
//     let num = ""
//     for (let i = 0; i < str.length; i++) {
//         if (isNaN(str[i])) {
//             return num ? +num : NaN
//         }
//         num += str[i]
//     }
//     return +num
// }
// console.log(MyParsser("120"))
// a = prompt()
// b = a.charCodeAt()
// if(122 >= b >= 97){
//     c = String.fromCharCode((b-32))
//     console.log(c);
// }
// const Upper = (str) => {
//     let upper = ''
//     for (let i = 0; i < str.length; i++) {
//         chartcode = str[i].charCodeAt()
//         if (122 >= chartcode && chartcode >= 97) {
//             upper += String.fromCharCode((chartcode - 32))
//             continue
//         } 
//         upper += str[i]
//     }
//     return upper
// }
// console.log(Upper("aF-dfDhj"))
// Array.prototype.MyPush = function (...element) {
//     for (let i = 0; i < element.length; i++) {
//         this[this.length] = element[i]
//     }
//     return this
// }
// Array.prototype.MyPop = function () {
//     this.length = this.length - 1
//     return this;
// }
// Array.prototype.MyShift = function (...element) {
//     //grel
// }
// Array.prototype.MyUnshift = function () {
//     //grel
// }
// let arr = [1, 2, 3, 4, 5, 6]
// arr.MyPush(7, 3, 4)
// console.log(arr);
// arr.MyPop()
// console.log(arr);
// let arr = [];
// while (arr.length < 200) {
//     arr = [...arr, Math.floor(Math.random() * 100)]
// }
// let arr = [1, 1, 3, 3, 5, 6, 7, 8, 3, 4, 6, 8, 9, 2, 9, 2, 4, 4, 9]
// Array.prototype.MyFind = function (callback) {
//     for (const value of this) {
//         if (callback(value)) {
//             return value
//         }
//     }
//     return null
// }
// Array.prototype.MyFilter = function (callback) {
//     let arr = []
//     for (const value of this) {
//         if (callback(value)) {
//             arr = [...arr, value]
//         }
//     }
//     return arr
// }
// Array.prototype.removeDoublicats = function () {
//     let arr = []
//     for (let key of this) {
//         arr.MyFind(value => value === key) ? null : arr = [...arr, key]
//     }
//     return arr
// }
// Array.prototype.MySort = function () {
//     const array = this
//     if (array.length < 2) {
//         return array
//     }
//     let pivot = array[0]
//     let less = array.MyFilter(array => array < pivot);
//     let greater = array.MyFilter(array => array > pivot);
//     return [...less.MySort(), pivot, ...greater.MySort()]
// }
// console.log(arr);
// arr.MySort();
// let x = Math.floor(Math.random() * Math.max.apply(null, arr));
// console.log(x);
// for (let i = 0; i < arr.length; i++) {
//     switch (x) {
//         case arr[i]:
//             break;
//         default:
//             break;
//     }
// }
// let obj = {
//     name: 'boris',
//     hi() {
//         console.log(this.name + ' hi');
//     },
//     bye() {
//         console.log(this.name + ' bye');
//     }
// }
// let age = 1;
// (age < 18) ? console.log("no") : (age == 18) ? console.log("yes") : console.log("chgitem");;
// switch (age) {
//     case 1:
//         console.log(age)
//         // break;
//     case 2:
//         console.log(age +" 1")
//         break;
//     case 3:
//         console.log(age)
//         break;
//     default:
//         console.log('error')
// }
// let a = 10
// let s = `
// let a = 11;
// console.log(a+" s");
// `
// eval(s)
// console.log(a+" a");
// console.log(current.getSeconds());
// for (let i = 0; i < 100; i++) {
//     for (let j = 2; j <= i; j++) {
//         if (i === j) {
//             console.log(i);
//         }
//         if (i % j === 0) {
//             break;
//         }
//     }
// }
// for (let i = 0; i < 1000; i++) {
//     let r = 0
//     for (let j = 0; j < i; j++) {
//         if (i % j === 0) {
//             r += j
//         }
//     }
//     if (r==i) {
//         console.log(r);
//     }
// }
// const myF = (arg) => {
//     if (isNaN(arg)) {
//         return 0
//     }
//     else {
//         if (arg % 2 == 0) {
//             arg /= 2
//             console.log(arg);
//         }
//         else {
//             arg = arg * 3 + 1
//             console.log(arg);
//         }
//         if (arg <= 1) return 0
//         myF(arg)
//     }
// }
// let a = parseInt(prompt("tiv"))
// myF(a)
// function factorial(n) {
//     if (n == 0) 
//         return 1
//     return n * factorial(n - 1)
// }
// console.log(
//     factorial(5)
// )

let arr = []
let images = [
    "../1x/0.jpg",
    "../1x/1.jpeg",
    "../1x/2.png",
    "../1x/3.jpg",
    "../1x/4.jpg",
    "../1x/5.jpg",
    "../1x/6.jpg",
    "../1x/7.jpg",
    "../1x/8.jpg",
    "../1x/9.jpg"
]
document.getElementById("a").addEventListener("click", () => {
    let elem = document.createElement("p")
    elem.innerHTML = "ka"
    elem.style.color = "red"
    document.body.appendChild(elem)
})

document.getElementById("b").addEventListener("click", () => {
    let divs = document.querySelectorAll(".g, .b")
    for (let i = 0; i < divs.length; i++) {
        document.body.removeChild(divs[i])
    }
    let v = parseInt(document.querySelector(".input").value)
    for (let i = 0; i < v; i++) {
        let c = document.createElement("br")
        c.className = "b"
        document.body.appendChild(c)
        for (let j = 0; j < v; j++) {
            let elem = document.createElement("div")
            elem.className = "g"
            elem.style.height = "50px"
            elem.style.width = "50px"
            elem.style.border = "1px solid"
            elem.style.display = "inline-block"
            document.body.appendChild(elem)
        }
        setInterval(() => {
            let divs = document.querySelectorAll(".g")
            for (let i = 0; i < divs.length; i++) {
                let r = Math.floor(Math.random() * 256)
                let g = Math.floor(Math.random() * 256)
                let b = Math.floor(Math.random() * 256)
                divs[i].style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
            }
        }, 1000)
    }
})

document.getElementById("c").addEventListener("click", () => {
    let divs = document.querySelectorAll(".e, .c")
    for (let i = 0; i < divs.length; i++) {
        document.body.removeChild(divs[i])
    }
    let v = parseInt(document.querySelector(".input").value)
    for (let i = 0; i < v; i++) {
        let c = document.createElement("br")
        c.className = "b"
        document.body.appendChild(c)
        for (let j = 0; j < v; j++) {
            let elem = document.createElement("div")
            elem.className = "e"
            elem.style.height = "50px"
            elem.style.width = "50px"
            elem.style.border = "1px solid"
            elem.style.display = "inline-block"
            document.body.appendChild(elem)
        }
        let j = 0
        console.log(j);
        setInterval(() => {
            let divs = document.querySelectorAll(".e")
            let r = Math.floor(Math.random() * 256)
            let g = Math.floor(Math.random() * 256)
            let b = Math.floor(Math.random() * 256)
            divs[j].style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
            j++
            console.log(j)
        }, 1000)
    }
})

function f5() {
    let v = parseInt(document.querySelector(".input").value)
    for (let i = 0; i < v; i++) {
        let c = document.createElement("br")
        c.className = "d"
        document.body.appendChild(c)
        for (let j = 0; j < v; j++) {
            let elem = document.createElement("div")
            elem.className = "f"
            elem.style.height = "50px"
            elem.style.width = "50px"
            elem.style.border = "1px solid"
            elem.style.display = "inline-block"
            document.body.appendChild(elem)
        }
    }
    let divs = document.querySelectorAll(".f");
    console.log(divs);
    for (let i = 0; i < divs.length; i++) {
        let r = Math.floor(Math.random() * 10)
        divs[i].addEventListener("click", function () {
            this.style.backgroundImage = "url(" + images[r] + ")"
            this.style.backgroundSize = "100%"
            arr.push(r)
            console.log(arr);
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr.length; j++) {
                    if (i == j) continue
                    if (arr[i] == arr[j]) {
                        console.log("sa");
                    }
                }
            }
        })
    }
}

// for (let i = 0; i < 10; i++) {
//     document.body.appendChild(document.createElement("br"))
//     let elem = document.createElement("div")
//     elem.className = "image"
//     elem.style.height = "50px"
//     elem.style.width = "50px"
//     elem.style.border = "1px solid"
//     elem.style.display = "inline-block"
//     elem.style.backgroundSize = "100%"
//     elem.style.backgroundImage = "url(" + images[i] + ")"
//     arr.push(i)
//     document.body.appendChild(elem)
// }
// let arr = [];
// for (let i = 0, n = 100; i < n; i++) {
//     arr.push(Math.round(Math.random() * n))
// }
// console.log(arr);
// let z = arr.filter(arr => arr < )
