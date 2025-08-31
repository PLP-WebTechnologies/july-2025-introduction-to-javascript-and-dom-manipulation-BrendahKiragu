// =============================
// Part 1: JavaScript Basics
// =============================

// Capture form submission and display personalized message
const form = document.getElementById("userForm");
const basicOutput = document.getElementById("basicOutput");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Variable declarations
  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);

  // Conditional logic
  if (age >= 18) {
    basicOutput.textContent = `Hi ${name}, you're an adult! 🎉`;
  } else {
    basicOutput.textContent = `Hi ${name}, enjoy your youth! 🌟`;
  }
});

// =============================
// Part 2: Functions
// =============================

// Function to greet the user
function greetUser(name) {
  return `Hello, ${name}! Welcome to mastering JavaScript.`;
}

// Trigger greeting on button click
const greetBtn = document.getElementById("greetBtn");
const greetOutput = document.getElementById("greetOutput");

greetBtn.addEventListener("click", function () {
  const name = document.getElementById("name").value || "Guest";
  greetOutput.textContent = greetUser(name);
});

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", toggleDarkMode);

// =============================
// Part 3: Loops
// =============================

// Countdown using a for loop
const countdownBtn = document.getElementById("countdownBtn");
const countdownList = document.getElementById("countdownList");

countdownBtn.addEventListener("click", function () {
  countdownList.innerHTML = ""; // Clear old list

  for (let i = 5; i >= 1; i--) {
    const listItem = document.createElement("li");
    listItem.textContent = `Countdown: ${i}`;
    countdownList.appendChild(listItem);
  }

  const doneItem = document.createElement("li");
  doneItem.textContent = "🚀 Lift-off!";
  countdownList.appendChild(doneItem);
});

// Example of forEach loop to style dynamic list items
const dynamicList = document.getElementById("dynamicList");
dynamicList.querySelectorAll("li").forEach((item, index) => {
  item.style.color = index % 2 === 0 ? "blue" : "green";
});

// =============================
// Part 4: DOM Manipulation
// =============================

// Dynamically add new list items
const addItemBtn = document.getElementById("addItemBtn");

addItemBtn.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${dynamicList.children.length + 1}`;
  dynamicList.appendChild(newItem);
});
