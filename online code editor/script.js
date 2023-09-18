document.getElementById("code").oninput  = function(){
    document.getElementById("run").innerHTML = "";
    document.getElementById("run").innerHTML = document.getElementById("code").value;
}