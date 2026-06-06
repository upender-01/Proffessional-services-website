document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent page reload
            
            let isValid = true;
            
            // Get input fields
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            // Reset previous errors
            resetErrors([name, email, message]);
            
            // Validate Name
            if (name.value.trim() === '') {
                showError(name, 'Name is required');
                isValid = false;
            }
            
            // Validate Email
            if (email.value.trim() === '') {
                showError(email, 'Email is required');
                isValid = false;
            } else if (!isValidEmail(email.value.trim())) {
                showError(email, 'Please enter a valid email address');
                isValid = false;
            }
            
            // Validate Message
            if (message.value.trim() === '') {
                showError(message, 'Message is required');
                isValid = false;
            }
            
            // If all validations pass
            if (isValid) {
                // Hide form and show success message
                const successMsg = document.getElementById('successMessage');
                successMsg.classList.remove('success-hidden');
                successMsg.classList.add('success-visible');
                
                // Reset form fields
                form.reset();
                
                // Hide success message after 4 seconds
                setTimeout(() => {
                    successMsg.classList.remove('success-visible');
                    successMsg.classList.add('success-hidden');
                }, 4000);
            }
        });
    }
    
    // Helper function to show error
    function showError(inputElement, message) {
        inputElement.classList.add('error');
        const errorDisplay = inputElement.nextElementSibling;
        errorDisplay.textContent = message;
    }
    
    // Helper function to reset errors
    function resetErrors(elementsArray) {
        elementsArray.forEach(element => {
            element.classList.remove('error');
            element.nextElementSibling.textContent = '';
        });
    }
    
    // Helper function to validate email via Regex
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});