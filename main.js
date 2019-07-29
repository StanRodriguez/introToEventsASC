const a = "Jaden";
// get the element you are going to work with
const button = document.getElementById("pushMe");

//create the function that is going to work as callback
function change() {
  alert("You pushed me");
}

// add the click event to the button
button.addEventListener("click", change);
