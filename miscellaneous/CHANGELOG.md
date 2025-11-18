# Changelog  
All notable changes to this project are documented in this file 

## [1.0.0] – Initial Setup

Initial project folder structure created: assets/, css/, pages/
Added index.html with hero section and navigation

Files: index.html, folder structure

## [1.1.0] – Core Pages Added

Added about.html, products.html, blog.html, contact.html
Inserted placeholder images into assets/ folder
Standardized navigation across all pages

Files: pages/about.html, pages/products.html, pages/blog.html, pages/contact.html, assets/


## [1.2.0] – Styling and Responsive Design

Linked external style.css for consistent styling
Applied pastel color scheme (soft pink + coral)
Responsive layout implemented for desktop, tablet, and mobile
Updated typography and buttons for modern aesthetic

Files: css/style.css, all HTML pages

## Part  2 Feedback Changes

### Navigation Consistency Fixed
*Issue*: Navigation structure was inconsistent across pages. Blog.html and products.html used different HTML structure with <nav class="navbar"> and <div class="nav-links">, while other pages used simple <nav> tags. Additionally, hamburger menu div was missing from all pages.

*Solution*: 
- Standardized navigation HTML structure across all 5 pages (index, about, blog, contact, products)
- Added hamburger menu div to all pages
- Ensured consistent file paths (../ for pages in subfolder, ./ for index.html)
- Added smooth mobile menu transitions

*Files Changed*: 
- index.html
- pages/about.html
- pages/blog.html
- pages/contact.html
- pages/products.html
- css/style.css

### CSS Pseudo Classes Enhanced
*Issue*: Limited use of CSS pseudo-classes for interactivity and styling

*Solution*: Added comprehensive pseudo-classes including:
- :hover states on navigation, buttons, cards, and form inputs
- :focus states for accessibility on all interactive elements
- :active states for buttons and links
- :nth-child() for list items and cards
- :valid and :invalid for form validation feedback

*Files Changed*: css/style.css

### Responsive Design - Media Queries Improved
*Issue*: Navigation didn't respond properly on tablet and mobile devices. Menu would hide but not show when hamburger was clicked.

*Solution*:
- Fixed mobile navigation with proper max-height transitions
- Added tablet-specific breakpoint (1024px)
- Improved mobile breakpoint (768px) with absolute positioning for nav menu
- Added smooth animations for menu open/close
- Navigation now slides down from header on mobile

*Files Changed*: css/style.css

### Navigation Menu Enhancement
*Issue*: Mobile menu didn't close when clicking links or outside the menu

*Solution*:
- Enhanced JavaScript to close menu when clicking navigation links
- Added click-outside functionality to close menu
- Added hamburger animation (transforms into X when open)
- Improved touch targets for mobile devices (15px padding)

*Files Changed*: All HTML files (updated script section)

### GitHub Documentation
*Issue*: Changelog entries were not detailed enough

*Solution*: Created comprehensive changelog with detailed descriptions of all changes, including issue identification, solutions implemented, and files modified

*Files Changed*: 
- CHANGELOG.md
- README.md

### References Updated
*Issue*: References section was incomplete

*Solution*: Added comprehensive references including:
- MDN Web Docs for HTML, CSS, and JavaScript
- W3Schools for responsive design patterns
- Stack Overflow for hamburger menu implementation

*Files Changed*: README.md


## [1.3.0] – Interactive & Dynamic Features Added

## Products Page (products.html)

Feature 1: Search Bar & Product Filtering
Added <input id="search"> above product grid
Filters product cards by name, category, and tags dynamically
Files: pages/products.html, js/products.js, css/style.css


Feature 2: Accordion for Product Details
Expand/collapse product details using .accordion-header
Smooth transitions with max-height and padding changes
Files: pages/products.html, js/products.js, css/style.css


Feature 3: Lightbox Image Gallery
Clicking product image opens modal with larger view and caption
Close modal via “×” or clicking outside image
Files: pages/products.html, js/products.js, css/style.css


Feature 4: Dynamic Product Data
Products loaded from items.json for easy content updates
Files: pages/products.html, js/products.js, data/items.json


## Enquiry Page (enquiry.html)

Feature 1: Form Handling & Validation
Validates user inputs (name, email, message type, message)
Dynamic feedback for success/failure messages
Files: pages/enquiry.html, js/enquiry.js, css/style.css


## Contact Page (contact.html)

Feature 1: Leaflet Interactive Map
Map container <div id="map"> under “Find Us Here” section
Custom coordinates for business location
Pan, zoom, and map interaction enabled
Files: pages/contact.html, js/contact.js, css/style.css


Feature 2: Form Validation & Success Feedback
Real-time validation for name, email, phone (optional), message type, message
Error messages displayed next to each field (#nameError, #emailError, etc.)
Success message shows after valid submission dynamically
Files: pages/contact.html, js/contact.js, css/style.css


Feature 3: Responsive Hamburger Menu
.hamburger button added for mobile navigation
Menu slides down/up on toggle, closes on link click or outside click
Smooth transition animations included
Files: pages/contact.html, pages/about.html, pages/products.html, pages/blog.html, pages/index.html, css/style.css

## Styling Enhancements

Hover, focus, and active pseudo-classes for buttons, nav links, product cards
Transitions added to accordion, lightbox, hamburger menu
Media queries for tablet (1024px) and mobile (768px) breakpoints
Files: css/style.css


## POE Part 3 – Functionality Documentation (Updated)
Interactive Elements

## Products Page

Accordion: Expands and collapses product details dynamically
Lightbox: Enlarged view of product images with captions
Search Bar: Filters product cards by name, category, and tags
Dynamic Product Data: Products dynamically loaded from items.json


## Contact Page

Leaflet Map: Interactive map with business coordinates, pan and zoom enabled
Form Validation: Real-time validation for all form fields, dynamic success message


## Enquiry Page

Form Handling: Validates inputs and displays dynamic success/failure feedback
Global Interactive Feature
Hamburger Menu: Responsive navigation toggle for small screens with smooth open/close animation

## Dynamic Content

## Products Page
Dynamic Product Filtering: JavaScript filters product cards in real-time based on user input
Files: pages/products.html, js/products.js

## Contact Page
Dynamic Success Message: Displays user-specific message after successful form submission
Files: pages/contact.html, js/contact.js

## Enquiry Page
Dynamic Form Feedback: Shows success/failure messages after form submission
Files: pages/enquiry.html, js/enquiry.js

## Notes
All interactive elements tested across desktop, tablet, and mobile views
Interactive features use CSS transitions for smooth UX
Documentation explicitly references elements and pages where features were implemented