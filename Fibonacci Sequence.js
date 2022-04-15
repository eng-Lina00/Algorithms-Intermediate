let number = prompt("Please enter The Number");

let a,b,result;
a=0;
b=1;
result=b;
function fibonacciSequence(number){
    if (number==0){
        return 0;
    }
    else if (number==1) {
        return 1;
    }
    else{
    for(let i=1;i<number;i++){
    
        result=a+b;
        a=b;
        b=result;
    } }
return result;
}
console.log(fibonacciSequence(number))

