let email = document.getElementById("email");
let user = document.getElementById("username");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let form = document.getElementById("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(user.value == ""){
        user.style.borderBottom = "2px solid red";
    }
    else{
        user.style.borderBottom = "2px solid #2add19"
    }
    if(email.value == ""){
        email.style.borderBottom = "2px solid red";
    }
    else{
        email.style.borderBottom = "2px solid #2add19"
    }
    if(password.value == ""){
        password.style.borderBottom = "2px solid red";
    }
    else{
        password.style.borderBottom = "2px solid #2add19"
    }
    if(password2.value == ""){
        password2.style.borderBottom = "2px solid red";
    }
    else{
        password2.style.borderBottom = "2px solid #2add19"
    }
})

function myFunc(){
    let x = document.getElementById("password");
    if(x.type === "password"){
        x.type = "text"
    }
    else{
        x.type = "password"
    }
}

function verifyPassword(){
    let confirmPassword = document.getElementById("password2").value;
    let confirmPassword2 = document.getElementById("password").value;
    if(confirmPassword == ""){
        document.getElementById("message").innerHTML = "Fill in your password please!"
        return false;
    }
    if(confirmPassword.length < 8){
        document.getElementById("message").innerHTML = "Password must at least be 8 character!";
        return false;
    }
    if(confirmPassword.length > 15){
        document.getElementById("message").innerHTML = "Password must not exceed 15 character!";
        return false;
    }
    if(confirmPassword == confirmPassword2){
        document.getElementById("message").innerHTML = "Password Confirmed";
        document.getElementById("message").style.color = "green";
    }
    else{
        document.getElementById("message").innerHTML = "Wrong Password";
        document.getElementById("message").style.color = "red";
    }
}

function myVerify(){
    let y = document.getElementById("password2");
    if(y.type == "password"){
        y.type = "text";
    }
    else{
        y.type = "password";
    }
}