let userEmail= document.querySelector("#email")
let userPassword= document.querySelector("#password")
let userBtn=document.querySelector("#btn")

userBtn.addEventListener("click" ,() => {
    console.log("function is working");
    console.log(userEmail.value);
    console.log(userPassword.value);

let emaildb="honda@gmail.com"
let passworddb="1234"

if (userEmail.value == emaildb && userPassword.value == passworddb){
    console.log("login");

window.location.href= "dashboard.html"


    
}else 
    console.log("invalid credential");
    


})
    