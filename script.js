document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        
        const data = await response.json();
        
        if (data.success) {
            message.textContent = 'Login successful! Redirecting...';
            message.className = 'success';
            
            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 1000);
        } else {
            message.textContent = data.message || 'Invalid username or password';
            message.className = 'error';
        }
    } catch (error) {
        message.textContent = 'Connection error. Please try again.';
        message.className = 'error';
    }
});
