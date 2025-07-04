const myarr=[1,2,3,4,5]
console.log(myarr[1])

//array method

myarr.push(7)
myarr.pop()

console.log(myarr.includes(9))
console.log(myarr.indexOf(3))

const newarr=myarr.join()// binds array to string form
console.log(myarr)
console.log(newarr)

//difference in slice and splice in  array


let aplha=['a','b','c','d']
let newaplha=['e','f']

// aplha.push(newaplha)// this will push the array whole as a single index
//console.log(aplha)

//concat will merge arrays into a new one
let con=aplha.concat(newaplha)
console.log(con)


//better one spread
let sp=[...aplha,...newaplha]
console.log(sp)

let arr=[1,2,3,[4,5],6,[7,[8,9]]]
flatarr=arr.flat(Infinity) //flat such arrays to 1D
console.log(flatarr)


// to convert Array
console.log(Array.from("pranay"))
console.log(Array.from({name: "pranay"}))// interesting as it will return null

let s1=100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3))
