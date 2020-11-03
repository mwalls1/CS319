

function valid(){
    var username = document.getElementById("txtUsername").value;
    var password = document.getElementById("txtPassword").value;
    var checker = true;
    // alert(username);
    if(username == "coms319" && password == "lab10"){
      checker=true;
    } else{
      checker=false;
    }
    if(checker){
      document.getElementById("formLogin").style.display="none";
      document.getElementById("txtMessageLogin").innerHTML="Login Success!";
    } else{
      document.getElementById("txtMessageLogin").innerHTML="Login Failed!";
    }
}
