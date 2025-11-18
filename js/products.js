document.addEventListener("DOMContentLoaded", () => {

    const productContainer = document.querySelector('.product-grid');

    // ---------- Accordion initialization function ----------
    function initAccordions() {
        const accHeaders = document.querySelectorAll('.accordion-header');
        accHeaders.forEach(header => {
            // Remove old event listeners by cloning
            header.replaceWith(header.cloneNode(true));
        });
        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                header.classList.toggle('active');
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
    }

    // Create search bar above the product grid
    const searchContainer = document.createElement('div');
    searchContainer.classList.add('search-container');
    searchContainer.innerHTML = `
        <input type="text" id="search" placeholder="Search products..." />
    `;
    productContainer.parentNode.insertBefore(searchContainer, productContainer);

    // Get all product cards (hardcoded) and store for search/filter
    const allCards = Array.from(document.querySelectorAll('.product-card'));

    // Initialize accordions on page load
    initAccordions();

    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();

        allCards.forEach(card => {
            const category = card.querySelector('h3').textContent.toLowerCase();
            const productName = Array.from(card.querySelectorAll('img')).map(img => img.alt.toLowerCase()).join(' ');

            if (category.includes(term) || productName.includes(term)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });

        // Re-initialize accordions after filtering
        initAccordions();
    });

    // Lightbox functionality (works with existing images)
    const modal = document.querySelector('.lightbox-modal') || createLightboxModal();
    const modalImg = modal.querySelector('.lightbox-content');
    const caption = modal.querySelector('#caption');
    const closeBtn = modal.querySelector('.close');

    document.querySelectorAll('.product-card img').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            caption.textContent = img.alt;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = "none";
    });

    // Function to create lightbox modal if it does not exist
    function createLightboxModal() {
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

        return modal;
    }

});