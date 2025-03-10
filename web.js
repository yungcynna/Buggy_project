document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const suggestion = document.getElementById('suggestion').value.trim();

    if (name === '' || email === '' || suggestion === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: name,
        from_email: email,
        message: suggestion
    }).then(function(response) {
        alert('Thank you for your feedback! Your message has been sent.');
        document.getElementById('contact-form').reset();
    }, function(error) {
        alert('Failed to send feedback. Please try again later.');
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}