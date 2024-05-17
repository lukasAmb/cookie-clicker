// script.js
document.addEventListener('DOMContentLoaded', () => {
    let cookies = 0;
    let clickValue = 1;
    let upgrade1Cost = 50;
    let upgrade2Cost = 200;

    const cookieCounter = document.getElementById('cookie-counter');
    const cookieButton = document.getElementById('cookie-button');
    const upgrade1Button = document.getElementById('upgrade1');
    const upgrade2Button = document.getElementById('upgrade2');

    // Load saved game
    if (localStorage.getItem('cookies')) {
        cookies = parseInt(localStorage.getItem('cookies'));
        clickValue = parseInt(localStorage.getItem('clickValue'));
    }

    // Update cookie counter
    function updateCounter() {
        cookieCounter.innerText = `Cookies: ${cookies}`;
    }

    // Save game
    function saveGame() {
        localStorage.setItem('cookies', cookies);
        localStorage.setItem('clickValue', clickValue);
    }

    // Cookie click event
    cookieButton.addEventListener('click', () => {
        cookies += clickValue;
        updateCounter();
        saveGame();
    });

    // Upgrade 1 event
    upgrade1Button.addEventListener('click', () => {
        if (cookies >= upgrade1Cost) {
            cookies -= upgrade1Cost;
            clickValue += 1;
            upgrade1Cost *= 2;
            upgrade1Button.innerText = `Upgrade 1 (Cost: ${upgrade1Cost} cookies)`;
            updateCounter();
            saveGame();
        }
    });

    // Upgrade 2 event
    upgrade2Button.addEventListener('click', () => {
        if (cookies >= upgrade2Cost) {
            cookies -= upgrade2Cost;
            clickValue += 5;
            upgrade2Cost *= 2;
            upgrade2Button.innerText = `Upgrade 2 (Cost: ${upgrade2Cost} cookies)`;
            updateCounter();
            saveGame();
        }
    });

    // Initial update
    updateCounter();
});
