const name = "nikhil";
const marks = 50;

console.log(`My name is ${name} amd my marks are ${marks}`);

const gameName = new String("nikhil-devel-oper");

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(6));
console.log(gameName.toUpperCase);
console.log(gameName.indexOf('l'));

const newString = gameName.substring(-8,4)
console.log(newString);

const anotherString = gameName.slice(2,4)
console.log(anotherString);

const newAnotherone = "     Ram    ";
console.log(newAnotherone);
console.log(newAnotherone.trim());


const url = "https://nikhilcompanyboss.com/jfvbbiu@sbv"

console.log(url.replace('@','-'));
console.log(url.includes('krishna'));
console.log(gameName.split('-'));