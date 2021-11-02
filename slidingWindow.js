// frequencys match exactly

// inputs are integers

//boolean



//problem solved
function maxSubarraySum(arr, num){
    // add whatever parameters you deem necessary - good luck!
    if (arr.length < num){
        return null
    }
    
    let maxSum = 0
    
    for (let i = 0; i < num; i++){
         maxSum+= arr[i]
    }
    let tempSum = maxSum
    for (let i = num; i < arr.length; i++){
        tempSum = tempSum + arr[i]-arr[i-num]
        maxSum = Math.max(maxSum,tempSum)
      }
    return maxSum
    
  }