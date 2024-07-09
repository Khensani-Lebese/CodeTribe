// DOM elements
const userModeBtn = document.getElementById('userModeBtn');
const adminModeBtn = document.getElementById('adminModeBtn');
const userMode = document.getElementById('userMode');
const adminMode = document.getElementById('adminMode');
const numberSelection = document.getElementById('numberSelection');
const numBoardsInput = document.getElementById('numBoards');
const lottoPlus1Checkbox = document.getElementById('lottoPlus1');
const lottoPlus2Checkbox = document.getElementById('lottoPlus2');
const purchaseBtn = document.getElementById('purchaseBtn');
const ticketDetails = document.getElementById('ticketDetails');
const simulateDrawBtn = document.getElementById('simulateDrawBtn');
const drawResult = document.getElementById('drawResult');

// Constants
const maxNumbers = 52;
const lottoBoardCost = 5.00;
const lottoPlusCost = 2.50;

// Initialize mode selection
userModeBtn.addEventListener('click', () => {
    userMode.style.display = 'block';
    adminMode.style.display = 'none';
});

adminModeBtn.addEventListener('click', () => {
    adminMode.style.display = 'block';
    userMode.style.display = 'none';
});

// Populate number selection
for (let i = 1; i <= maxNumbers; i++) {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    if (i >= 1 && i <= 13) {
        ball.classList.add('red');
    } else if (i >= 14 && i <= 25) {
        ball.classList.add('yellow');
    } else if (i >= 26 && i <= 37) {
        ball.classList.add('green');
    } else {
        ball.classList.add('blue');
    }
    ball.textContent = i;
    ball.addEventListener('click', () => toggleNumberSelection(ball));
    numberSelection.appendChild(ball);
}

let selectedNumbers = [];

function toggleNumberSelection(ball) {
    const number = parseInt(ball.textContent);
    if (selectedNumbers.includes(number)) {
        selectedNumbers = selectedNumbers.filter(num => num !== number);
        ball.style.backgroundColor = '';
        ball.style.color = '';
    } else {
        if (selectedNumbers.length < 6) {
            selectedNumbers.push(number);
            ball.style.backgroundColor = 'gray';
            ball.style.color = 'white';
        }
    }
}

// Purchase ticket event
purchaseBtn.addEventListener('click', () => {
    const numBoards = parseInt(numBoardsInput.value);
    if (selectedNumbers.length !== 6) {
        alert('Please select exactly 6 numbers.');
        return;
    }
    if (numBoards < 1 || numBoards > 10) {
        alert('Number of boards must be between 1 and 10.');
        return;
    }

    // Calculate ticket cost
    let ticketCost = numBoards * lottoBoardCost;
    if (lottoPlus1Checkbox.checked) {
        ticketCost += numBoards * lottoPlusCost;
    }
    if (lottoPlus2Checkbox.checked) {
        ticketCost += numBoards * lottoPlusCost;
    }

    // Display ticket details
    ticketDetails.innerHTML = ''; // Clear previous details
    for (let boardIndex = 1; boardIndex <= numBoards; boardIndex++) {
        // Generate numbers for each board
        const boardNumbers = generateBoardNumbers();

        // Display board details
        const boardHTML = `
            <div class="board">
                <p>Board ${boardIndex}</p>
                <p>Selected Numbers: ${boardNumbers.join(', ')}</p>
            </div>
        `;
        ticketDetails.insertAdjacentHTML('beforeend', boardHTML);
    }

    // Display total ticket cost
    const totalCostHTML = `<p>Total Ticket cost: R${ticketCost.toFixed(2)}</p>`;
    ticketDetails.insertAdjacentHTML('beforeend', totalCostHTML);
});

// Function to generate numbers for each board
function generateBoardNumbers() {
    const boardNumbers = [];
    while (boardNumbers.length < 6) {
        const randomNumber = getRandomNumber();
        if (!boardNumbers.includes(randomNumber)) {
            boardNumbers.push(randomNumber);
        }
    }
    return boardNumbers.sort((a, b) => a - b); // Sort numbers in ascending order
}

// Function to generate a random number between 1 and maxNumbers
function getRandomNumber() {
    return Math.floor(Math.random() * maxNumbers) + 1;
}

// Simulate draw event (Admin)
simulateDrawBtn.addEventListener('click', () => {
    // Simulate draw logic here
    // Display draw results (mocking for demonstration)
    const drawResultsHTML = `
        <p>Draw Results:</p>
        <ul>
            <li>1st Number: ${getRandomNumber()}</li>
            <li>2nd Number: ${getRandomNumber()}</li>
            <li>3rd Number: ${getRandomNumber()}</li>
            <li>4th Number: ${getRandomNumber()}</li>
            <li>5th Number: ${getRandomNumber()}</li>
            <li>6th Number: ${getRandomNumber()}</li>
        </ul>
    `;
    drawResult.innerHTML = drawResultsHTML;
});
