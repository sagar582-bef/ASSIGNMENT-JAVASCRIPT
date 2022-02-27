function checkAnagram(str1,str2){
              var len1=str1.length;
              var len2=str2.length;
              if(len1 !== len2){
                  return document.write("FALSE");
              }
             let a= str1.split('').sort().join('');
               let b=str2.split('').sort().join('');
             if(a === b){
                return document.write("TRUE");
             }
             else{
                return document.write("FALSE");  
             }



            //   for(let i=0;i<len1;i++){
            //       if(str1[i] != str2[i]){
            //           return document.write("FALSE");
            //       }
            //       return document.write("TRUE");
            //   }
}
var str1 = prompt("please enter first a string");
var str2 = prompt("please enter second string");
checkAnagram(str1,str2);
// function checkStringsAnagram(a, b) {
//     let len1 = a.length;
//     let len2 = b.length;
//     if(len1 !== len2){
//        console.log('Invalid Input');
//        return
//     }
//     let str1 = a.split('').sort().join('');
//     let str2 = b.split('').sort().join('');
//     if(str1 === str2){
//        console.log("True");
//     } else { 
//        console.log("False");
//     }
//  }
//  checkStringsAnagram("indian","ndiani")