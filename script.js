'use strict'

// ---------- 📄 Toggle Modals 📄 ----------
const modalBackground = document.querySelector('.modal-background');
const modalContainer = document.querySelector('.modal-container');
const settingsBtn = document.querySelectorAll('.settings-btn');

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
    button.addEventListener('click', openModal);
});

// Close Modal on Background Click
modalBackground.addEventListener('click', closeModal);

// Close Modal on 'Escape' Key
document.addEventListener('keydown', (e) => {
    const pressed = e.key;
    if (pressed === 'Escape') {
        if (modalContainer.classList.contains('settings-modal-active')) {
            closeModal();
            console.log('Closed!');
        }
    }
});
