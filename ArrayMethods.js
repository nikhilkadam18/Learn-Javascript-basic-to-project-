/*let num =[3,5,6,34,5]
let num_more = [11,12,14,15,17]
let b = num.toString();//toString method
console.log(b)

let c = num.join(" _ ")//Join method
console.log(c)

num.pop()//pop method
console.log(num)

num.push(100)//push method
console.log(num)

let r = num.shift()//shift method
console.log(num)

let s = num.unshift(200)//unshift method
console.log(num)

console.log(num.length)
delete num[0]
console.log(num)
console.log(num.length)

let newArray = num.concat(num_more)
console.log(newArray)
console.log(num,num_more)*/

/*let compare = (a,b) =>{
    return a - b ;
}
let num1 = [555,22,3,14,5,6,7,8229]
num1.sort(compare)
num1.reverse()
console.log(num1)*/

//splice and slice
/*const num2 = [555,22,3,14,5,6,7,8229]
const deletedValues = num2.splice(2,3,1021,1022,1023)  // splice method
console.log(deletedValues)
console.log(typeof(deletedValues))

const newnum = num2.slice(3,5)
console.log(newnum)*/

//loops 
//foreach
let num = [3,5,7,8,9]
num.forEach((element)=> {
    console.log(element * element)
})

//Array.from
let name = "nikhil"
let arr = Array.from(name)
console.log(arr)

//for...of
for(let i of num)
console.log(i)
//for...in
//for(let j in num)
//console.log(j)










