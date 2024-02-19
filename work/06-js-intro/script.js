"use strict";
(function() {
    const toggleButton = document.querySelector(".menu__toggle");
    const submenu = document.querySelector(".menu__submenu");

    toggleButton.addEventListener("click", function() {
        submenu.classList.toggle("is-open");
    });

    })();