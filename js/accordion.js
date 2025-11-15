// Accordion functionality
document.addEventListener("DOMContentLoaded", () => {
    const accHeaders = document.querySelectorAll('.accordion-header');

    accHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Toggle active class
            header.classList.toggle('active');

            // Toggle content
            const content = header.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = "0 20px";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "10px 20px";
            }
        });
    });
});