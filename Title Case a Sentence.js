let x="I'm a little tea pot";
let y="sHoRt AnD sToUt";

function litle_Case_Sentence(thestring){
  let  newarr =thestring.split(" ");
  let  newstring="";
  let x="";
  console.log(newarr);
     for(let i=0;i<newarr.length ; i++){
         for(let y =0 ;y < newarr[i].length;y++){
             if(y==0){
               x =newarr[i][y].toUpperCase();
               newstring =newstring.concat(x);
                    }
                   else{
                 x= newarr[i][y].toLowerCase();
                 newstring =newstring.concat(x);
                 if(y==newarr[i].length-1){
                    newstring =newstring.concat(' ');
                 }
                       }
                   }
     }
     
     return newstring
}
console.log(litle_Case_Sentence(x));
console.log(litle_Case_Sentence(y));
