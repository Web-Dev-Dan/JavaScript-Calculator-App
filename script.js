'use strict'


// ---------- 📅 Date 📅 --------------
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const currentYear = new Date().getFullYear();
const currentYearText = document.getElementById('currentYearText');
currentYearText.textContent = currentYear;


// ---------- 📄 Toggle Modals 📄 ----------
const modalBackground = document.querySelector('.modal-background');
const modalContainer = document.querySelector('.modal-container');
const settingsBtn = document.querySelectorAll('.settings-btn');
const closeModalBtn = document.querySelector('.close-modal-btn');

function openModal() {
    modalBackground.style.display = 'flex';
    modalContainer.style.display = 'flex';
    modalContainer.classList.add('settings-modal-active');
}

function closeModal() {
    modalBackground.style.display = 'none';
    modalContainer.style.display = 'none';
    modalContainer.classList.remove('settings-modal-active');
}

// Open Modal with Buttons
settingsBtn.forEach((button) => {
    if (button.classList.contains('palette-btn')) {
        button.addEventListener('click', openPaletteModal);
    } else if (button.classList.contains('calculator-btn')) {
        button.addEventListener('click', openCalculatorModal);
    } else if (button.classList.contains('log-btn')) {
        button.addEventListener('click', openLogModal);
    }
});

// Close Modal Button
closeModalBtn.addEventListener('click', closeModal);

// Close Modal on Background Click
modalBackground.addEventListener('click', closeModal);

// Close Modal on 'Escape' Key
document.addEventListener('keydown', (e) => {
    const pressed = e.key;
    if (pressed === 'Escape') {
        if (modalContainer.classList.contains('settings-modal-active')) {
            closeModal();
        }
    }
});


// ---------- 📊 Modal Content 📊 ----------
const modalHeader = document.querySelector('.modal-header');

function openPaletteModal() {
    openModal();
    modalHeader.textContent = 'Choose a Colour Palette';
}

function openCalculatorModal() {
    openModal();
    modalHeader.textContent = 'Choose a Calculator';
}

function openLogModal() {
    openModal();
    modalHeader.textContent = 'Check Your Logged Calculations';
}


// ---------- 🧮 Calculator 🧮 ----------
const calculatorBtns = document.querySelectorAll('.btn');
const previousOperand = document.querySelector('.previous');
const currentOperand = document.querySelector('.current');

let calculation;
let operand;

calculatorBtns.forEach((button) => {
    button.addEventListener('click', function (e) {
        const pressedBtn = e.target;
        const btnValue = pressedBtn.textContent;

        if (pressedBtn.classList.contains('clear-btn')) {
            console.log('Calculator cleared.');
            clearCalculator();
        } else if (pressedBtn.classList.contains('delete-btn')) {
            console.log('Deleted.');
        } else if (pressedBtn.classList.contains('equals-btn')) {
            console.log('Equals pressed.');
            if (operand === 'add') {
                currentOperand.textContent = parseInt(previousOperand.textContent) + parseInt(currentOperand.textContent);
            } else if (operand === 'subtract') {
                currentOperand.textContent = parseInt(previousOperand.textContent) - parseInt(currentOperand.textContent);
            } else if (operand === 'divide') {
                currentOperand.textContent = parseInt(previousOperand.textContent) / parseInt(currentOperand.textContent);
            } else if (operand === 'multiply') {
                currentOperand.textContent = parseInt(previousOperand.textContent) * parseInt(currentOperand.textContent);
            }
            previousOperand.textContent = '';
        } else if (pressedBtn.classList.contains('number-btn')) {
            // Number Buttons 🔢
            console.log(`Number ${btnValue} pressed.`);
            if (currentOperand.textContent === '0') {
                currentOperand.textContent = btnValue;
            } else {
                currentOperand.textContent += btnValue;
            }
        } else if (pressedBtn.classList.contains('operator-btn')) {
            // Operator Buttons ❓
            if (btnValue === '+') {
                previousOperand.textContent = `${currentOperand.textContent} +`;
                currentOperand.textContent = 0;
                operand = 'add';
                console.log('Addition pressed.');
            } else if (btnValue === '-') {
                previousOperand.textContent = `${currentOperand.textContent} -`;
                currentOperand.textContent = 0;
                operand = 'subtract';
                console.log('Subtraction pressed.');
            } else if (btnValue === '÷') {
                previousOperand.textContent = `${currentOperand.textContent} ÷`;
                currentOperand.textContent = 0;
                operand = 'divide';
                console.log('Division pressed.');
            } else if (btnValue === '×') {
                previousOperand.textContent = `${currentOperand.textContent} ×`;
                currentOperand.textContent = 0;
                operand = 'multiply';
                console.log('Multiplication pressed.');
            }
        }
    });
});

function clearCalculator() {
    currentOperand.textContent = 0;
    previousOperand.textContent = '';
}
