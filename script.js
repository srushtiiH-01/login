document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    // Simple validation (you can replace this with actual authentication)
    if (username === 'admin' && password === 'password123') {
        message.textContent = 'Login successful! Redirecting...';
        message.className = 'success';
        
        // Redirect after 2 seconds
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000);
    } else {
        message.textContent = 'Invalid username or password';
        message.className = 'error';
    }
});
