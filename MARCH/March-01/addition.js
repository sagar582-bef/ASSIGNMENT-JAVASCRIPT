function addition(){
    var first_value= document.getElementById("first-input-value");
    var second_value= document.getElementById("second-input-value");
    var result=  parseInt(first_value.value) + parseInt(second_value.value);
    // alert(result);
    var display_addition_value=document.getElementById("display-text");
    if(isNaN(first_value.value)==true || isNaN(second_value.value) == true){
    //   alert("give only number");
          display_addition_value.innerHTML= "please give proper number";
    }
    else{
        display_addition_value.innerText= `The addition of two input value is ${result}`;
    }
    // display_addition_value.innerText= `The addition of two input value is ${result}`;

}