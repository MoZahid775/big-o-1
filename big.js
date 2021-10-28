const {
    performance
  } = require('perf_hooks');


function addUpTo(n) {
 let total = 0

 for (let i= 1; i <= n; i++) {
     total += i
 }
return total
}
console.log(addUpTo(29))



function addUpTre(n) {
    return n * (n+1) /2
}

console.log(addUpTre(10))

let t1 = performance.now()
addUpTo(1000000000)
let t2 = performance.now()
console.log(`time Elapsed: ${(t2 - t1) / 1000} seconds.`)