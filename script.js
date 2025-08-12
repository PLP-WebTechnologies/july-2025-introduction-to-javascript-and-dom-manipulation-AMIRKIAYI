// =============================================
// Part 1: JavaScript Basics - Variables, Conditionals
// =============================================

// Get DOM elements
const ageInput = document.getElementById('age');
const checkAgeBtn = document.getElementById('checkAge');
const ageResult = document.getElementById('ageResult');

// Event listener for age check button
checkAgeBtn.addEventListener('click', function() {
    // Get user input
    const age = parseInt(ageInput.value);
    
    // Basic conditional logic
    if (isNaN(age)) {
        ageResult.textContent = 'Please enter a valid age.';
    } else if (age < 0) {
        ageResult.textContent = 'Age cannot be negative!';
    } else if (age < 18) {
        ageResult.textContent = 'You are a minor.';
    } else if (age >= 18 && age < 65) {
        ageResult.textContent = 'You are an adult.';
    } else {
        ageResult.textContent = 'You are a senior citizen.';
    }
});

// =============================================
// Part 2: JavaScript Functions
// =============================================

// Function to calculate sum of two numbers
function calculateSum(a, b) {
    return a + b;
}

// Function to calculate average of two numbers
function calculateAverage(a, b) {
    return (a + b) / 2;
}

// Get DOM elements for function demonstration
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const calculateBtn = document.getElementById('calculate');
const functionResults = document.getElementById('functionResults');

// Event listener for calculate button
calculateBtn.addEventListener('click', function() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    
    if (isNaN(num1) || isNaN(num2)) {
        functionResults.textContent = 'Please enter valid numbers.';
    } else {
        const sum = calculateSum(num1, num2);
        const average = calculateAverage(num1, num2);
        
        functionResults.innerHTML = `
            Sum: ${sum}<br>
            Average: ${average.toFixed(2)}
        `;
    }
});

// =============================================
// Part 3: JavaScript Loops
// =============================================

// Get DOM elements for loop demonstration
const countdownBtn = document.getElementById('countdownBtn');
const countdownDisplay = document.getElementById('countdownDisplay');
const generateListBtn = document.getElementById('generateListBtn');
const numberList = document.getElementById('numberList');

// Countdown using a while loop
countdownBtn.addEventListener('click', function() {
    countdownDisplay.textContent = '';
    let count = 10;
    
    // While loop for countdown
    while (count >= 0) {
        // Using setTimeout to create a visible countdown
        // This requires a closure to capture the current value of count
        ((currentCount) => {
            setTimeout(() => {
                countdownDisplay.textContent = currentCount > 0 ? 
                    `Countdown: ${currentCount}` : 'Blast off! 🚀';
            }, (10 - currentCount) * 500);
        })(count);
        
        count--;
    }
});

// Generate a list using a for loop
generateListBtn.addEventListener('click', function() {
    numberList.innerHTML = ''; // Clear previous list
    
    // For loop to generate list items
    for (let i = 1; i <= 10; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `Item ${i}`;
        numberList.appendChild(listItem);
    }
});

// =============================================
// Part 4: DOM Manipulation
// =============================================

// Get DOM elements for DOM manipulation
const colorBox = document.getElementById('colorBox');
const addItemBtn = document.getElementById('addItemBtn');
const toggleBtn = document.getElementById('toggleBtn');
const dynamicList = document.getElementById('dynamicList');
const toggleText = document.getElementById('toggleText');

// 1. Change element color on click
colorBox.addEventListener('click', function() {
    const colors = ['#4CAF50', '#2196F3', '#f44336', '#FFC107', '#9C27B0'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.style.backgroundColor = randomColor;
});

// 2. Add items to a list dynamically
let itemCounter = 1;
addItemBtn.addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.textContent = `Dynamic Item ${itemCounter++}`;
    dynamicList.appendChild(newItem);
});

// 3. Toggle element visibility
toggleBtn.addEventListener('click', function() {
    if (toggleText.style.display === 'none') {
        toggleText.style.display = 'block';
        this.textContent = 'Hide Text';
    } else {
        toggleText.style.display = 'none';
        this.textContent = 'Show Text';
    }
});

// Additional DOM manipulation: Change heading color on mouseover
const headings = document.querySelectorAll('h2');
headings.forEach(heading => {
    heading.addEventListener('mouseover', function() {
        this.style.color = '#4CAF50';
    });
    
    heading.addEventListener('mouseout', function() {
        this.style.color = '';
    });
});