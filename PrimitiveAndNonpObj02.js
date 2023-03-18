//primitive data types
let a=null;
let b=100;
let c=BigInt("776")+BigInt("4")
let d=true;
let e="nikhil";
let f=Symbol("I am a nice symbol")
let g   // Undefined
console.log(a,b,c,d,e,f,g)
console.log(typeof e)

//non primitive (objects)
const item = {
    "shyam" : true,
    "ram"   : false,
    "radha" : 21,
    "salman": undefined,
}
console.log(item["ram"]);