var questions = [
  {
    question: "What was the original color of Dorothy's slippers?",
    answers: ["yes", "orange", "emerald", "silver", "ruby"],
    correct: "silver"
  },
  {
    question: "What was Toto's real name?",
    answers: ["Chris", "Terry", "Toto", "Spot", "Kitty"],
    correct: "Terry"
  },
  {
    question: "How many sequels were there to the book Wonderful Wizard of Oz?",
    answers: ["3", "0", "4", "1", "17", "4"],
    correct: "17"
  },
  {
    question: "Who wrote the Wizard of Oz series of books?",
    answers: [
      "F. Scot Fitzgerald",
      "W.C. Fields",
      "L. Frank Baum",
      "Walt Disney",
      "Anne Rice"
    ],
    correct: "L. Frank Baum"
  },
  {
    question: "What was the name of the Good Witch of the North?",
    answers: ["Bob", "Glenda", "Glinda", "Bubbles", "Almira"],
    correct: "Glinda"
  },
  {
    question: "Who starred as the Wicked Witch of the West?",
    answers: [
      "Margaret Hamilton",
      "Judy Garland",
      "Melania Trump",
      "Billie Burke",
      "Gretta Garbo"
    ],
    correct: "Margaret Hamilton"
  },
  {
    question: "What was used to simulate snow in the poppies scene?",
    answers: ["rice", "tissue paper", "feathers", "asbestos", "spit"],
    correct: "asbestos"
  },
  {
    question: "What was the name of the lead of the flying monkeys?",
    answers: ["Nikko", "Bobo", "Donald Trump", "Coco", "Hobo"],
    correct: "Nikko"
  },
  {
    question: "What was Auntie Em's full name?",
    answers: [
      "Auntie Em",
      "Emily Oz",
      "Almira Gulch",
      "Emily Gale",
      "Bag Lady"
    ],
    correct: "Emily Gale"
  },
  {
    question:
      "How did they get the horses colored in the first scene inside the Emerald City?",
    answers: ["paint", "dye", "Jello", "CGI", "brown"],
    correct: "Jello"
  },
  {
    question: "How old was Judy Garland when she starred as Dorothy?",
    answers: ["12", "14", "16", "18", "60"],
    correct: "16"
  },
  {
    question: "Why was Shirley Temple not chosen to play Dorothy?",
    answers: [
      "She was working on another movie.",
      "She didn't want to.",
      "She was too young.",
      "She was too old.",
      "Her singing voice was shit."
    ],
    correct: "Her singing voice was shit."
  },
  {
    question: "What was the species Dorothy first encounters in Oz?",
    answers: ["Quadlings", "Witches", "Wizards", "Munchkins", "Winkies"],
    correct: "Munchkins"
  },
  {
    question: "What was the species that guarded the Wicked Witch's castle?",
    answers: ["Winkies", "Munchkins", "Toadies", "Quadlings", "Farts"],
    correct: "Winkies"
  },
  {
    question: "What year was the movie released?",
    answers: ["1929", "1939", "1949", "1969", "1900"],
    correct: "1939"
  },
  {
    question: "What year was the movie first shown on TV?",
    answers: ["1922", "1938", "1956", "1960", "2007"],
    correct: "1956"
  },
  {
    question: "Who were Dorothy's companions?",
    answers: [
      "lions, tigers, bears",
      "Scarecrow, Tin Man, Cowardly Lion, Toto",
      "Munchkins, Quadlings, Witches, Warlocks",
      "Uncle Hank, Hunk, Auntie Em",
      "She had no friends."
    ],
    correct: "Scarecrow, Tin Man, Cowardly Lion, Toto"
  },
  {
    question: "What does the Wicked Witch write in the sky above Emerald City?",
    answers: [
      "Surrender the Ruby Slippers",
      "Surrender or die",
      "Surrender Dorothy",
      "Fake news",
      "Kill Dorothy"
    ],
    correct: "Surrender Dorothy"
  },
  {
    question: "Who figures out the wizard is a fraud?",
    answers: ["Dorothy", "Tin Man", "Mr. Ed", "Scarecrow", "Toto"],
    correct: "Toto"
  },
  {
    question: "What was written on the balloon when the wizrd left Oz?",
    answers: ["Goodbye", "State Fair Omaha", "Peace", "Bite me", "Oz"],
    correct: "State Fair Omaha"
  },
  {
    question: "Who was killed by Dorothy's house?",
    answers: [
      "Munhkins",
      "Some girl named Amy",
      "Wicked Witch of the West",
      "Wicked Witch of the East",
      "Mombi of the North"
    ],
    correct: "Wicked Witch of the East"
  },
  {
    question: "Who played Dorothy in the awful 1985 Return to Oz sequel?",
    answers: [
      "Liza Minelli",
      "Fairuza Balk",
      "Soleil Moon Frye",
      "Blossom Russo",
      "Tina Turner"
    ],
    correct: "Fairuza Balk"
  },
  {
    question: "Quote: I never heard of a _____ witch before!",
    answers: ["wicked", "orange", "beautiful", "fat", "witchy"],
    correct: "beautiful"
  },
  {
    question: "What kind of trees attacked Dorothy and her companions?",
    answers: ["peach", "plum", "almond", "avocado", "apple"],
    correct: "apple"
  },
  {
    question:
      "Which Pink Floyd album can be synchronized with the film if you start it on the 3rd MGM lion roar?",
    answers: [
      "Ummagumma",
      " The Dark Side of the Moon",
      "The Wall",
      "The Division Bell",
      "A Momentary Lapse of Reason"
    ],
    correct: "The Dark Side of the Moon"
  }
];
var correct = 0;
var incorrect = 0;
var currentQuestion = 0;
var timerCounter = 20;
var timerValue;

//Put the questions and the answers on the screen.
function questionToScreen() {
  var questionToScreen = questions[currentQuestion].question;
  var answerToScreen = questions[currentQuestion].answers;
  $("#timer").text("Countdown: " + timerCounter);
  $("#mainGame").text(questionToScreen);

  console.log(answerToScreen);

  for (var i = 0; i < answerToScreen.length; i++) {
    var answersHere = $("<p>");
    $(answersHere).attr("data-value", answerToScreen[i]);
    $(answersHere).addClass("answer-choices");
    $(answersHere).text(answerToScreen[i]);
    $("#mainGame").append(answersHere);
  }
}
questionToScreen();
