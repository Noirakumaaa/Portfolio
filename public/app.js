document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('emailPopup').style.display = 'flex';
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('emailPopup').style.display = 'none';
});

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Email:', email);
    console.log('Message:', message);

    alert('Your message has been sent!');

    // Clear the form fields
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // Close the popup
    document.getElementById('emailPopup').style.display = 'none';
});
