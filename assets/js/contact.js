const contactForm = document.getElementById('contactForm');

let formData = {}
contactForm.querySelectorAll('.form-control').forEach( (inputElement) => {
    if (inputElement.name) {
        formData[inputElement.name] = formData[inputElement.value];
    }
})

// Send mail function
function sendContactData(e) {
    e.preventDefault();
    Email.send({
        SecureToken: "7efd23a8-c35a-4cfc-9f5a-c6dcc3852e02",
        To: 'anjalishri12342@gmail.com',
        From: "Info@klhcuttingsolutions.com",
        Subject: "Enquiry for KLH cutting industry.",
        Body: "Test email"
    }).then(
        message => alert("Your message has been received! We'll get in touch soon")
    )
}
