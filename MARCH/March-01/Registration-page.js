function checkPassword(){
    var first_password=document.getElementById("password");
    // first_password.value;
    var second_password=document.getElementById("re-password");
    var display_text=document.getElementById("display-text");
    if(first_password.value == second_password.value ){
        if(first_password.value.length == 0 && second_password.value.length == 0){
            // display_text.innerText="Your password is matched";
            display_text.innerText="👀 You didn't give password,Please give your password"; 
        }
        else{
            display_text.innerText="✔ Your password is matched";
            // display_text.innerText="Please give your password";  
        }
        // display_text.innerText="Your password is matched";
    }
    else{
        display_text.innerText="❌ Your password is not matched , please chechk your password";
    }
}