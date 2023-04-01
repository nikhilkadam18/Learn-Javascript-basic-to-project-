# Learn-Javascript-basic-to-project-
*)how to execute javascript code-
-->1]Inside any browser
   2]Runtime-Node.Js
   3]Inside <Script> tag

*)Variables in JS
--> Uesd to store.

*)Let,Var,Const
-->1]let & const is used to store block scoped variables.
   2]var is globally scoped.
   3]let can be updated but not re-declared.
   4]const can neither be updated nor be re-declared.

*)Primitives & objects in JS
--> Primitives in JS->                         seven primitive datatypes = Null,Number,Boolean,Byte,String,Symbol,Undefined.  //nn bb ss u
--> Non primitive data types (Objects in JS)-> used to build key-value pairs.;mapping build (karu shakto).

*)Operators and Expressions in JS
-->1]Arithmatic operator --> +,-,/,*,**,++,--,%
   2]Assignment operstor --> =,+=,-=,*=,/=,%=,**=
   3]Comparison operator --> ==,!=,===,!==,>,<,<=,>=,?
   === -->not for int & string comparison
   4]Logical operstor --> &&,||,!

*)Conditional Expressions in JS
--> 1]if
    2]if else
    3]if else if
    4]JS ternary operator- Evaluates a condition and executes a block of code based on the condition.
                             condition ? exp1 : exp2
                             
 *)Loops
 1] for loop -> loop block of code number of times.
      for(statement1;statement2;statement3)
      {
           //code to be executed
       }
 2] for in loop -> loops through the keys of an object
       for(keys in object)
       {
          //code to be executed
       }
 3] for of loop -> loop through the value of an object
      for(keys of object)
       {
          //code to be executed
       }
 4] while loop ->
     while(condition)
       {
          //code to be executed
       }
   if the condition never becomes false, the loop will never end and this might crash the runtime.
 5] do while loop ->
     do{
      //code to executed
     }while(condition)
     In do while loop one time block is executed after that condition is executed.
     
 *) Functions -> A javascript function is a block of code design to perform a particular task.
         function  fname(parameter1,parameter2)
         {
            //code
         }
         (parameters function ke ander local variables ki tarah bartav karenge)
    arrow function -> const sum=(a,b)=>{
                        let a+b;
                        return c;
                        }
