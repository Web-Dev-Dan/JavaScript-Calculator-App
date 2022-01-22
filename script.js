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
            clearCalculator();
        } else if (pressedBtn.classList.contains('delete-btn')) {
            console.log('Deleted.');
            deleteDigit();
        } else if (pressedBtn.classList.contains('equals-btn')) {
            if (operand === 'add') {
                currentOperand.textContent = parseFloat(previousOperand.textContent) + parseFloat(currentOperand.textContent);
            } else if (operand === 'subtract') {
                currentOperand.textContent = parseFloat(previousOperand.textContent) - parseFloat(currentOperand.textContent);
            } else if (operand === 'divide') {
                currentOperand.textContent = parseFloat(previousOperand.textContent) / parseFloat(currentOperand.textContent);
            } else if (operand === 'multiply') {
                currentOperand.textContent = parseFloat(previousOperand.textContent) * parseFloat(currentOperand.textContent);
            }
            previousOperand.textContent = '';
            // Limit Number of Decimal Places
            const currentOperandNumber = parseFloat(currentOperand.textContent);
            const currentOperandArray = Array.from(currentOperand.textContent);
            let decimalNumber;

            if (currentOperandArray.includes('.')) {
                console.log('THis doesnt have a decimal point')
            } else {
                console.log('THis doesnt have a decimal point')
            }

        } else if (pressedBtn.classList.contains('number-btn')) {
            // Number Buttons 🔢
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
            } else if (btnValue === '-') {
                previousOperand.textContent = `${currentOperand.textContent} -`;
                currentOperand.textContent = 0;
                operand = 'subtract';
            } else if (btnValue === '÷') {
                previousOperand.textContent = `${currentOperand.textContent} ÷`;
                currentOperand.textContent = 0;
                operand = 'divide';
            } else if (btnValue === '×') {
                previousOperand.textContent = `${currentOperand.textContent} ×`;
                currentOperand.textContent = 0;
                operand = 'multiply';
            }
        }
    });
});

function clearCalculator() {
    currentOperand.textContent = 0;
    previousOperand.textContent = '';
}

function deleteDigit() {
    const digitArray = Array.from(currentOperand.textContent);
    digitArray.pop();
    currentOperand.textContent = digitArray.join('');
    if (digitArray.length === 0) {
        currentOperand.textContent = '0';
    }
}
