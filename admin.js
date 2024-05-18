document.addEventListener('DOMContentLoaded', () => {
    const resetDataButton = document.getElementById('reset-data-btn');
    const runCodeButton = document.getElementById('run-code-btn');
    const viewScoresButton = document.getElementById('view-scores-btn');
    const scoresContainer = document.getElementById('scores');

    resetDataButton.addEventListener('click', async () => {
        // Send request to reset data
        // Example: await fetch('/resetData', { method: 'POST' });

        alert('All data has been reset.');
    });

    runCodeButton.addEventListener('click', () => {
        const code = prompt('Enter the code to run:');
        // Execute the code (e.g., using eval)
        try {
            eval(code);
        } catch (error) {
            alert('Error executing code: ' + error.message);
        }
    });

    viewScoresButton.addEventListener('click', async () => {
        // Fetch scores data and display
        // Example: const response = await fetch('/getScores');
        // const scores = await response.json();
        const scores = [
            { username: 'User1', score: 100 },
            { username: 'User2', score: 200 },
            { username: 'User3', score: 150 }
        ];
        renderScores(scores);
    });

    function renderScores(scores) {
        scoresContainer.innerHTML = '';
        const ul = document.createElement('ul');
        scores.forEach(score => {
            const li = document.createElement('li');
            li.textContent = `${score.username}: ${score.score}`;
            ul.appendChild(li);
        });
        scoresContainer.appendChild(ul);
    }
});
