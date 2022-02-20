function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while (left < right){
        let sum = arr[left] + arr[right];
        if (sum === 0){
            return [arr[left], arr[right]];
        } else if (sum > 0){
            right--;
        } else {
            left++;
        }
    }
}


firstP = 0
secondP = 1
  (let i =0;          : )
  if (arr.length==0){
      return 0
  }



  //attempt at count unique values

  function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
      if (arr.length==0){
        return 0
    }
    let i = 0
    for (let j = 1; j < arr.length; j++){
        if (arr[i]!==arr[j]){
            i++
            arr[i]=arr[j]
        }
    }
     return i+1
  }

  //solution two
  function countUniqueValues(arr){
    let count = 1;
    let diff = 0;
    if (arr.length === 0){
        return 0
    }
    for (let i = 1; i < arr.length; i++){
        if (arr[i] - arr[0] > diff){
            count++
            diff = (arr[i] - arr[0])
        }
    }
    return count
}

  
