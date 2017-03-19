
var attempt = 3;

function check(form) { /*function to check userid & password*/
    /*the following code checkes whether the entered userid and password are matching*/
    if(form.userid.value == "admin" && form.pswrd.value == "admin") {
        alert ("Login successfully");
        window.location='dashboard.html';/*opens the target page while Id & password matches*/
        return false;
    }
    else {
        attempt --;
        alert("Error Password or Username")/*displays error message*/
        alert("You have left "+attempt+" attempt;");
        if( attempt == 0)
        {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
      }
  }






/*$(document).ready(function() {
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate()
{
        var username = document.getElementById("name").value;
        var password = document.getElementById("password").value;
        if ( username == "admin" && password == "admin")
          {
           alert ("Login successfully");
    window.location = "dashboard.html";
             // Redirecting to other page.
          //  document.getElementById("form_id").action = action;
            //document.getElementById("form_id").submit();
            return false;
          }
          else
          {
            attempt --;// Decrementing by one.
            alert("You have left "+attempt+" attempt;");
            // Disabling fields after 3 attempts.
            if( attempt == 0)
            {
                document.getElementById("username").disabled = true;
                document.getElementById("password").disabled = true;
                document.getElementById("submit").disabled = true;
                return false;
            }
          }
}
});*/
