/*Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.

 

Example 1:

Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
Example 2:

Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Explanation:
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
Example 3:

Input: functions = [], x = 42
Output: 42
Explanation:
The composition of zero functions is the identity function
 

Constraints:

-1000 <= x <= 1000
0 <= functions.length <= 1000
all functions accept and return a single integer*/
 // this is  acompose function syntax

const compose =function(functions){
    return function(x) {
        return functions.reduceRight((acc,fn) => fn (acc) ,x);

    };
}

const functions1 = [x1 => x1+1, x1=> x1*x1, x1=> 2*x1];
const x1=4;
console.log(compose(functions1)(x1));

const functions2 =[x2=>10*x2, x2=>10*x2,x2=>10*x2];
const x2=1;
console.log(compose(functions2)(x2));

const functions3 = [];
const x3=42;
console.log(compose(functions3)(x3));
