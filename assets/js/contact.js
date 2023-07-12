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
    let params = {
        custName: contactForm.querySelector('.custName').value.trim(),
        custEmail: contactForm.querySelector('.custEmail').value.trim(),
        custContact: contactForm.querySelector('.custContact').value.trim(),
        custSubject: contactForm.querySelector('.custSubject').value.trim(),
        custMessage: contactForm.querySelector('.custMessage').value.trim()
    }
    const serviceId = "service_x4y0bir";
    const templateId = "template_kmf4zz3";
    emailjs.send(serviceId, templateId, params)
      .then(res => {
        contactForm.reset();
        alert("Your message has been received! We'll get in touch soon");
      })
      .catch(error => {
        console.log(error);
      })
    // Email.send({
    //     Host: "smtp.elasticemail.com",
    //     Port: "2525",
    //     Username: "Info@klhcuttingsolutions.com",
    //     Password: "FA8ADBEA7245FCA6B8681D9ADA07E9998B2E",
    //     To: 'anjalishri12342@gmail.com',
    //     From: "Info@klhcuttingsolutions.co",
    //     Subject: "Enquiry for KLH cutting industry.",
    //     Body: "Test email"
    // }).then(
    //     message => alert("Your message has been received! We'll get in touch soon")
    // );
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
