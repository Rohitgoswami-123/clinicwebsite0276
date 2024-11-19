// script.js

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you for contacting us, ${name}. We will get back to you at ${email} soon.`);
    
    // Optionally, clear the form after submission
    document.getElementById('contactForm').reset();
});
