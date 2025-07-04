let mydate=new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())
console.log(mydate.getMonth())// month dah etc...

console.log(typeof(mydate)) //=>always type is object

let myowndate=new Date(2022 ,2,25,5,30,12)
console.log(myowndate.toDateString())
console.log(myowndate.toLocaleString())


let customdate=new Date("03-25-2005")
console.log(customdate.toLocaleString())


let mytimestamp=Date.now()
console.log(mytimestamp) // will get in milliseconds from 1970
console.log(customdate.getTime())// for comparision we will get it n millisecond format from 1970

//we have it in milliseconds format so to convert it into seconds divide by 1000 and to remove decimal use floor
console.log(Math.floor(Date.now()/1000))

//customise format

myowndate.toLocaleString('default',{
    weekday: "long"
    
})