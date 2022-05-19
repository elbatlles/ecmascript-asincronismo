const someThingWillHappen = () => {
  return new Promise(((resolve, reject) => {
      if(true){
          resolve("Hey!")
      }else{
          reject("Whoops");
      }
  }))
}

const somethingWillHappen2 = () => {
  return new Promise(((resolve, reject) => {
      if(true){
          setTimeout(() =>{
              resolve('True')
          },2000)
      }else{
          let error = new Error("Whoop!")
          reject(error)
      }
  }))
}

someThingWillHappen().then(response => console.log(response)).catch(err => console.log(err))

somethingWillHappen2().then(response => console.log(response)).catch( err => console.log(err))

Promise.all([someThingWillHappen(),somethingWillHappen2()]).then(response => {
    console.log("Array",response)
}).catch(err => console.log(err))


