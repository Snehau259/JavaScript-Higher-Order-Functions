function myForEach(inputArray,callBackFunction){
    for(i=0;i<inputArray.length;i++){
        callBackFunction(inputArray[i]);
    }
}
// TEST myForEach() FUNCTION
let sum = 0;
const numbers = [65, 44, 12, 4];
myForEach(numbers,myFunction)
function myFunction(item) {
  sum += item;
}
console.log("forEach() output: "+sum);