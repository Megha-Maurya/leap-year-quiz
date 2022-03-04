var txtInput = document.querySelector("#txt-input");
var checkBtn = document.querySelector("#check-btn");
var outputDiv = document.querySelector("#output");

var userName = ("Give your name");
var welcomeMessage = ("Welcome ", userName);

var year = txtInput.value;
function checkLeapYear(year) {
    var userAge = txtInput.value; 

    var yyyy = Number(userAge);
      if (userAge != yyyy ) {
         return outputDiv.innerText = "check your text";

       } else {
        if((year % 400 == 0) && (year % 100 == 0) || (year % 4 == 0))
      {
        
         outputDiv.innerText = "its a leap year";
         
      } else {
         outputDiv.innerText = "not a leap year"
         
    } 
    
 } 
 checkLeapYear(year); 
} 

function clickHandler() {
         outputDiv.innerText = checkLeapYear(year); return
             
}


checkBtn.addEventListener("click", clickHandler);
