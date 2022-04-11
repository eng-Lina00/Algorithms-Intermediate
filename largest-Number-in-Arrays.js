
let arr=[[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
let newarr=[];
let max =0;

function largestOfFour(arr) {
    for(let i=0 ; i< arr.length; i++){
        max = Math.max.apply(null, arr[i]); 
        newarr.push(max);
  }
  return newarr;
}
let arryofmaxnumber = largestOfFour(arr);
  console.log(arryofmaxnumber);