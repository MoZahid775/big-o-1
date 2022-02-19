function samefunction same(arr1, arr2){
    if (arr1.length !== arr2.length){
      console.log(false)
      return false
    }
    
   for (let i = 0; i < arr2.length; i++){
     index = arr2.indexOf(arr1[i]** 2)
     if(index == -1){
       console.log(false)
       return false
     }
     arr2.splice(index, 1)
   }
  console.log(true)
    return true
  }
  
  same([1,2,3],[1,4,9,9])