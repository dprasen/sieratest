/* Challenge #3 according to https://codebunk.com/b/8461100124294/
/* Find the sum of even numbers in fibonacci series limits to 4000000*/

var fibEvenSeries = [];
var sum = 0;

var GenEvenFibSeries = function(){
    var firstNum = 0;
    var secondNum = 1;
    var nextNum = firstNum + secondNum;
    
    while(nextNum <= 4000000){        
        if(nextNum % 2 === 0){
            fibEvenSeries.push(nextNum);
        }
        firstNum = secondNum;
        secondNum = nextNum;
        nextNum = firstNum + secondNum;
    }            
};


/* execute the program using node FibSumEven4mk  */

GenEvenFibSeries();
/* sum the list */

sum = fibEvenSeries.reduce(function(a, b){
    return a + b;
}, 0);

console.log(sum);



