var readlineSync = require('readline-sync');

var username = readlineSync.question("To play tell me your name" + " ");
console.log("Welcome" + " " + username + " " + "It will be a fun game.");
console.log("I am passionated about Java,Let's check how much you know about JAVA \n");
console.log("Rules to play: there are 3 options of each question \n To choose answer type a/b/c \n No need to type full answer ");



function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  console.log("you entered" + " " + userAnswer);
  if (userAnswer == answer) {
    console.log("right");
  }
  else {
    console.log("wrong");
  }

}

var quizzQuestion = [{
  question: "when was java released? \n a:1995 \n b:2000 \n c:1996 \n",
  answer: "a"
},
{
  question: " AS of March 2022, what is latest version of java? \n a:Java 25 \n b:Java 17 \n c:Java 8 \n",
  answer: "b"
},

{
  question: "Java programs are? \n a:plateform-independent \n b:Not reusable \n c:Not scalable  \n",
  answer: "a"
},

{
  question: "Who ownes Java? \n a:Microsoft \n b:Google \n c:Oracle  \n",
  answer: "c"
},

{
  question: "Who was the core designer of Java? \n a:James Gosling \n b:Graydon Hoare \n c:Patrick Naughton \n",
  answer: "a"
},

{
  question: "Is Java OOP language? \n a:No \n b:Yes \n",
  answer: "a"
},

{
  question: "Which keyword is used to make resources thread-safe ? \n a:Wait \n b:Sleep \n c:Synchronized \n",
  answer: "c"
},

{
  question: "Java has it's origin in? \n a:Oak programming language \n b:C Programming Language \n c:Phython \n",
  answer: "a"
},

{
  question: "The command javac is used ? \n a:debug java program \n b:compile java program \n c:execute java program \n",
  answer: "b"
},

{
  question: "Break statement is used to ? \n a:get out of a system \n b:get out of a program \n c:get out of a loop \n",
  answer: "c"
}];

for (i = 0; i < quizzQuestion.length; i++) {
  var c = quizzQuestion[i];
  play(c.question, c.answer)

}
console.log("thanks for playing_ _ _ _ _");