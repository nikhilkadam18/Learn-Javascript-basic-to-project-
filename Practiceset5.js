//Q1.create an array of numbers and take input from the user to add numbers to this array
let arr = [2,4,55,64,35,6,7,35]
let a = prompt("Enter a number to add in array")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)

//Q2. keep adding numbers to the array in Q1 until zero is added to array.
let arr4 = [2,4,55,64,35,6,7,35]
do{
a = prompt("Enter a number to add in array")
a = Number.parseInt(z)
arr.push(z)
}while(z!=0)
console.log(arr4)

//Q3. filter for numbers are divisible by 10 from a given array
let arr1 = [44,4,66,60,40,3,50,75]
let n = arr1.filter((x)=>
{
    return x % 10 ==0
})
console.log(n)

//Q4.create an array of square of given numbers
let arr2 = [44,4,66,60,40,3,50,75]
let m = arr1.map((y)=>
{
    return y * y
})
console.log(m)

//Q.5 use reduce function
let arr3 = [1,2,3,4]
let k = arr3.reduce((x1,x2) =>
{
    return (x1 * x2)
})
console.log(k)
