function myMap(inputArray,callBackFunction){
    let mapOutputArray = [];
    for(i=0;i<inputArray.length;i++){
        mapOutputArray.push(callBackFunction(inputArray[i]));
    }
    return mapOutputArray;
}
// TEST myMap() FUNCTION 
const array1 = [4, 9, 16, 25];
const mapArray = myMap(array1,Math.sqrt)
console.log("map() output: "+mapArray);