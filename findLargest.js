function findLargest(arr){
let largest = arr[0];
    for(let i=0; i<arr.length; i++){
       if(arr[i]>largest){
        largest = arr[i]
       }
    }
 return largest
}

let arr = [3,4, 8, 10, 12, 2,26,-8]
const result = findLargest(arr)
console.log(result);
