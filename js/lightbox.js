// Lightbox functionality
document.addEventListener("DOMContentLoaded", () => {
    // Create modal elements
    const modal = document.createElement('div');
    modal.classList.add('lightbox-modal');

    const modalImg = document.createElement('img');
    modalImg.classList.add('lightbox-content');

    const caption = document.createElement('div');
    caption.id = 'caption';

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close');
    closeBtn.innerHTML = '&times;';

    modal.appendChild(closeBtn);
    modal.appendChild(modalImg);
    modal.appendChild(caption);
    document.body.appendChild(modal);

    // Open modal on image click
    const images = document.querySelectorAll('.product-card img');
    images.forEach(img => {
        img.classList.add('lightbox');
        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            caption.textContent = img.alt;
        });
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});