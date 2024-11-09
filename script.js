// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("submit");

const USERNAME = "brain";
const PASSWORD = "damage";
const ADDRESS = "750 N Rd, Bethel, ME, 04217! /n (BOMBER HOUSEEEEE)";

// When the user clicks on the button, open the modal
btn.onclick = function () {
    //grab username and password submitted
    username_submitted = document.getElementById("username").value;
    password_submiited = document.getElementById("password").value;

    if (username_submitted == USERNAME && password_submiited == PASSWORD) {
        modal.style.display = "none"
        document.getElementById('address').innerHTML = "<h2>"+ ADDRESS +"</h2>";
    } else {
        alert("Are you sure you're on the right site?")
    }
}
