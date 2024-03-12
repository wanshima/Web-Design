"use strict";
(function() {
    const hamburgerEl = document.querySelector('.hamburger');
    const submenuEl = document.querySelector('.menu__submenu'); 
    const submenuItems = submenuEl.querySelectorAll('.submenu__link'); 

    function toggleSubmenu() {
        const isExpanded = hamburgerEl.getAttribute('aria-expanded') === 'true';
        hamburgerEl.setAttribute('aria-expanded', String(!isExpanded));
        submenuEl.classList.toggle('submenu--open');

        submenuItems.forEach(item => {
            item.setAttribute('tabindex', isExpanded ? '-1' : '0');
        });
    }

    hamburgerEl.addEventListener('click', toggleSubmenu);

    hamburgerEl.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            toggleSubmenu();
            event.preventDefault(); 
        }
    });

    submenuItems.forEach(item => {
        item.setAttribute('tabindex', '-1');
    });

    const modalEl = document.querySelector('.modal');
    const openEl = document.querySelector('.open');
    const closeEl = document.querySelector('.close');
    const formEl = document.querySelector("#subscribe-form");
    const emailEl = document.querySelector("#email");
    const emailErrorEl = document.querySelector(".register__error--email");
    const confirmEmailEl = document.querySelector("#confirm-email");
    const confirmEmailErrorEl = document.querySelector(".register__error--confirm");

    openEl.addEventListener('click', () => {
        modalEl.showModal();
    });

    closeEl.addEventListener('click', () => {
        modalEl.close();
    });

    emailEl.addEventListener("blur", () => {
        if (!emailEl.value.includes('@') && emailEl.value !== '') {
            emailErrorEl.textContent = "This field must be a valid email address including a @";
        } else {
            emailErrorEl.textContent = "";
        }
    });

    confirmEmailEl.addEventListener("blur", () => {
        if (emailEl.value.includes('@') && emailEl.value !== confirmEmailEl.value && confirmEmailEl.value !== '') {
            confirmEmailErrorEl.textContent = "This field must matches the provided email address";
            confirmEmailErrorEl.style.fontStyle = 'italic';
        } else {
            confirmEmailErrorEl.textContent = "";
        }
    });

    formEl.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;

        if (!emailEl.value) {
            isValid = false;
            emailErrorEl.textContent = "This field is required";
            emailErrorEl.style.fontStyle = 'italic';
        } else if (!emailEl.value.includes('@')) {
            isValid = false;
            emailErrorEl.textContent = "This field must be a valid email address including a @";
            emailErrorEl.style.fontStyle = 'italic';
        } else {
            emailErrorEl.textContent = "";
        }

        if (emailEl.value.includes('@') && emailEl.value !== confirmEmailEl.value) {
            isValid = false;
            confirmEmailErrorEl.textContent = "This field must matches the provided email address";
            confirmEmailErrorEl.style.fontStyle = 'italic';
        } else {
            confirmEmailErrorEl.textContent = "";
        }

        if (isValid) {
            alert('Form submitted successfully!');
            modalEl.close();
        }
    });


})();
