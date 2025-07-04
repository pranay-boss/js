const name="pranay"
const age=20

console.log(`my name is ${name} and age is ${age}`)  //string interpolation

const a="abcdef"

console.log(a.length)
console.log(a.toUpperCase()) //stack memory so the function will not originally chage the string
console.log(a.charAt(2))
console.log(a.indexOf('d'))


const b="abmnop-cdef"
const c=b.substring(0,4) //last number never count in this function as index 
                         // -ve number means start from 0

const slice1=b.slice(0,5)
const slice2=b.slice(-8,5)// -ve for reverse 

console.log(c)
console.log(slice2)


//user kabhi kabhi input pe space daal deta hai to uske liye trim use kar lo
const inputuser="  pranay  "
console.log(inputuser)
console.log(inputuser.trim())

// browser space nhi samajh nhi paata ya kuch cheeze replace karna hai
const url="https://pranay.com/jiit%20.org"
console.log(url.replace('%20','-'))

console.log(url.includes('pranay'))

const d="a-b-c-d-e"
console.log(d.split('-'))

//give some time to explore and practice sting and make use of backticks 99.99%