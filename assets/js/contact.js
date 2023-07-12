const contactForm = document.getElementById('contactForm');

let formData = {}
contactForm.querySelectorAll('.form-control').forEach((inputElement) => {
    if (inputElement.name) {
        formData[inputElement.name] = formData[inputElement.value];
    }
})

// Send mail function
function sendContactData(e) {
    e.preventDefault();
    Email.send({
        Host: "smtp.elasticemail.com",
        Port: "2525",
        Username: "Info@klhcuttingsolutions.com",
        Password: "FA8ADBEA7245FCA6B8681D9ADA07E9998B2E",
        To: 'anjalishri12342@gmail.com',
        From: "Info@klhcuttingsolutions.co",
        Subject: "Enquiry for KLH cutting industry.",
        Body: "Test email"
    }).then(
        message => alert("Your message has been received! We'll get in touch soon")
    );
    // Email.send({
    //     SecureToken: "91fe88cb-7459-4567-b1c9-2dd65d613a86",
    //     To: "anjalishri12342@gmail.com",
    //     From: "Info@klhcuttingsolutions.com",
    //     Subject: "Enquiry for KLH cutting industry.",
    //     Body: "Test email"
    // }).then(
    //     message => alert("Your message has been received! We'll get in touch soon")
    // )
}
