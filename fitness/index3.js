

// Function to toggle the registration form visibility
function toggleRegisterForm() {
    const form = document.getElementById('register-form');
    form.style.display = form.style.display === 'none' || form.style.display === '' ? 'block' : 'none';
}

// Handle form submission (you can add further functionality here)
document.getElementById('register-form-content').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    alert('Registration successful! Welcome, ' + username);
    // You can also add form validation and send data to a server here
});





// Function to open the Sign In modal
function openSignInModal() {
    document.getElementById('signInModal').style.display = 'block';
}

// Function to close the Sign In modal
function closeSignInModal() {
    document.getElementById('signInModal').style.display = 'none';
}

// Handle Sign In form submission
document.getElementById('signInForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert('Sign In successful! Email: ' + email);
    // You can add further functionality like sending data to the server here
    closeSignInModal();
});

// Close the modal if clicked outside of it
window.onclick = function (event) {
    const modal = document.getElementById('signInModal');
    if (event.target === modal) {
        closeSignInModal();
    }
};

 // Close the modal if clicked outside of it
 window.onclick = function (event) {
    const modal = document.getElementById('signInModal');
    if (event.target === modal) {
        closeSignInModal();
    }
};


