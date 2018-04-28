// window.onload = function() {
//   document.getElementById("myProgress").style.display = 'none';
// };

var user = localStorage.getItem("userInput");
var welcome = document.getElementById("welcomeUser");

welcome.innerHTML = "Welcome, " + user;

document.getElementById("submit").addEventListener("click",random);

function random(){
  var ranNum = Math.floor(Math.random() * 10) + 1;
  var input = document.getElementById("num").value;
  var result = document.getElementById("result");
  var result1 = document.getElementById("result1");
  var bet = document.getElementById("bet").value;
  var text = document.getElementById("money").innerHTML;
  text = parseInt(text);
  input = parseInt(input);
  var flag = true;

  if(text === 0){
    result.innerHTML = "No money left. Please come back another time.";
    result1.innerHTML = "";
    document.getElementById("resultCont").style.borderStyle = "double";
    document.getElementById("submit").disabled = true;
    document.getElementById("num").value = "";
    document.getElementById("bet").value = "";
    flag = false;
    return false;
  }
  if(!bet){
    result.innerHTML = "Bet cannot be empty! Please fill in amount and hit submit";
    document.getElementById("resultCont").style.borderStyle = "double";
    result1.innerHTML = "";
    flag = false;
    return false;
  }
  else {
    if(bet > text && text !== 0){
    result.innerHTML = "Bet cannot exceed current money! Please fix bet and try again";
    document.getElementById("resultCont").style.borderStyle = "double";
    result1.innerHTML = "";
    flag = false;
    return false;
  }
  if((/^[0-9]+$/.test(bet) === false)){
    result.innerHTML = "Bet must be numerical!";
    result1.innerHTML = "";
    document.getElementById("resultCont").style.borderStyle = "double";
    flag = false;
    return false;
  }

  if(input < 1 || input > 10 || (/^[0-9]+$/.test(input) === false)){
      result.innerHTML = "Invalid Input! Please enter value between 1-10!";
      result1.innerHTML = "";
      document.getElementById("resultCont").style.borderStyle = "double";
      flag = false;
      return false;
    }

  if(flag === false){
    result.innerHTML = "";
    result1.innerHTML = "";
    return false;
  }

  if(flag){
    if(input === ranNum){
      result.innerHTML = "The number is: " + ranNum + " and you inputted: " + input;
      result1.innerHTML = "YOU WIN!";
      result1.style.color = "blue";
      result1.style.fontWeight = "bold";
      document.getElementById("bet").value = "";
      text =  2*bet;
      document.getElementById("money").innerHTML = text;
      document.getElementById("resultCont").style.borderStyle = "double";
    }
    else{
      result.innerHTML = "The number is: " + ranNum + " and you inputted: " + input;
      result1.innerHTML = " YOU LOST!";
      result1.style.color = "red";
      result1.style.fontWeight = "bold";
      document.getElementById("bet").value = "";
      text -= bet;
      document.getElementById("money").innerHTML = text;
      document.getElementById("num").value = "";
      document.getElementById("resultCont").style.borderStyle = "double";
        }
      }
    }
}











// function post(){
// var stat = [];
// stat.push(document.getElementById("stat").value);
//
// var first = document.getElementById("1");
// var sec = document.getElementById("2");
// var third = document.getElementById("3");
//
// if(!first.innerHTML){
//   first.innerHTML = stat[0];
// }
//
// if(stat.length > 1){
// if(first.innerHTML !== "" && !sec.innerHTML){
//   sec.innerHTML = stat[1];
// }
//
// if(sec.innerHTML !== "" && !third.innerHTML ){
//   third.innerHTML = stat[2];
// }
// }
// }

//
// document.getElementById("sad").addEventListener("click",sad);
//
// function sad(){
//     var x = document.getElementById("sadProg").value
//     document.getElementById("sadProg").value = (x+1);
//     document.getElementById("myProgress").style.display = "";
// }
