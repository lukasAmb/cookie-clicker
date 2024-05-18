// admin.js
document.addEventListener('DOMContentLoaded', () => {
    const adminLoginForm = document.getElementById('admin-login-form');
    const adminUsernameInput = document.getElementById('admin-username');
    const adminPasswordInput = document.getElementById('admin-password');
    const adminLoginButton = document.getElementById('admin-login-button');
    const adminActions = document.getElementById('admin-actions');
    const resetAllButton = document.getElementById('reset-all-button');
    const viewScoresButton = document.getElementById('view-scores-button');
    const playerDataDiv = document.getElementById('player-data');
    const runCodeButton = document.getElementById('run-code-button');

    const adminCredentials = {
        username: 'admin',
        password: 'adminpass'
    };

    // Function to retrieve player data from localStorage
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
                            <td>${player.playerName}</
