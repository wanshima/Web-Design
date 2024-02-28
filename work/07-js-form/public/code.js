"use strict";
(function () {
    
    const formEL = document.querySelector(".register");
    const nameEL = document.querySelector(".register__name");
    const nameErrorEL = document.querySelector(".register__error--name");
    const emailEL = document.querySelector(".register__email");
    const emailErrorEL = document.querySelector(".register__error--email");
    const confirmEmailEl = document.querySelector(".register__confirm");
    const confirmEmailErrorEl = document.querySelector(".register__error--confirm");

    formEL.addEventListener("submit", (e) => {
        let isValid = true;

        if(!nameEL.value) {
            isValid = false;
            nameErrorEL.innerText = "Name is required";
        } else if(!nameEL.value.match(/^[A-Za-z]{3,6}$/)) {
            isValid = false;
            nameErrorEL.innerText = "Name is invalid";
        } 
        
        if(!emailEL.value) {
            isValid = false;
            emailErrorEL.innerText = "Email is required";
        } 

        if (!emailEL.value || emailEL.value !== confirmEmailEl.value) {
            isValid = false;
            confirmEmailErrorEl.innerText = "Emails must match";
        }

        if(!isValid) {
            console.log("Form is invalid");
            e.preventDefault();
        }
    });

    nameEL.addEventListener("input", () => {
        if (!nameEL.value) {
            nameErrorEL.innerText = "Name is required";
        } else if (!nameEL.value.match(/^[A-Za-z]{3,6}$/)) {
            nameErrorEL.innerText = "Name is invalid";
        } else {
            nameErrorEL.innerText = "";
        }
    });

    emailEL.addEventListener("input", () => {
        emailErrorEL.innerText = "";
    });

    confirmEmailEl.addEventListener("input", () => {
        confirmEmailErrorEl.innerText = "";
    });
})();