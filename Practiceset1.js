//1.Create a variable of type string and try to add a number to it
let a="rani"
let b=2
console.log(a+b);

//2.Find the datatype of 1st question variable using typeOf function
console.log(typeof(a+b))

//3.create a const object in javascript can you change it to hold a number later?
const d = {
    name: "nikhil",
    section: 2,
    isPrincipal:false
}
//d=122 //error yenar this is not possible

//4. Try to add a new key to the const object in Q3 where you able to do it?
d['friend']="ram"
d['name']="shyam"
console.log(d)

//5.write a JS program to create a word meaning directionary of 2 words?
const dir = {
    Broigus: "Angry or irritated",
    Blert: "A cowardly person, someone who is weak. ",
}
console.log(dir.Blert)