document.addEventListener('DOMContentLoaded', () => {
    const cookie = document.getElementById('cookie');
    const cookieCountElement = document.getElementById('cookie-count');
    const upgradeButton = document.getElementById('upgrade-button');
    const adminUsernameInput = document.getElementById('admin-username');
    const adminPasswordInput = document.getElementById('admin-password');
    const adminLoginButton = document.getElementById('admin-login-button');

    let cookies = 0;

    cookie.addEventListener('click', () => {
        cookies++;
        updateCookieCount();
    });

    upgradeButton.addEventListener('click', () => {
        cookies += 10; // Increase score by 10 on each upgrade
        updateCookieCount();
    });

    function updateCookieCount() {
        cookieCountElement.textContent = `Cookies: ${cookies}`;
    }

    adminLoginButton.addEventListener('click', () => {
        const adminUsername = adminUsernameInput.value.trim();
        const adminPassword = adminPasswordInput.value.trim();

        // Validate admin credentials (you can replace this with your own logic)
        if (adminUsername === 'admin' && adminPassword === 'admin') {
            alert('Admin login successful!');
            // Redirect to admin panel or perform admin actions
        } else {
            alert('Invalid admin username or password.');
        }
    });
});
