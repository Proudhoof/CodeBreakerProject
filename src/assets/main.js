let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if (answer == "" && attempt == "") {
      setHiddenFields();
    }
    if (validateInput(input.value) == false) {
      return false;
    }
    else {
      attempt++;
    }
    var check = getResults(input);
    if (check == true){
      setMessage("You win! :)");
      showAnswer("true");
      showReplay();
    }
    else if (check == true && attempt => 10) {
      setMessage("You lose! :(");
      showAnswer("false");
      showReplay();
    }
    else {
      setMessage("Incorrect, try again.");
    }

}

function setHiddenFields() {
  answer = Math.random();
  answer = Math.floor(answer);
  answer.toString();
  while (answer.length < 4) {
    answer = "0" + answer;
  }
  attempt = 0;
}

function setMessage(inputMess) {
  document.getElementById("message").innerHTML = inputMess;
}

function validateInput(inputVal) {
  if (inputVal.length = 4) {
    return true;
  }
  else {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}

function getResults(inputRes) {
  var html = "<div class="row"><span class="col-md-6">' + inputRes + '</span><div class="col-md-6">";
  var score = 0;
  for (i = 0; i < inputRes.length; i++) {
    if (inputRes.charAt(i) == answer.charAt(i)) {
      html += "<span class="glyphicon glyphicon-ok"></span>";
      score+;
    }
    else if (answer.includes(inputRes.charAt(i)) && !(inputRes.charAt(i) == answer.charAt(i))) {
      html += "<span class="glyphicon glyphicon-transfer"></span>";
    }
    else {
      html += "<span class="glyphicon glyphicon-remove"></span>";
    }
  }
  html += "</div></div>";
  document.getElementById("results").innerHTML += html;
  if (score = 4) {
    return true;
  }
  else {
    return false;
  }
}

function showAnswer(condition) {
  var codeVar = document.getElementById("code");
  codeVar.innerHTML = answer.value;
  if (condition == "true") {
    codeVar.className += " success";
  }
  else {
    codeVar.className += " failure";
  }
}

function showReplay() {
  document.getElementById("guessing-div").style.display = "none";
  document.getElementById("replay-div").style.display = "block";
}
