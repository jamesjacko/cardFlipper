var questions = [
  {
    what: "images/dogCat.jpg",
    type: "select",
    options:
      {
        values: [
          "A dog and a cat",
          "A house and a car",
          "Some Spam"
        ]
      },
    answer: 0
  },
  {
    what: "images/lama.jpg",
    type: "text",
    answer: "A lama"
  }
];
var iterator = 0;
var answerStage = true;

window.onload = function(){
  document.getElementById("flip-container").addEventListener("transitionend", function(){
    if(answerStage){
      document.getElementById("loader").style.display = "none";
      loadQuestion();
    }
  })
  document.getElementById("go").addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("flip-container").classList.add("hover");
  });
  document.getElementById("continue").addEventListener("click", function(e){
    e.preventDefault();
    answerStage = true;
    document.getElementById("loader").style.display = "block";
    document.getElementById("flip-container").classList.remove("hover");
  });
  loadQuestion();
}

function loadQuestion(){
  if(iterator === questions.length){
    iterator = 0;
    alert("Finished");
  }
  if(questions[iterator].type === "select"){
    document.getElementById("options").innerHTML = getSelect(questions[iterator]);
    console.log(getSelect(questions[iterator]));

  } else if(questions[iterator].type === "text"){
    document.getElementById("options").innerHTML = getText(questions[iterator]);
  }
  document.getElementById("answer").innerText = questions[iterator].answer;
  document.getElementById("question-img").src = questions[iterator++].what;
  answerStage = false;
}

function getSelect(question){
  var select = document.createElement("select");
  var option;
  option = document.createElement("option");
  option.appendChild(document.createTextNode("Please Select"));
  option.disabled = true;
  option.selected = true;
  select.appendChild(option);
  for (var i = 0; i < question.options.values.length; i++) {
    option = document.createElement("option");
    option.setAttribute("value", i);
    option.appendChild(document.createTextNode(question.options.values[i]));
    select.appendChild(option);
  }
  select.setAttribute("names", "answer");
  select.setAttribute("placeholder", "select");
  var parent = document.createElement("div");
  parent.appendChild(select);
  return parent.innerHTML;
}

function getText(question){
  var text = document.createElement("input");
  text.setAttribute("type", "text");
  text.setAttribute("name", "answer");
  text.setAttribute("placeholder", "Enter Your Answer");
  var parent = document.createElement("div");
  parent.appendChild(text);
  return parent.innerHTML;
}
