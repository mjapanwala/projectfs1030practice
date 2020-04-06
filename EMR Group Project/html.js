



let totalAttempts = 3
let submitButton = document.getElementById('enter');
submitButton.addEventListener('click', validate)

function validate() {
  let inputText = document.getElementById('buttoninfo')
if (inputText.value == 'tarun' ){
window.location.href="./allergy.html"
} 
}