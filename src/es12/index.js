const string ="JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web"
const replacedString = string.replace("JavaScript", "Python")
console.log(replacedString)

const replaceStrning2 = string.replaceAll("JavaScript", "Python")
console.log(replaceStrning2)

class Message {
    // funciion privaaa
    #show(val){
        console.log(val)
    }
     #add(){

    }

}

const message = new Message()

//message.show("Hola")

const promise1= new Promise((resolve, reject) => reject("1"))

const promise2= new Promise((resolve, reject) => resolve("2"))
const promise3= new Promise((resolve, reject) => resolve("3"))
//Devuelve la prmoesa mas rapida
Promise.any([promise1,promise2,promise3]).then(response => console.log(response))

class anyClass {
    // No pasar x el garrbaje recolector WeakRef, asi no se limpia
    constructor(element) {
        this.ref = new WeakRef(element)
    }

}
// 🧪 Nuevos operadores lógicos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);
