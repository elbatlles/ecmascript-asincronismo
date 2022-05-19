/*const button = document.getElementById('btn')

button.addEventListener("click",async function () {
    const  module = await  import("./file.js")
    module.hello()
})

*/
const aBigNumber = 90071992540991n

const  anotherBigNumber = BigInt(90071992540991)

console.log(aBigNumber)
console.log(anotherBigNumber)

const promise1 = new Promise((resolve, reject) => reject("reject"))
const promise2 = new Promise((resolve, reject) => resolve("resolve"))
const promise3 = new Promise((resolve, reject) => resolve("resolve 2"))
Promise.allSettled([promise1,promise2,promise3]).then(response => console.log(response))

//allSettled da las promesas aunq alguna no funcione, all a secas si alguna no va ya falla

//console.log(window)
console.log(globalThis)

const foo = null ?? 'default string';
const foo2 = 'ss' ?? 'default string';
// ?? operador de nulos

const user = {}
console.log(user?.profile?.mail)