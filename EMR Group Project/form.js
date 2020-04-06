
let totalAttempts = 3
let submitButton = document.getElementById('btn');
submitButton.addEventListener('click', validate)

function validate() {
let username = document.getElementById("usernames")
let password = document.getElementById("passwords")

if (username.value == 'tarun' && password.value == 'sharma'){
window.location.href="./html.html"
} else {
  totalAttempts--
if (totalAttempts == 0)
 username.disabled = true
 password.disabled =true;
return false
 }
}

