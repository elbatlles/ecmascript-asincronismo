let array = [1,2,3,[1,2,3,[1,2,3]]]

console.log(array.flat(4))

let array2 =[1,2,3,4]

console.log((array2.flatMap(value => [value,value*2])))
/*try {

}catch{
    errorW
}*/
let hello = '    hello world'
console.log(hello.trimStart())

let entries =[['name','oscar'],['age',32]]

console.log(Object.fromEntries(entries))

let mySymbol = `My Symbol`
let symbol = Symbol(mySymbol)
console.log(symbol.description)