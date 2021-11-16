// sameFrequency Solution
function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
  }
  // areThereDuplicates Solution (Frequency Counter)
  function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }
  // areThereDuplicates Solution (Multiple Pointers)
  function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }
  // areThereDuplicates One Liner Solution
  function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
  }
  
  //Sliding Window Max Sub
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

    function sameFrequency(num1, num2){
      let strNum1 = num1.toString();
      let strNum2 = num2.toString();
      if(strNum1.length !== strNum2.length) return false;
      
      let countNum1 = {};
      let countNum2 = {};
      
      for(let i = 0; i < strNum1.length; i++){
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
      }
      
      for(let j = 0; j < strNum1.length; j++){
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
      }
      
      for(let key in countNum1){
        if(countNum1[key] !== countNum2[key]) return false;
      }
     
      return true;
    }
    // areThereDuplicates Solution (Frequency Counter)
    function areThereDuplicates() {
      let collection = {}
      for(let val in arguments){
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
      }
      for(let key in collection){
        if(collection[key] > 1) return true
      }
      return false;
    }
    // areThereDuplicates Solution (Multiple Pointers)
    function areThereDuplicates(...args) {
      // Two pointers
      args.sort((a,b) => a > b);
      let start = 0;
      let next = 1;
      while(next < args.length){
        if(args[start] === args[next]){
            return true
        }
        start++
        next++
      }
      return false
    }
    // areThereDuplicates One Liner Solution
    function areThereDuplicates() {
      return new Set(arguments).size !== arguments.length;
    }
    
    //Sliding Window Max Sub
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