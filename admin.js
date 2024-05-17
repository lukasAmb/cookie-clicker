// admin.js
document.addEventListener('DOMContentLoaded', () => {
    const adminLoginForm = document.getElementById('admin-login-form');
    const adminUsernameInput = document.getElementById('admin-username');
    const adminPasswordInput = document.getElementById('admin-password');
    const adminLoginButton = document.getElementById('admin-login-button');
    const playerLoginForm = document.getElementById('player-login-form');
    const playerUsernameInput = document.getElementById('player-username');
    const playerLoginButton = document.getElementById('player-login-button');
    const playerDataDiv = document.getElementById('player-data');
    const runCodeButton = document.getElementById('run-code-button');

    // Function to retrieve player data from localStorage
    function getPlayerData() {
        const playerData = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('player_')) {
                const playerName = key.split('_')[1];
                const playerCookies = parseInt(localStorage.getItem(key));
                playerData.push({ playerName, playerCookies });
            }
        }
        return playerData;
    }

    // Function to display player data in a table
    function displayPlayerData(data) {
        const table = `
            <table class="table table-bordered mt-4">
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Cookies</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.map(player => `
                        <tr>
                            <td>${player.playerName}</td>
                            <td>${player.playerCookies}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        playerDataDiv.innerHTML = table;
    }

    // Admin login
    adminLoginButton.addEventListener('click', () => {
        const adminUsername = adminUsernameInput.value.trim();
        const adminPassword = adminPasswordInput.value.trim();
        // Simple authentication (for demonstration purposes only)
        if (adminUsername === 'admin' && adminPassword === 'adminpass') {
            adminLoginForm.classList.add('d-none');
        } else {
            alert('Invalid admin credentials');
        }
    });

    // Player login
    playerLoginButton.addEventListener('click', () => {
        const playerUsername = playerUsernameInput.value.trim();
        // Simple authentication (for demonstration purposes only)
        if (playerUsername) {
            alert(`Welcome, ${playerUsername}!`);
            playerLoginForm.classList.add('d-none');
            playerDataDiv.innerHTML = ''; // Clear the displayed data after login
        } else {
            alert('Please enter a username');
        }
    });

    // Run code button click event
    runCodeButton.addEventListener('click', () => {
        const adminCode = document.getElementById('admin-code').value;
        try {
            eval(adminCode);
            alert('Code executed successfully.');
        } catch (error) {
            alert('Error executing code: ' + error.message);
        }
    });
});
