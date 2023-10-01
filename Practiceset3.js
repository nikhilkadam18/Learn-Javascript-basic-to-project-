//Q1.write a program to print the marks of a student in an object using for loop, obj = {om:98,rohan:79,akash:54}
let marks = {
    om : 98,
    rohan : 79,
    akash : 54
}
for(key in marks)
{
    console.log("The marks of "+key+" are "+marks[key])
}

//Q2.write a program to print "try again " until the user enters the correct number.
let num = 23
let i
while(i!=num)
{   console.log("try again")
   i= prompt("Enter a number:")
}
console.log("You have entered a correct number")

//write a function to find mean of 5 numbers
const mean = (a,b,c,d)=>{
    return (a+b+c+d)/4
}
console.log(mean(4,5,6,7))