window.onload() = function() {

var rightAnswers = 0;

var clockRunning = false;
var time = 0;
var intervalId;


///start the game and display the question box///

$("#begin").on("click", function goGameGo(){

$("#quiz-box").css("display", "block");
   
var rightAnswers = 0;

var questions = [
  {
    question: "To which tree does this leaf belong?",
    choices: ["Oak", "Maple", "Beech", "Apricot"],
    species: "Maple"
  },

  {
    question: "To which tree does this leaf belong?",
    choices: ["Chestnut", "Beech", "Tulip poplar", "Ironwod"],
    species: "Beech"
  },

  {
    question: "To which tree does this leaf belong?",
    choices: ["Magnolia", "Hickory", "White cedar", "Horse chestnut"],
    species: "Horse chestnut"
  },

  {
    question: "To which tree does this leaf belong?",
    choices: ["Oak", "Beech", "Black tupelo", "Maple"],
    species: "Oak"
  },,

  {
    question: "To which tree does this leaf belong?",
    choices: ["Apricot", "Black cherry", "Witch hazel", "Hazelnut"],
    species: "Witch Hazel"
  }
];

function start() {
  if (!clockRunning) {
    intervalId = setInterval(count, 30 * 1000);
    clockRunning = true;
  }
}




$("#intro-screen").css("display", "none");
$("#quiz-box").css("display", "block");
 

 }); 

};