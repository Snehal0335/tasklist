
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;

   
    if (localStorage.getItem(username)) {
        alert('Username already exists. Please choose a different username.');
        return;
    }

    
    const user = { username, password };
    localStorage.setItem(username, JSON.stringify(user));

    alert('Registration successful! You can now log in.');
    window.location.href = 'login.html';
});

// Login logic
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve the stored user from localStorage
    const storedUser = JSON.parse(localStorage.getItem(username));

    if (storedUser && storedUser.password === password) {
        // If login is successful, store the session
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'securePage.html'; // Redirect to secure page
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
