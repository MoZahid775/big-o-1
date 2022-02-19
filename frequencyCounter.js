//Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding
//value squared in the second array. The frequency of values must be the same. 

//naive solution
function same(arr1, arr2){
    if (arr1.length !== arr2.length){
    //   console.log(false)
      return false
    }
    
   for (let i = 0; i < arr2.length; i++){
     index = arr2.indexOf(arr1[i]** 2)
     if(index == -1){
    //    console.log(false)
       return false
     }
     arr2.splice(index, 1)
   }
//   console.log(true)
    return true
  }
  
  same([1,2,3],[1,4,9,9])

//SOLID SOLUTION
function same(arr1, arr2){
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
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11])


//QUESTION 2

function same(str1, str2){
    if(str1.length!==str2.length){
      console.log(false)
    }
    if(str1==str2){
      console.log("these are exactly the same")
    }
  let obj1 ={}
  let obj2 ={}
    for (let val of str1){
      obj1[val]= (obj1[val] || 0) + 1 
    }
    for (let val of str2){
      obj2[val]= (obj2[val] || 0) + 1
    }
    for (let key in obj1){
      if(obj2[key]!== obj1[key]){
      console.log(`value does not exist in object 2 ${key}`)
      return false
      }
    }
    console.log(true) 
  }
  
  same("hits", "hits")