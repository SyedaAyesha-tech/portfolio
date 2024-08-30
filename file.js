function downloadCV() {
    const link = document.createElement('a'); 
    link.href = './Syeda_Ayesha_Batool_Resume.pdf'; 
    link.download = 'Syeda_Ayesha_Batool_Resume.pdf'; 
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link); 
  }
  // Get the form elements
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submit-btn');

const recipientEmail = 'syedaayesh3345@gmail.com';


submitBtn.addEventListener('click', (e) => {
  
  e.preventDefault();

 
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const message = messageInput.value.trim();

  
  if (name === '' || email === '' || phone === '' || message === '') {
    alert('Please fill out all fields.');
    return;
  }

 
  const subject = `Contact Form Submission from ${name}`;
  const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

 
  const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
});