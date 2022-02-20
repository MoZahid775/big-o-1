//Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding
//value squared in the second array. The frequency of values must be the same. 


function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        console.log(false)
        return false
    }
    let obj = {}
  
    for(let val of arr1){
    obj[val] = (obj[val] || 0 )+ 1 
    }
  
    for( let val of arr2){
    int = Math.sqrt(val)
      if (obj[int]){ 
        obj[int] -= 1
      }else {
        console.log(`${int} suppose to be in the first array, ${val} was in the 
        second`)
        return false
      }
    }
   console.log(true)
  }
  
  same([1,2,2], [1,4,4])