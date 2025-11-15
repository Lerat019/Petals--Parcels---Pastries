document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");

    const successMessage = document.createElement("div");
    successMessage.classList.add("alert", "alert-success");
    successMessage.style.display = "none";
    form.parentNode.insertBefore(successMessage, form);

    // Form Fields
    const fields = {
        name: document.getElementById("name"),
        email: document.getElementById("email"),
        phone: document.getElementById("phone"),
        messageType: document.getElementById("messageType"),
        message: document.getElementById("message")
    };

    // Ensure error spans exist
    Object.keys(fields).forEach(key => {
        if (!document.getElementById(key + "Error")) {
            const span = document.createElement("span");
            span.classList.add("error-message");
            span.id = key + "Error";
            fields[key].after(span);
        }
    });

    const errors = {
        name: document.getElementById("nameError"),
        email: document.getElementById("emailError"),
        phone: document.getElementById("phoneError"),
        messageType: document.getElementById("messageTypeError"),
        message: document.getElementById("messageError")
    };

    // Validation functions
    const validEmail = email => /\S+@\S+\.\S+/.test(email);
    const validPhone = phone => phone === "" || /^0\d{9}$/.test(phone); // optional field

    const clearErrors = () => {
        Object.values(errors).forEach(err => err.textContent = "");
        successMessage.style.display = "none";
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        clearErrors();

        let isValid = true;

        // Name
        if (fields.name.value.trim().length < 3) {
            errors.name.textContent = "Please enter at least 3 characters.";
            isValid = false;
        }

        // Email
        if (!validEmail(fields.email.value)) {
            errors.email.textContent = "Enter a valid email address.";
            isValid = false;
        }

        // Phone (optional)
        if (!validPhone(fields.phone.value)) {
            errors.phone.textContent = "Enter a valid SA phone number (e.g. 0723456789) or leave blank.";
            isValid = false;
        }

        // Message Type
        if (fields.messageType.value === "") {
            errors.messageType.textContent = "Please select a message type.";
            isValid = false;
        }

        // Message
        if (fields.message.value.trim().length < 10) {
            errors.message.textContent = "Your message must be at least 10 characters.";
            isValid = false;
        }

        if (!isValid) return;

        // Show success message
        successMessage.textContent = 
            `Thank you, ${fields.name.value}. Your "${fields.messageType.value}" message has been successfully sent. We will reply to you at ${fields.email.value}.`;
        successMessage.style.display = "block";

        // Scroll into view
        successMessage.scrollIntoView({ behavior: "smooth" });

        // Clear form
        form.reset();
    });
});