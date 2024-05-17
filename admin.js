// admin.js
document.addEventListener('DOMContentLoaded', () => {
    const resetAllButton = document.getElementById('reset-all-button');
    const viewScoresButton = document.getElementById('view-scores-button');
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

    // Reset all user data
    resetAllButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all user data?')) {
            localStorage.clear();
            alert('All user data has been reset.');
            playerDataDiv.innerHTML = ''; // Clear the displayed data after reset
        }
    });

    // View all player scores
    viewScoresButton.addEventListener('click', () => {
        const playerData = getPlayerData();
        displayPlayerData(playerData);
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
