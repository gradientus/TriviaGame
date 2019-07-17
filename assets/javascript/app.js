$(document).ready(function() {
  var questions = [
    {
      q: "What was the original color of Dorothy's slippers?",
      a: ["purple", "blue", "emerald", "ruby"],
      c: "silver"
    },
    {
      q: "What was Toto's real name?",
      a: ["Chris", "Toto", "Spot", "Kitty"],
      c: "Terry"
    },
    {
      q: "Who wrote the Wizard of Oz series?",
      a: ["F. Scott Fitzgerald", "W.C. Fields", "Walt Disney", "Gerald Ford"],
      c: "L. Frank Baum"
    },
    {
      q: "What was used to simulate snow in the poppies scene?",
      a: ["rice", "tissue paper", "snow", "spit"],
      c: "asbestos"
    },
    {
      q: "What is the name of the leader of the flying moneys?",
      a: ["Bobo", "Zippy", "Coco", "Randy"],
      c: "Nikko"
    },
    {
      q: "What year was the Wonderful Wizard of Oz (book) written?",
      a: ["1939", "1890", "1945", "1929"],
      c: "1900"
    },
    {
      q: "How old was Judy Garland during the filming of the Wizard of Oz?",
      a: ["18", "22", "25", "40"],
      c: "16"
    },
    {
      q: "What Auntie Em's full name?",
      a: ["Emilia Earhart", "Auntie Em", "Liza Minelli", "Gerturde Oz"],
      c: "Emily Gale"
    },
    {
      q: "How many actors are sill alive today?",
      a: ["3", "2", "1", "18"],
      c: "0"
    },
    {
      q: "What species were the gaurds of the Wicked Witch's castle?",
      a: ["Wizards", "Munchins", "Gnomes", "Quadlings"],
      c: "Winkies"
    },
    {
      q:
        "Which famous vaudville actress played Glinda the Good Witch of the North?",
      a: ["Billy Jean", "Judy Garland", "Amos Snatch", "Heather Locklear"],
      c: "Billie Burke"
    },
    {
      q: "Why was Shirley Temple passed over for the role of Dorthy?",
      a: [
        "She didn't want the role.",
        "She was busy with other movies.",
        "She was ill.",
        "She was getting too old."
      ],
      c: "Her singing voice was shit."
    },
    {
      q: "At the beginning of the movie, who is the movie dedicated to?",
      a: [
        "Judy Garland",
        "The poor souls lost in the war",
        "There is no dedication",
        "Toto"
      ],
      c: "The young at heart"
    },
    {
      q: "What Pink Floyd album can be nearly synchronized with the movie?",
      a: [
        "Momentary Lapse of Reason",
        "The Wall",
        "Ummagumma",
        "The Division Bell"
      ],
      c: "The Dark Side of the Moon"
    },
    {
      q:
        "Which of the following does the Wicked Witch say when she is melting?",
      a: [
        "It's not fair!",
        "How dare you! You bitch!",
        "Is that all you got?",
        "Monkeys! Kill her"
      ],
      c: "Oh what a world!  What a world!"
    },
    {
      q: "Who was the sister of the Wicked Witch of the West?",
      a: [
        "Wicked Witch of the North",
        "Ozma of Oz",
        "The Patchwork Girl",
        "Amy"
      ],
      c: "Wicked Witch of the East"
    },
    {
      q: "What did the Wicked Witch write in the sky above the Emerald City?",
      a: [
        "You will all die!",
        "Donald Trump for President",
        "Yolo",
        "Surrender!"
      ],
      c: "Surrender Dorothy"
    },
    {
      q: "Who were Dorothy's companions?",
      a: [
        "Lion, Tigers, Bears, Toto",
        "Tin Man, Wizard of Oz, Glinda, the Munchkins",
        "She was alone",
        "Hunk, Zeke, Professor, Almira"
      ],
      c: "Scarecrow, Tin Man, Cowardly Lion, Toto"
    },
    {
      q: "What year did the movie premier on TV?",
      a: ["1971", "1961", "1939", "1980"],
      c: "1956"
    },
    {
      q: "What did the Wizard of Oz want before granting any wishes?",
      a: [
        "ruby slippers",
        "capture the Wicked Witch",
        "escape from the Emeral City",
        "water"
      ],
      c: "the Wicked Witches broomstick"
    }
  ];

  var randomQuestion = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
  var questionsText = $("<div>");
  var answersText = $("<div>");
  $(questionsText).addClass("questions");
  $(answersText).addClass("answers");
  $(questionsText).text(questions[randomQuestion].q);
  console.log(randomQuestion);

  $(answersText).text(
    questions[randomQuestion].a[0] +
      " " +
      questions[randomQuestion].a[1] +
      " " +
      questions[randomQuestion].a[2] +
      " " +
      questions[randomQuestion].a[3] +
      " " +
      questions[randomQuestion].c
  ); //F
  $("#questionsHere").append(questionsText);
  $("#answersHere").append(answersText);
});

//TODO:  Foundation
//randomize the order of the questions 0-3 & c.
//put all the answers into buttons
//add an on click event listener to detect which of the answers the user click on
//if the user clicks on any of the answers except c, show that the answer is wrong
//else if the user clicks on c then show that the answer is right

//create an array of good answer gifs (10)
//create an arry of bad answer gifs (10)
//create an array of game over gifs (5)

//TODO: Game
//if the correct answer is chosen show random good gif and correct
//if an incorrect answer is chosen show random bad gif and the correct answer
//count how many good answers
//count how many bad answers
//only 5 questions
//at the end of the 5 questions give a score
//at the end give a chance to play again

//TODO: timers
//add timer, give 10-20 seconds to answer the question, if you answer then bad gif and correct answer shown, test it out
//add timer, give 5-10 seconds to see the right/wrong answer
//at the very end, no timer just the score and a chance to start again and a larger game over gif
