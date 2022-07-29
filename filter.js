
  function myFilter(inputArray,callBackFunction){
    let mapOutputArray = [];
    for(i=0;i<inputArray.length;i++){
        if (callBackFunction(inputArray[i])==true)
        mapOutputArray.push(inputArray[i]);
    }
    return mapOutputArray;
}
// TEST myMap() FUNCTION 
const array1 = [4, 9, 16, 25];
function isEven(x){
    return x % 2 === 0;
  }

const mapArray = myFilter(array1,isEven)
console.log("filter() output: "+mapArray);