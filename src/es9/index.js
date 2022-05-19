const obj ={
    name:'Angel',
    age:32,
    country:'MX'
}

let {country,...all}= obj
console.log(country)

const obj2 ={
    name:'Angel',
    age:32,

}
const obj3 ={
   ...obj2,
    country:'MX'
}
console.log(obj3)

const helloWorld =() =>{
    return new Promise((resolve, reject) => {
        (true) ? resolve("hello"): reject(new Error("test error"))
    })
}
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(()=> console.log("finalizo"))

const regexData= /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match = regexData.exec("2018-04-20")

const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month, day)