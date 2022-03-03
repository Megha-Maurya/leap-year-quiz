var txtInput = document.querySelector("#txt-input");
var checkBtn = document.querySelector("#check-btn");
var outputDiv = document.querySelector("#output");

var userName = ("Give your name");
var welcomeMessage = ("Welcome ", userName);

var outputDiv = txtInput.value;
var year = txtInput.value;
function checkLeapYear(year) {
    var userAge = txtInput.value; 

    var yyyy = Number(userAge);
      if (userAge != yyyy ) {
         console.log("check your text");
       } else {
        if((year % 400 == 0) && (year % 100 == 0) || (year % 4 == 0))
      {
         alert("its a leap year")
         return
        // console.log("its leap year")
      } else {
         alert("not a leap yeaer")
         return
    }
 }
 checkLeapYear(year);

}
function clickHandler() {
        outputDiv.innerText = checkLeapYear(year);
        //  console.log(outputDiv.innerText);
    
}


checkBtn.addEventListener("click", clickHandler);
