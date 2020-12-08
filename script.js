let text = document.getElementById("text");
let newText = text.innerHTML;
let index = 0;
let sec = 10;
let time = (sec * 1000) / newText.length;

function animationText() {
  if (index < newText.length) {
    index++;
    text.textContent = newText.slice(0, index);
  } else if (index === newText.length) {
    let reverseAnitamion = setInterval(reverseAnitamionText, time);
    clearInterval(intervalText);
  }
}
function reverseAnitamionText() {
  if (index > 0) {
    index--;
    text.textContent = newText.slice(0, index);
  } else if (index === 0) {
    return clearInterval(reverseAnitamionText);
  }
}
let intervalText = setInterval(animationText, time);

$(document).ready(function () {
  $.get("files/sometext.txt", function (data) {
    let arrayLines = data.split("\n");
    let rand = Math.floor(1 + Math.random() * (arrayLines.length));
    console.log(arrayLines[rand]);
    $('#test').text(arrayLines[rand]);
  });
});
