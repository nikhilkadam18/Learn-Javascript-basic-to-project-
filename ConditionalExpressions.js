let a = prompt("Hey What's your age");
a = Number.parseInt(a)// Converting string to int
if(a<0){
    alert(" Invalid age ");
}
else if(a<9){
    alert("you are a kid and you cannot even think of driving")
}
else if(a<18 && a>=9){
    alert("yot are a kid and you can think of driving after 18")
}
else{
    alert("you are now drive as you are above 18")
}
console.log("done")

console.log('You can ',(a<18? 'not drive':'drive'))//tarnary


//switch case in js

let i = 9;
switch(i)
{   
    case 0:
    console.log("i is zero.");
    break;
    case 1:
    console.log("i is one.");
    break;
    case 9:
    console.log("i is nine.")
    break
    default:
        console.log("i is not here")   
}
