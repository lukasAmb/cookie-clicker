// index.js
document.addEventListener('DOMContentLoaded', () => {
    const playerLoginSignupButton = document.getElementById('player-login-signup-button');
    const playerLoginSignupForm = document.getElementById('player-login-signup-form');
    const playerLoginButton = document.getElementById('player-login-button');
    const playerSignupButton = document.getElementById('player-signup-button');
    const cookieClickerGame = document.getElementById('cookie-clicker-game');
    const playerUsernameInput = document.getElementById('player-username');
    const playerPasswordInput = document.getElementById('player-password');

    playerLoginSignupButton.addEventListener('click', () => {
        playerLoginSignupForm.classList.toggle('d-none');
    });

    playerSignupButton.addEventListener('click', () => {
        const username = playerUsernameInput.value.trim();
        const password = playerPasswordInput.value.trim();

        if (username && password) {
            if (localStorage.getItem(`player_${username}`)) {
                alert('Username already exists. Please choose a different username.');
            } else {
                localStorage.setItem(`player_${username}`, JSON.stringify({ password, cookies: 0 }));
                alert('Signup successful! You can now log in.');
            }
        } else {
            alert('Please enter both username and password.');
        }
    });

    playerLoginButton.addEventListener('click', () => {
        const username = playerUsernameInput.value.trim();
        const password = playerPasswordInput.value.trim();

        const storedPlayer = JSON.parse(localStorage.getItem(`player_${username}`));

        if (storedPlayer && storedPlayer.password === password) {
            alert(`Welcome, ${username}!`);
            playerLoginSignupForm.classList.add('d-none');
            cookieClickerGame.classList.remove('d-none');
            // Initialize game state with the logged-in player's data
            // (for demonstration, not implemented here)
        } else {
            alert('Invalid username or password.');
        }
    });
});
