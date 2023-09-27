//for loop
for(let i=0 ; i<5 ; i++ ){
    console.log(i)
}

//sum of the first n natural numbers
let n = 3//prompt("enter number n ")
n = Number.parseInt(n)
sum = 0
for(let i =1; i<=n ; i++)
{
    sum += i;
}
console.log("sum of first "+ n +" numbers is "+sum)

//for in loop

let obj = {
    ram : 90,
    shyam : 70,
    om : 66,
    nik : 85,
    sai : 95
}
 for(let a in obj)
 {  
    console.log("Marks of "+a+" are "+obj[a])
 }
   
 //for of loop
 for(let b of "nikhil")
 {  
    
 console.log(b)
 }

 //while loop
let k = prompt("Enter the value of n")
n = Number.parseInt(k)
let i =0
while(i<k)
{
    console.log(i)
    i++
}

//do while loop
let m = prompt("Enter the value of n")
m = Number.parseInt(n)
let j =10
do
{
    console.log(j)
    j++
}while(j<m)