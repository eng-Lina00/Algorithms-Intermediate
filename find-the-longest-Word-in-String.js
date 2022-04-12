let string1="The quick brown fox jumped over the lazy dog";
let string2="May the force be with you";
function findLongestWord(string){
        let newarr=string.split(" ");
        let max=null;
        let x =newarr.length;
        for(let i=0 ; i<newarr.length ; i++){
            if(newarr[i].length > max){
                max=newarr[i].length;
              
            }
        }
        return max;

}
console.log(findLongestWord(string1));
console.log(findLongestWord(string2));