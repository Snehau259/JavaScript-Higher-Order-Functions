function myReduce(inputArray,callBackFunction){
    let reduceOutput=1;
    for(i=0;i<inputArray.length;i++){
        reduceOutput = callBackFunction(reduceOutput, inputArray[i]);
    }
    return reduceOutput;
}
// TEST myReduce() FUNCTION 
const array2 = [15, 2, 1, 4];
const reduceResult = myReduce(array2,getProduct)
function getProduct(total, item) {
    return total * item;
}
console.log("reduce() output: "+reduceResult);