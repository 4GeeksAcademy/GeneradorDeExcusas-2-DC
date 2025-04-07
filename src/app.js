function generateExcuse() {
  let who = ["The dog", "My dad", "The mailman", "My cat"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the window"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];

  let excuse =
    `${who[Math.floor(Math.random() * who.length)]} ` +
    `${action[Math.floor(Math.random() * action.length)]} ` +
    `${what[Math.floor(Math.random() * what.length)]} ` +
    `${when[Math.floor(Math.random() * when.length)]}`;

  document.getElementById("excuse").innerText = excuse;
}

window.onload = generateExcuse;
