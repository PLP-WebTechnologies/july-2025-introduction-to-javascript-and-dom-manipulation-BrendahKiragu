// ====================================================
// Part 1: JavaScript Basics — Variables & Conditionals
// ====================================================

// DOM elements for user input and output
const form = document.getElementById("userForm");
const basicOutput = document.getElementById("basicOutput");

// Event listener to handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents page reload

  // Variable declarations
  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);

  // Conditional statements based on user age
  if (age >= 18) {
    basicOutput.textContent = `Hi ${name}, you're an adult! 🎉`;
  } else if (age >= 13) {
    basicOutput.textContent = `Hi ${name}, you're a teenager! 🌟`;
  } else {
    basicOutput.textContent = `Hi ${name}, enjoy your childhood! 🧒`;
  }
});

// ====================================================
// Part 2: JavaScript Functions — Reusability
// ====================================================

// 1️⃣ Custom Function: Greet the user with a personalized message
function greetUser(name) {
  return `Hello, ${name}! Welcome to mastering JavaScript.`;
}

// DOM interaction — greeting button
const greetBtn = document.getElementById("greetBtn");
const greetOutput = document.getElementById("greetOutput");

greetBtn.addEventListener("click", function () {
  // Use the input name if available, otherwise fallback to "Guest"
  const name = document.getElementById("name").value || "Guest";
  greetOutput.textContent = greetUser(name);
});

// 2️⃣ Custom Function: Toggle dark mode for the webpage
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  // Provide feedback to the user by changing button text
  toggleBtn.textContent = document.body.classList.contains("dark-mode")
    ? "Switch to Light Mode"
    : "Toggle Dark Mode";
}

const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", toggleDarkMode);

// ====================================================
// Part 3: JavaScript Loops — Repetition & Iteration
// ====================================================

// 1️⃣ Example 1: Countdown using a FOR loop
const countdownBtn = document.getElementById("countdownBtn");
const countdownList = document.getElementById("countdownList");

countdownBtn.addEventListener("click", function () {
  countdownList.innerHTML = ""; // Clear previous countdown

  // For loop counting down from 5 to 1
  for (let i = 5; i >= 1; i--) {
    const listItem = document.createElement("li");
    listItem.textContent = `Countdown: ${i}`;
    countdownList.appendChild(listItem);
  }

  // Add final message when countdown completes
  const doneItem = document.createElement("li");
  doneItem.textContent = "🚀 Lift-off!";
  countdownList.appendChild(doneItem);
});

// 2️⃣ Example 2: Using forEach loop to style dynamic list items
const dynamicList = document.getElementById("dynamicList");
const styleListItems = () => {
  const items = dynamicList.querySelectorAll("li");
  items.forEach((item, index) => {
    // Alternate colors for better visibility
    item.style.color = index % 2 === 0 ? "blue" : "green";
  });
};
styleListItems(); // Apply styles on page load

// ====================================================
// Part 4: DOM Manipulation — Bringing Page to Life
// ====================================================

// 1️⃣ DOM Interaction: Update text content dynamically
// Done in Part 1 via basicOutput and Part 2 via greetOutput

// 2️⃣ DOM Interaction: Toggle CSS class for dark mode
// Implemented in toggleDarkMode()

// 3️⃣ Dynamically add new list items
const addItemBtn = document.getElementById("addItemBtn");

addItemBtn.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${dynamicList.children.length + 1}`;
  dynamicList.appendChild(newItem);

  // Re-apply alternating colors to new list items
  styleListItems();
});
