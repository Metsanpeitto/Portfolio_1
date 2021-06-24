/**
 *   This is the Input Validation function.
 *   It checks that only lowercase is being typed into
 *   the email input of the contact form.
 */
 const contactForm = document.getElementById('form');
 const email = document.getElementById('email-address');
 const alertMessage = document.createElement('span');
 alertMessage.className = 'alert';
 alertMessage.textContent = 'The email can be only in lowercase';
 contactForm.addEventListener('submit', (e) => {
   if (email.value.toLowerCase() !== email.value) {
     e.preventDefault();
     email.parentNode.insertBefore(alertMessage, email.nextSibling);
   }
 });