document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const attendance = document.querySelector('input[name="attendance"]:checked').value;

    const responseMessage = document.getElementById('responseMessage');
    responseMessage.classList.remove('hidden');
    responseMessage.textContent = `Thank you, ${name}! Your RSVP has been received. You are ${attendance === 'yes' ? 'attending' : 'not attending'}.`;
    
    // Optionally, reset the form after submission
    document.getElementById('rsvpForm').reset();
});
