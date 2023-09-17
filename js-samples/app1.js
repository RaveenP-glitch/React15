console.log("Hello");
//JavaScript Array methods
//at() method returns the same as []
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = 2;
let fruit = fruits.flat(index);
console.log(fruit);

//Join two arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias"];

const children = arr1.concat(arr2);
console.log(children);

//copyWithin() method
const fruits2 = ["Banana", "Orange","Pineapple","Avacado", "Apple", "Mango"];
fruits2.copyWithin(2,0,2);
console.log(fruits2);

//entries() method
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits3.entries();
for(let x of f){
    console.log(x);
}

//JS Array constructor
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits4.constructor;
console.log(text);