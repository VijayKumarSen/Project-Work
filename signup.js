
document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const conf  = document.getElementById('confirmpassword').value;

    if (password !== conf ) {
        alert ('Passwords do not match');
        return;
    }
    // alert('Signup form submitted');

});