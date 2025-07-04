// singleton =>constructor se banega

// object literals =>not singleton  const a=new Object()

// object banane ke tarike
// Object.create =>singleton

//const mysym=Symbol("key1")//symbol declared here and i want to add this in  my object

const jsuser={
  //  [mysym]="abcd";//added like this just keep it in square brackts
    "full name":"pranay nautiyal",
    name:"pranay",
    age:20,
    location:"Delhi",
    email: "pn@skibidi.com",
    isloggedin:false
}

console.log(jsuser.email)
console.log(jsuser["name"])// this is a better practice to asses elements and it will access the quoted keys too which . operator lags


// to change the info of object
jsuser.email="skibidi.sigma"
// to freeze te object
Object.freeze(jsuser)// no change after this 

jsuser.greetings=function(){
    console.log("hello how r u")
}

jsuser.greetingtwo=function(){
    console.log(`hello ${this.name}`)
}


// nesting in class

const info={
    email: "abcd@mai.com",
    p_details: {
        name:{
            first:"pranay",
            last: "nautityal"
        }
    }
}

//shortcut
const {email}=info   //destructuring
console.log(email)

const {email:e}=info //destructuring
console.log(e)


console.log(info.email)   // agar nesting mei kuch exist nhi katrta to ? lagao ie info.p_details?.name

//merging objects
const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}

// const obj3=Object.assign({},obj1,obj2) //assign(target,sources)
//frequently used spread

const obj3={...obj1,...obj2}
console.log(obj3)


