window.onload = () => {
  document.querySelector("#new-excuse").innerHTML = generateExcuses();
};

let generateExcuses = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndx = (randomItem = Math.floor(Math.random() * who.length));
  let actionIndx = (randomItem = Math.floor(Math.random() * action.length));
  let whatIndx = (randomItem = Math.floor(Math.random() * what.length));
  let whenIndx = (randomItem = Math.floor(Math.random() * when.length));

  return (
    who[whoIndx] +
    " " +
    action[actionIndx] +
    " " +
    what[whatIndx] +
    " " +
    when[whenIndx]
  );
};
