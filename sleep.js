/*
Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

 

Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
Example 2:

Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.
 

Constraints:

1 <= millis <= 1000

async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve,millis));

}*/
// async ensures the function always returns a promise

async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}
 
let t = Date.now();
sleep(100).then(() => {
    console.log(Date.now() - t);

});
//console.log(Date.now() - t) prints the time difference, which is approximately 100ms.

 
let t = Date.now();
sleep(200).then(() => {
    console.log(Date.now() - t);

});
//The sleep function does not block the main thread.
//her code can run while waiting for the promise to resolve.