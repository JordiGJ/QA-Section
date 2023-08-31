// variables
const options = {
  plus: "fa-plus-square",
  minus: "fa-minus-square",
};

const data = [
  {
    id: 1,
    name: "one",
    question: "Do You Accept All Major Credit Cards?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemodoloribus quaerat, magninumquam repellat reprehenderit.",
  },
  {
    id: 2,
    name: "two",
    question: "Do You Suppport Local Farmers?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemodoloribus quaerat, magninumquam repellat reprehenderit.",
  },
  {
    id: 3,
    name: "three",
    question: "Do You Use Organic Ingredients?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemodoloribus quaerat, magninumquam repellat reprehenderit.",
  },
  {
    id: 4,
    name: "four",
    question: "Would You Work Abroad?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemodoloribus quaerat, magninumquam repellat reprehenderit.",
  },
];

// create and append sections for each element in data
data.forEach((obj) => {
  const section = document.createElement("section");
  section.classList.add(`${obj.name}`);
  const question = document.createElement("div");
  question.classList.add("question");
  const p = document.createElement("p");
  p.textContent = obj.question;
  const icons = document.createElement("div");
  icons.classList.add("icons");
  const plus = document.createElement("i");
  plus.classList.add("far");
  plus.classList.add("fa-plus-square");
  const minus = document.createElement("i");
  minus.classList.add("far");
  minus.classList.add("fa-minus-square");
  minus.classList.add("hidden");
  const text = document.createElement("div");
  text.classList.add("text");
  text.classList.add("hidden");
  text.textContent = obj.text;
  document.body.append(section);
  section.append(question);
  question.append(p);
  question.append(icons);
  icons.append(plus);
  icons.append(minus);
  section.append(text);
});

// get elements
const icons = document.querySelectorAll("i");

// functions

// plus icon is clicked
function plusIcon(section) {
  const plus = document.querySelector(
    `.${section} > .question > .icons > .${options.plus}`
  );
  const minus = document.querySelector(
    `.${section} > .question > .icons > .${options.minus}`
  );
  plus.classList.add("hidden");
  minus.classList.remove("hidden");
  const txt = document.querySelector(`.${section} > .text`);
  txt.classList.remove("hidden");
}

// minus icon is clicked
function minusIcon(section) {
  const plus = document.querySelector(
    `.${section} > .question > .icons > .${options.plus}`
  );
  const minus = document.querySelector(
    `.${section} > .question > .icons > .${options.minus}`
  );
  plus.classList.remove("hidden");
  minus.classList.add("hidden");
  const txt = document.querySelector(`.${section} > .text`);
  txt.classList.add("hidden");
}

// handleClick
function handleClick(e) {
  // identify names in data
  const dataNames = data.map((data) => data.name);

  // idetify target
  const target = e.target.classList[1];

  // identify target's grandGrandParent
  const grandGrandParent =
    e.target.parentElement.parentElement.parentElement.classList[0];

  // options deppending on dataName
  dataNames.forEach((dN) => {
    if (grandGrandParent === dN) {
      // if + icon is clicked
      if (target === options.plus) {
        // plusIcon(options.one);
        plusIcon(dN);
      } else {
        // minusIcon(options.one);
        minusIcon(dN);
      }
    }
  });
}

// eventListeners
icons.forEach((icon) => icon.addEventListener("click", handleClick));
