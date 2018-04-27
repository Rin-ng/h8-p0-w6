document.getElementById("submitBtn").addEventListener("click", validate);

function validate(){
  var user = document.forms["myForm"]["userInput"].value;
  var pass1 = document.forms["myForm"]["pass1Input"].value;
  var pass2 = document.forms["myForm"]["pass2Input"].value;
  var email1 = document.forms["myForm"]["email1Input"].value;
  var email2 = document.forms["myForm"]["email2Input"].value;
  var isValid = true;
  var strCheck = false;
  var special = ["_","@","."];

//User validation
  if(!user){
    alert("Username cannot be empty!");
    isValid = false;
    return false;
  }
  else if(user !== "" && user !== undefined){
   strCheck = /^[a-zA-Z0-9,_,.]+$/.test(user);
   if(strCheck === false){
     alert("Username cannot contain special characters! \nAlphabets (a-z), numbers (0-9), underscore (_) and period (.) only");
     isValid = false;
     return false;
   }
 }

//Pass validation
   if(!pass1){
    alert("Password cannot be empty!");
    isValid = false;
    return false;
  }
  else if(pass1 !== "" && pass1 !== undefined){
    if(pass1.length < 5){
      alert("Password must at least be 5 letters!");
      isValid = false;
      return false;
    }
    else{
       if( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[-+=!@#$%^&*()_|<>/:;~`])).+$/.test(pass1) !== true){
         alert("Password must contain at least: \n\u2022 One lower case letter \n\u2022 One upper case letter \n\u2022 One symbol\n\u2022 One number ");
         isValid = false;
         return false;
       }
    }
  }

//Confirm Pass Validation
  if(!pass2){
    alert("Confirm password cannot be empty!");
    isValid = false;
    return false;
  }

  else if (pass2 !== "" && pass2 !== undefined){
    if(pass1 !== pass2){
      alert(" Passwords do not match!");
      isValid = false;
      return false;
    }
  }

//Email Validation
    if(!email1){
    alert("Email cannot be empty!");
    isValid = false;
    return false;
  }

  else if (email1 !== "" && email1 !== undefined){
    if(/^(?=.*[@.]).+$/.test(email1) !== true){
      alert("Please enter a valid email address!");
      isValid = false;
      return false;
    }
  }

//Email Confirmation Validation
    if(!email2 ){
    alert("Confirm email cannot be empty!");
    isValid = false;
    return false;
  }

  else if (email2 !== "" && email2 != undefined){
    if(email1 !== email2){
      alert("Email do not match!");
      isValid = false;
      return false;
    }
  }

//If all is true
if(isValid === true){
    document.getElementById("myForm").submit();
    return true;
  }

}
