// Topic: Loops
let arr = [3,4, 8, 10, 12, 2,26,8]
const element = 8

function searchElement(arr, element){
    for (let i=0;i< arr.length; i++){
         if(arr[i] === element){
             return i
        } 
    }
      return -1
}
const result = searchElement(arr, element)
console.log(result);
