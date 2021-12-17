//Write a function that will calculate the sum of all number from 1 up until and including n
function addUpTo(n){
    let total = 0
  for (let i = 1; i <= n ;i++){
    total += i 
   }
  return total 
  }
  
 

// A cool but very basic way to track length is below

let t1 = performance.now()
addUpTo(1000000000)
let t2 = performance.now()
console.log(`time Elapsed: ${(t2 - t1) / 1000} seconds.`)

//Math.min will return the smallest number that is inputted
//Math.max will return the largest number amongst the inputs
//Math.ceil will round the number up to the next integer
//A Logarithmic time complexity is wonderful


/* O B J E C T S

INSERTION -
REMOVAL-
ACCESS-

THE ABOVE ARE ALL O(1)

Searching is O(n) or linear time

Objects are great if you dont need ordering

//Objects work generally in constand time. 

A R R A Y S 

arrays can come at a cost. 

Access data is a constant and is quick.  

But inserting and removal ---depends on where the insertion is. If we add something to the very end. That is constant time. but to add to the
begining. Shifts all the indeces over. Everything has to be reindexed. Imagine have thousands of elements in an array. 
The same goes for removing from the begining. Once again everything has to be reindexed in the other direction.

searching is O(n)







*/

