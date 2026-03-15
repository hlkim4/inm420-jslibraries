/* Tokyo 24 Hours - JavaScript Library Initialisation 
    This script controls the interactive elements of the holiday guide.
*/

// 1. Initialise fullPage.js
// This creates the smooth, full-screen scrolling effect between sections.
new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true, // Shows dots on the right side
    navigationPosition: 'right',
    scrollingSpeed: 1000,
    controlArrows: true,
    // Accessibility: Allows users to navigate via keyboard
    keyboardScrolling: true,
    responsiveWidth: 0, // Keeps the effect on all screen sizes
});

// 2. Initialise AOS (Animate On Scroll)
// This triggers animations as the user moves through the sections.
AOS.init({
    duration: 1000, // Animation lasts for 1 second
    once: false,    // Set to 'false' so animations repeat when scrolling back up
    mirror: true    // Animates elements out while scrolling past them
});

// 3. Initialise Glide.js (Image Slider)
// This sets up the carousel for the Tsukiji Market photos.
new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1, // Shows one image at a time on mobile
    autoplay: 3000, // Slides change every 3 seconds
    hoverpause: true,
    gap: 10
}).mount();

// 4. Initialise Leaflet.js (Interactive Map)
// This displays the location of Shibuya Crossing on a map.
// Coordinates for Shibuya Crossing: [35.6595, 139.7005]
const map = L.map('map').setView([35.6595, 139.7005], 15);

// Add OpenStreetMap tiles (the visual style of the map)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add a marker to point specifically to Shibuya Crossing
L.marker([35.6595, 139.7005])
    .addTo(map)
    .bindPopup('Shibuya Crossing - The heart of Tokyo.')
    .openPopup();