document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from actually submitting

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Message Sent! Thank you for reaching out.');
    } else {
        alert('Please fill out all fields.');
    }
});
