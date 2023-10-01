
//map()
let arr = [23,45,89]
let a = arr.map((value,index,array)=>
{
    console.log(value,index,array)
    return value + 1
})

//filter
let arr2 = [2,5,76,43]
let a2 = arr2.filter((a)=>
{
    return a<10
})
    console.log(a2,arr2)

//reduce
let arr3 = [1,2,3,5,2,1]
const reduce_func = (h1,h2)=>{
    return h1+h2
}
let newarr3 = arr3.reduce(reduce_func) 
console.log(newarr3)
