let score = 0;
const totalQuestions = 3;

const username = prompt("What is your name?");
alert(
  `Hello, ${username}! Prepare for some questions. Be sure and type the LETTER corresponding to your answer.`,
);

let answer1 = prompt(
  `What color is the sky on a clear day?
    [a] Green
    [b] Blue 
`,
);

if (answer1 === "b") {
  alert("Correct!");
  score = score + 1;
} else if (answer1 === "a") {
  alert("Not quite!");
} else {
  alert("Please type only a or b. That counts as wrong this time.");
}

let answer2 = prompt(`How many legs does a spider have?
    [a] 6
    [b] 8
`);

if (answer2 === "b") {
  alert("Correct!");
  score = score + 1;
} else if (answer2 === "a") {
  alert("Not quite!");
} else {
  alert("Please type only a or b. That counts as wrong this time.");
}

let answer3 = prompt(
  `Which planet is closest to the Sun?
  [a] Mercury
  [b] Earth
`,
);

if (answer3 === "a") {
  alert("Correct!");
  score = score + 1;
} else if (answer3 === "b") {
  alert("Not quite!");
} else {
  alert("Please type only a or b. That counts as wrong this time.");
}

if (score === 0) {
  alert("You got 0 out of 3. Keep trying!");
} else if (score === 3) {
  alert("Perfect! You got 3 out of 3!");
} else {
  alert("Nice job! You got " + score + " out of 3.");
}
