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
}
var str1 = prompt("please enter first a string");
var str2 = prompt("please enter second string");
checkAnagram(str1,str2);
