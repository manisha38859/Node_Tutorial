// We have two system for interacting with file system and the module and the name of the module is "fs" .
// Essentially there are two flavors when it comes to file module.
// We can do it =>>
// 1-> Asynchoronously,non-blocking
// 2->Synchoronously,blocking.

const {readFileSync, writeFileSync} = require('fs')

console.log('start')

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first)
console.log(second)

writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, {flag:'a'}) 

console.log('done with the task')
console.log('starting with the next one')
//The file 'result-sync.txt' will de created by the node itself if not present and if present the node will overwrite it's values.

// {flag: 'a'} is used to append to a file .We need to pass in one more argument as flag....
