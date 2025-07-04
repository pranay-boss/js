// how data in memory 

// const { use } = require("react");

// primitive
// 7=> String,Number,Boolean,Null(empty)->dont confuse with 0 or empty string,undefined,, symbolbigint

//reference type or non primitive
//array,object,functions


//2 types of language static and dynamic
//javascript is a dynamic language

//+++++++++++++++++++++++++++++++++++++++++++

//2 memory
// heap and stack
//stack=>primitive
//heap=>non primitive


//stack memory mei koi dusara variable changes nhi karta

let name="pranay"
let dname=name;

dname="pranay"
console.log(name)

//heap mei reference base hota hai toh 2 alag variable same cheez ko point out karte hai

let user={
    email:"pn@gmail.com",
    age:20
}

let duser=user

duser.age=100

console.log(user.age)


