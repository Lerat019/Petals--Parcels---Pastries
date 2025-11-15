document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("enquiryForm");
    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");
    const responseMessage = document.getElementById("responseMessage");

    const fields = {
        name: document.getElementById("name"),
        email: document.getElementById("email"),
        phone: document.getElementById("phone"),
        enquiryType: document.getElementById("enquiryType"),
        message: document.getElementById("message")
    };

    const errors = {
        name: document.getElementById("nameError"),
        email: document.getElementById("emailError"),
        phone: document.getElementById("phoneError"),
        enquiryType: document.getElementById("enquiryTypeError"),
        message: document.getElementById("messageError")
    };

    // Pricing/availability
    const enquiryResponses = {
        "flowers": "Our flower arrangements are available. Price: R250 per bouquet.",
        "parcel-delivery": "Delivery service is available. Base cost starts at R80.",
        "pastry-box": "Pastry boxes are in stock. Price: R150 each.",
        "volunteer": "Thank you for offering to volunteer! We'll contact you with available dates.",
        "sponsor": "Thank you for your interest in sponsorship. We'll send you our sponsorship package."
    };

    // Validate Email format
    function validEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    // Validate Phone Number
    function validPhone(phone) {
        return /^0\d{9}$/.test(phone);
    }

    // Reset error messages
    function clearErrors() {
        Object.values(errors).forEach(err => err.textContent = "");
    }

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

        // Phone
        if (!validPhone(fields.phone.value)) {
            errors.phone.textContent = "Enter a valid SA phone number (e.g. 0723456789).";
            isValid = false;
        }

        // Enquiry Type
        if (fields.enquiryType.value === "") {
            errors.enquiryType.textContent = "Please select an enquiry type.";
            isValid = false;
        }

        // Message
        if (fields.message.value.trim().length < 10) {
            errors.message.textContent = "Your message must be at least 10 characters.";
            isValid = false;
        }

        if (!isValid) {
            errorMessage.style.display = "block";
            successMessage.style.display = "none";
            return;
        }

        // If valid — show success message
        errorMessage.style.display = "none";
        successMessage.style.display = "block";

        
        // Build full dynamic response
        const enquiryType = fields.enquiryType.value;
        const processingText = enquiryResponses[enquiryType];

        responseMessage.textContent = 
            `Thank you, ${fields.name.value}. Your enquiry regarding "${fields.enquiryType.value}" has been received.
            We will reply to you at ${fields.email.value}.`;

        
        // Scroll to message
        successMessage.scrollIntoView({ behavior: "smooth" });

        // Clear form
        form.reset();
    });
});