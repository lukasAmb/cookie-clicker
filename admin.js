document.addEventListener('DOMContentLoaded', () => {
    const adminLoginForm = document.getElementById('admin-login-form');
    const adminUsernameInput = document.getElementById('admin-username');
    const adminPasswordInput = document.getElementById('admin-password');
    const adminLoginButton = document.getElementById('admin-login-button');
    const adminActions = document.getElementById('admin-actions');
    const resetAllButton = document.getElementById('reset-all-button');
    const viewScoresButton = document.getElementById('view-scores-button');
    const testAlertsButton = document.getElementById('test-alerts-button');
    const playerDataDiv = document.getElementById('player-data');
    const runCodeButton = document.getElementById('run-code-button');

    const adminCredentials = {
        username: 'rizzler',
        password: 'Sunelis123'
    };

    function getPlayerData() {
        const playerData = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('player_')) {
                const playerName = key.split('_')[1];
                const player = JSON.parse(localStorage.getItem(key));
                playerData.push({ playerName, cookies: player.cookies });
            }
        }
        return playerData;
    }

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
                            <td>${player.cookies}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        playerDataDiv.innerHTML = table;
    }

    adminLoginButton.addEventListener('click', () => {
        const adminUsername = adminUsernameInput.value.trim();
        const adminPassword = adminPasswordInput.value.trim();

        if (adminUsername === adminCredentials.username && adminPassword === adminCredentials.password) {
            alert('Admin login successful!');
            adminLoginForm.classList.add('d-none');
            adminActions.classList.remove('d-none');
        } else {
            alert('Invalid admin username or password.');
        }
    });

    resetAllButton.addEventListener('click', () => {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('player_')) {
                localStorage.removeItem(key);
                i--; // Adjust index due to removal
            }
        }
        alert('All user data has been reset.');
    });

    viewScoresButton.addEventListener('click', () => {
        const playerData = getPlayerData();
        displayPlayerData(playerData);
    });

    testAlertsButton.addEventListener('click', () => {
        alert('haha L bozo');
    });

    runCodeButton.addEventListener('click', () => {
        const code = document.getElementById('admin-code').value;
        try {
            eval(code); // WARNING: eval can be dangerous
            alert('Code executed successfully.');
        } catch (error) {
            alert('Error executing code: ' + error.message);
        }
    });
});
