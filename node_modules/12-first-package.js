// npm - global command, comes with node
// npm --v or npm --version (mine=>9.5.0)

// local dependency -- use it only in this particular project
// npm i <packageName> // i or install

//global dependency -- use it in any project
//npm install -g <packageName>
//sudo install -g <packageName> (for mac)

// package.json - manifest file (stores important info about project/package)'
//THREE WAYS TO CREATE PACKAGE>JASON

// 1->manual approach (create package.json in root, create properties etc)
// 2->npm init (step by step, press enter to skip)
// 3->npm init -y (everything is set up as default)

const_ = require('lodash');  //first install the dependency 'lodash'. lowdash is a utility library

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)