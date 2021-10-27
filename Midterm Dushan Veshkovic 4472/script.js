var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
  {
      question: "Inside which HTML element do we put the JavaScript (choose one)",
      a: "scripting",
      b: "js",
      c: "javascript",
      d: "script",
      answer: "D"

    },
  {
      question: "The external JavaScript file must contain the <script> tag (check all that apply)",
      a: "True",
      b: "False",
      c: "None",
      d: "Both",
      answer: "C"
    },
  {
      question: "How do you write Hello World in an alert box? (Select option)",
      a: "Alert(“Hello World”);",
      b: "alertBox(“Hello World”);",
      c: "msg(“Hello World”);",
      d: "msgBoxl(“Hello World”);",
      answer: "A"
    },
  ];
function get(x){
  return document.getElementById(x);
}
function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "Test completed";
    pos = 0;
    correct = 0;
    return false;
  }
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  chD = questions[pos].d;
  test.innerHTML = "<h3>"+question+"</h3>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='D'> "+chD+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  if(choice == questions[pos].answer){
    correct++;
  }
  pos++;
  renderQuestion();
}
window.addEventListener("load", renderQuestion);