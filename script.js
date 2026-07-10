console.log("Hey this is tutorial ")
//var is a global scope variable
var a = 5; //this is a number data type
var c = "Sourodip"; //this is a string data type
var _a = "shubam";  //this is a valid name here
// var 55a = "rohan"; this is not valid here as a variable is not started with number
//  var b = 7;
// console.log(a+b+10)
// console.log(c)
// console.log(typeof a, typeof b, typeof c)
//  const a1 = 88;
 //a1=a1+55;  //this is not valid as it is constant and cannot be change
 
 let f = 44; //now this is a block scope variable
//  console.log(f)
 
//  console.log(a1)
 
//  let b = 7;

//  {
//     var b = 770;
//     console.log(b)
//  }

//  console.log(b)

 let x = "Sourodip bhai";
 let y = 22;
 let z = 3.55;
 const p = true;
 let q = undefined;
 let r = null; //this is a object

 
 console.log(x, y, z, p, q, r)
 console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)
 
 //here to create a object we should write like this as o as the variable for the object
 let o = {
    "name" : "Harry",
    "job code" : 5600,
    "is_rich" : true,
 }
//  this is like a dictionary format of key value pair

 console.log(o)
//  to add a value to the key value pair, we have to do this
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);