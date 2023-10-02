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
     
 *) 1] Functions -> A javascript function is a block of code design to perform a particular task.
         function  fname(parameter1,parameter2)
         {
            //code
         }
         (parameters function ke ander local variables ki tarah bartav karenge)
    2] arrow function ->   const sum=(a,b)=>{
                           let a+b;
                           return c;
                        }
   
   *)Strings -> Collection of characters. & strings are immutable
      1] let name = "nikhil"   // we used "" or '' to declare strings.
         indexing starts from zero in strings.
         to find length we used ex. name.length
      2]Template literals- template literals used backtics instead of quotes to define a string
          ex. let name = `nikhil`
          -> using template literals it is possible to ues single as well as double quotes inside a string.
             ex.let sentence = `The name "is" nikhil's`
          -> We can insert variable directly in template literal, this is called string interpolation.
                 ex. let a = `this is ${name}`
          -> Escape sequence character- we used \ for printing in string (invisible aste he)
                \,\n-newline,\r-,\t
          -> we used inbuilt methods in string like toupperCase(),toLowerCase(),trim(),concat(),replace(),slice() etc...
          
   *)Arrays ->1] Arrays are variables which holds more than one value.
                 Arraya are mutable they can be change.
                 In javascript arrays are type of objects The typeof operator or arrays returns objects.
              2] Methods in arrays-> toString(),pop(),Join(),push(),shift(),unshift(),delete(),concat(),sort(),reverse()
                  shift()- removes 1st element and returns it.
                  unshift()- add element to the begining
                  delete()- delete that element , but length will not change.
                  sort()- alphabetically sorting, after execution change array.
                          to sort array in acending & decending order used compare function. 
                  reverse()- used to reverse the array.
                  splice()- (position,no. of elements to remove,elements to added)  also we can see the deleted elements & type of this array is object. (original                                  array la modify karto)
                  slice()-(start position index,upto that index) print.
                  Array.from - used to create an array from any other object. ex.Array.from("nikhil")
                  for...of - uesd to get the values from an array.
                  for...in - uesd to get the keys from an array.
                  map() - create a new array by performing same operations on each array element.
                  filter() - filters an array with values that passes a test. creates a new array.
                  reduce() method - reduce an array to a single value.
                  
                  
                  
                  
                  
                  
                  
                  
