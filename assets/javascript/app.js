$(document).ready(function() {
  var questions = [
    {
      q: "What was the original color of Dorothy's slippers?",
      a: ["purple", "orange", "emerald", "silver", "ruby"]
    },
    {
      q: "What was Toto's real name?",
      a: ["Chris", "Terry", "Toto", "Spot", "Kitty"]
    },
    {
      q: "Who wrote the Wizard of Oz series?",
      a: [
        "F. Scott Fitzgerald",
        "W.C. Fields",
        "Walt Disney",
        "Anne Rice",
        "L. Frank Baum"
      ]
    },
    {
      q: "What was used to simulate snow in the poppies scene?",
      a: ["rice", "tissue paper", "feathers", "spit", "asbestos"]
    },
    {
      q: "What is the name of the leader of the flying moneys?",
      a: ["Nikko", "Bobo", "Donald Trump", "Coco", "Hoohoo"]
    },
    {
      q: "What Auntie Em's full name?",
      a: ["Auntie Em", "Emily Ozma", "Almira Gulch", "Emily Gale", "baglady"]
    },
    {
      q: "What was the Good Witch of the North named?",
      a: ["Bob", "Glenda", "Glinda", "Bubbles", "Dorothy"]
    },
    {
      q: "Who starred as the Wicked Witch of the West?",
      a: [
        "Margaret Hamilton",
        "Judy Garland",
        "Bettle Grable",
        "Billie Burke",
        "Gretta Garbo"
      ]
    },
    {
      q: "What species were the gaurds of the Wicked Witch's castle?",
      a: ["Muchkins", "Quadlings", "Winkies", "Ogres", "Toads"]
    },
    {
      q: "How did they get the horses colored in the Emerald City?",
      a: ["paint", "dye", "Jello", "CGI", "brown"]
    }
  ];

  //function to create the rules message and the button
  function gameStart() {
    var rulesText = $("<div>");
    var startButton = $("<button>");

    rulesText.addClass("rulesText");
    rulesText.text(
      "Try to answer the questions correctly. You have 20 seconds per question."
    );
    $(".contents").append(rulesText);

    startButton.addClass("startButton");
    startButton.text("We're Off to See the Wizard!");
    $(".contents").append(startButton);
  }
  gameStart();

  //function generates a random number to pick from and adds to an array so that it cannot pick that question again.
  function pickQuestion() {
    //var alreadyPicked = []; //so you don't get the same question
    var whichQuestion = Math.floor(Math.random() * questions.length);
    //alreadyPicked.push(whichQuestion);
    return whichQuestion;
    //QUESTION: do I need to return something here? or should I remove the array and put it else where assign a variable with the value of this function?
  }

  //function to add the picked question and answer from pickedQuestion to the contents class
  // function generateQuestion() {
  //   var questionText = $("<div>");
  //   questionText.addClass("questionText");
  //   questionText.text(questions[5].q);
  //   $(".content").append(questionText);
  // }

  //when the start button is clicked the contents are cleared to make way for the questions and answers
  $(".startButton").on("click", function() {
    $(".contents").empty();
    var questionText = $("<div>");
    $(questionText).addClass("questionText");
    $(questionText).text(questions[pickQuestion()].q);
    $(".contents").append(questionText);
    console.log(pickQuestion());
  });
});
