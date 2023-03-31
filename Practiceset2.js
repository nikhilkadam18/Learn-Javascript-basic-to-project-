//Q1 Using logical operator find age lies between 10 and 20.(Run on browser prompt not work in vscode)

let age = prompt(" what is your age? ")
age = Number.parseInt(age)
if(age>10 && age<20)
{
    console.log("your age lies between 10 and 20")
}
else{
    console.log("your age not lies between 10 and 20")
}


//Q2 Use of switch case in JS

let ageee = prompt(" what is your age? ")
switch(ageee)
{
    case '20':
        console.log("your age is 20")
        break;
    case '30':
        console.log("your age is 30")
        break;
    case '40':
        console.log("your age is 40")
        break;   
    default:
        console.log("not in list")           

}

//Q3 Number is divisible by 2 and 3 . Q4divisible by 2 or 3

let num = prompt("Enter a number")
num = Number.parseInt(num)
if (num%2==0 && num%3==0){
    console.log("divisible ")
}
else{
    console.log(" not divisible ")
}

//Q5 using tarnery operator check the condition drive or not

let agee = prompt("what is your age")
let a = agee > 18? "You can drive ":"You can't drive"
console.log(a)