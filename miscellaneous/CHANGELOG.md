# Changelog  
All notable changes to this project are documented in this file 

## [1.0.0] – Initial Setup  
- Initial setup with project folders (assets, css, pages)
- Added index.html (Home page) with basic navigation and hero section  

## [1.1.0] – Core Pages Added  
- Added about.html, products.html, blog.html, and contact.html  
- Inserted placeholder images under assets/  
- Set up consistent navigation across all pages
- More information added to html pages

## [1.2.0] – Styling and Design  
- Linked external stylesheet style.css for consistent styling 
- Applied brand color scheme (soft pink + coral)  
- Added responsive layouts using CSS  
- Updated typography and button styles  

## [1.3.0] – Recent Updates  
- Completed responsive design for mobile and tablet (hamburger menu)  
- Improved product and blog layouts with cards  
- Finalized README with overview, technologies, and references  
- Polished all pages for submission

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