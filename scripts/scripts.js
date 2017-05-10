var questions = [
  {
    what: "images/dogCat.jpg",
    answer: "A dog and a cat"
  },
  {
    what: "images/lama.jpg",
    answer: "A lama"
  }
];
var iterator = 0;

window.onload = function(){
  document.getElementById("go").addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("flip-container").classList.add("hover");
  });
  document.getElementById("continue").addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("flip-container").classList.remove("hover");
    loadQuestion();
  });
  loadQuestion();
}

function loadQuestion(){
  if(iterator === questions.length){
    iterator = 0;
    alert("Finished");
  }
  document.getElementById("answer").innerText = questions[iterator].answer;
  document.getElementById("question-img").src = questions[iterator++].what;
}
