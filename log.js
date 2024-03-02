let signupBtn = document.getElementById("signupbtn");
let signinBtn = document.getElementById("signinbtn");
let namefield = document.getElementById("namefield");
let title = document.getElementById("title");

signinBtn.onclick = function(){
    namefield.style.maxHeight = "0";
    title.innerHTML = "Sign in";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");

}
signupBtn.onclick = function(){
    namefield.style.maxHeight = "60px";
    title.innerHTML = "Sign up";
    signinBtn.classList.add("disable");
    signupBtn.classList.remove("disable");

}
signinBtn.ondblclick = function(){let link = getElementById("link"); }