// Write a function called sumZero which accepts a sorted array of integers. 
// The function should find the first pair where the sum is 0. Return an array that 
// includes both values that sum to zero or undefined if a pair does not exist. 



function sumZero(arr){
    let left = 0
    let right = arr.length -1
     while(left<right){
       let sum = arr[left] + arr[right]
       if(sum === 0 ){
         console.log(arr[left], arr[right])
         return arr[left], arr[right]
       }else if(sum > 0){
       right = right-= 1
       }else {
         left++
       }
       
   
       
     }
     console.log("the results are inconclusive")
   }
   
   sumZero([-5,-2,-1,0,7,10])


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

  

//2/21/22
//attempt at counting unique values

function countUniqueValues(arr){

    let obj = {}
    let count = 0 
      
       for( let i = 0; i < arr.length; i++){
         let int = arr[i]
            if (obj[int]){
            
              obj[int]++
            }else{
              obj[int] = 1
            }
    
       }
          
    let keysArr = Object.keys(obj)
    console.log(keysArr.length)
      
    return count
      
    }
    
    countUniqueValues([-2,-1,3,3,3,4])

    //fucked up redo without help
    function countUniqueValues(arr){
        if (arr.length == 0){
          return 0
        } else if (arr.length == 1){
            return 1
          }
          
        let count = 0 
        let int = 0
          
           for( let j = 1; j < arr.length; j++){
            if (arr[int] !== arr[j]){
              int++
              arr[int]= arr[j]
            }else{
             console.log(arr[int])
            }
            
            console.log(arr[int])
           }
             console.log(int+1)
        
        cout = int+1
          
        return count
          
        }
        
        countUniqueValues([1,1,1,1,1,1,5])