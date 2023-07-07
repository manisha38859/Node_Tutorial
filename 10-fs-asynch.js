const { readFile, writeFile } = require('fs')
console.log('start')
readFile('./content/first.txt','utf8',(err,result) => { 
     //(<Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 
    //  73 74 20 74 65 78 74 20 66 69 6c 65>) <= Error thrown instead of text when the functionality 'utf8' is not used above. 
    if (err) {
        console.log(err)
        return;
    }
    const first = result
    readFile('./content/second.txt','utf8',(err,result) => {
        if(err){
            console.log(err)
            return;
        }
        const second = result
        writeFile('./content/result-async.txt',
        `here is the result : ${first}, ${second}`
        ,function (err, result) {
            if (err) {
                console.log(err);
                return;
            }
            // console.log(result)
            console.log('done with the task');
        })
    }) 
    console.log(result)
})
console.log('starting new task')








const {readFile, writeFile} = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)
// const getText = (path) => {
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data) => {
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }


//     const start = async() => {
//     const first = await getText('./content/first.txt');
//     console.log(first)
// }

const start = async() => {
    try{
      const first = await readFilePromise('./content/first.txt','utf8')
      const second = await readFilePromise('./content/second.txt','utf8')
      await writeFilePromise('./content/result-mind-grenade.txt',`THIS IS AWESOME : ${first} ${second}`)
      console.log(first)
      console.log(second)
    } catch (error) {
        console.log(error)
       }
}

start()

// getText('./content/first.txt')
// .then(result => console.log(result))
// .catch((err) => console.log(err))

