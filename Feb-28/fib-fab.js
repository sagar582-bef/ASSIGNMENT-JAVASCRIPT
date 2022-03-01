function  fib(){
    var num=+prompt("please enter a number");
    if(isNaN(num)==true){
        alert("give number only");
    }
    else{
        if(num>2){
         for(var i=1;i<=num;i++){
             if(i%15==0){
                 document.write("<br/> FIZZ-BUZZ");
               
             }
             else if(i%3==0){
                 document.write("<br/> <center>  FIZZ");
                

             }
             else if(i%5==0){
                 document.write("<br/> BUZZ");
              
             }
             else{
                 document.write("<br/> <center> ", i);
                 document.write();
             }

         }
        }
        else{
            for(var j=1;j<=num;j++){
                document.write("</br> <center>", j);
            }
        }



    }
    
    

}