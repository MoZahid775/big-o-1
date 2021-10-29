




function validAnagram(arr1, arr2){
    // add whatever parameters you deem necessary - good luck!
    
        if(arr1.length !== arr2.length){
          return false;
      }
      let frequencyCounter1 = {}
      let frequencyCounter2 = {}
      for(let val of arr1){
          frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
      }
      for(let val of arr2){
          frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
      }
      console.log(frequencyCounter1);
      console.log(frequencyCounter2);
      for(let key in frequencyCounter1){
        if(frequencyCounter1[key] !== frequencyCounter2[key]){
            return false
        }
      }
      return true
  
  }