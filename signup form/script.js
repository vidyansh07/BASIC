function fname(){
    let fname = document.getElementById("firstname").value;
    let fname1 = document.getElementById("firstname")
    fname == "" ? fname1.value = "This field is empty": fname;
    
}
function lname(){
    let lname = document.getElementById("lastname").value;
    let lname1 = document.getElementById("lastname");
    lname == ""? lname1.value = "This field is empty": lname;
    
}
function mob_num(){
    let mob_num = document.getElementById("mob_num").value;
    let mob_num1 = document.getElementById("mob_num");
    mob_num == ""? mob_num1.value = "This field is empty": mob_num;
    
}
function re_num(){
    let re_num = document.getElementById("re_num").value;
    let re_num1 = document.getElementById("re_num");
    let mob_num = document.getElementById("mob_num").value;
    mob_num == re_num ? re_num : window.alert("please Enter the same mobile number.")
    re_num == ""? re_num1.value = "This field is empty": re_num;
}
function email(){
    let fname = document.getElementById("firstname").value;
    let email = document.getElementById("email").value;
    let email1 = document.getElementById("email");
    email==""? email1.value= "This field is empty":email;
    email.match(fname)?email: window.alert("please enter another email which includes your name.")
}
function username(){
    let lname = document.getElementById("lastname").value;
    let fname = document.getElementById("firstname").value;
    let username1 = document.getElementById("username");
    username1.value = fname+lname;
}
function password(){
    let password = document.getElementById("password").value;
    let password1 = document.getElementById("password");
    password == ""? password1.value = "This field is empty": password;
}
function re_password(){
    let password = document.getElementById("password").value;
    let re_password = document.getElementById("re_password").value;
    let re_password1 = document.getElementById("re_password");
    re_password == password ? re_password : window.alert("please enter same password.");
    re_password == ""? re_password1.value = "This field is empty":re_password;
}
function submit(){
    let submit = document.getElementById("submit");
    
}