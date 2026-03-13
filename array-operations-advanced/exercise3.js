// write a function that receives any no of args and return their sum
function sum(...a){
  let sum=a.reduce((a,elements)=>a+elements)
  console.log(sum)
}
sum(10,20,30)