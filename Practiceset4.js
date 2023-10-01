//what will print
let str = "har\""
console.log("har\"".length)

//Q2. 
const sentence = "ram nam ke hire moti"
const word = "ram2"
console.log(sentence.includes(word))
//console.log("The word "${word}' ${sentence.includes(word) ? 'is' :'is not'} in the sentence');

//Q3. convert in lowercase
let string = "NIKHIL BHAI HII"
console.log(string.toLowerCase())

//Q4.slice
let str2="please give Rs 1000"
let amount = Number.parseInt(str2.slice(15))
let amounts= str2.slice("please give Rs ".length)
console.log(amount)
console.log(typeof amount)
console.log(amounts)

//Q5 try to change 4th character
let friend = "Deepika"
friend[4] = 'R'
console.log(friend)//friend is not change bcoz string is immutable