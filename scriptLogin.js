document.getElementById("logInBtn").addEventListener("click", logIn);
var attempt = 3;

function logIn(){
  var user = document.forms["logIn"]["userInput"].value;
  var pass = document.forms["logIn"]["passInput"].value;

//User validation
  if(!user || !pass){
    alert("Invalid input. Please fill all fields.");
    return false;
 }
 else{
   if(user === "test" && pass === "Test123!"){
     document.getElementById("logIn").submit();
     window.location = "welcome.html";
     localStorage.setItem("userInput",user);
     return true;
   }
   else{
     attempt--;
     var remain = document.getElementById("attempt");
     remain.innerHTML = "You have "  + attempt + " attempts remaining";
     remain.style.color = "red";
     remain.style.fontWeight = "bold";
     remain.style.textShadow = "1px 1px 1px black";
     document.forms["logIn"]["userInput"].value = "";
     document.forms["logIn"]["passInput"].value = "";

     if(attempt === 0){
       remain.innerHTML = "Log in attempt exceeded. You are locked out.";
       document.forms["logIn"]["userInput"].disabled = true;
       document.forms["logIn"]["passInput"].disabled = true;
       document.forms["logIn"]["logInBtn"].disabled = true;
     }

     return (attempt, false);
   }

 }


}
