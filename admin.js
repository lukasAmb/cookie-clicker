// admin.js
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');
    const resetButton = document.getElementById('reset-button');
    const runCodeButton = document.getElementById('run-code-button');
    const adminActions = document.getElementById('admin-actions');

    loginButton.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        console.log('Login attempt:', { username, password });

        // Simple authentication (for demonstration purposes only)
        if (username === 'admin' && password === 'password') {
            console.log('Login successful');
            adminActions.classList.remove('d-none');
        } else {
            console.log('Invalid credentials');
            alert('Invalid credentials');
        }
    });

    resetButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all user data?')) {
            localStorage.removeItem('cookies');
            localStorage.removeItem('clickValue');
            alert('All user data has been reset.');
        }
    });

    runCodeButton.addEventListener('click', () => {
        const adminCode = document.getElementById('admin-code').value;
        try {
            console.log('Running code:', adminCode);
            eval(adminCode);
            alert('Code executed successfully.');
        } catch (error) {
            console.log('Error executing code:', error);
            alert('Error executing code: ' + error.message);
        }
    });
});
