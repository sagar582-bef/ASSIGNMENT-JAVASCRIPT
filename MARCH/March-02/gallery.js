var counter=[0,0,0,0,0,0,0,0];
function like(n,id){
    counter[n] += 1;
   
     render(n,id);
    // ab[1].innerText=counter;

   

}
function dislike(n,id) {
    counter[n] -= 1; // counter = counter - 1;
    render(n,id);
}
function render(n,id) {
    // var disp = document.getElementById('op_text');
    // disp.innerText = counter;
    var ab=document.getElementById(id);
    ab.innerText=counter[n];
}