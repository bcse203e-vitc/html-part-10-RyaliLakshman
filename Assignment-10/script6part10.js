function bringToFront(clickedImage) {
    // Get all images
    let images = document.querySelectorAll('.image');

    // Find the highest z-index
    let maxZ = 0;
    images.forEach(img => {
        let zIndex = parseInt(window.getComputedStyle(img).zIndex);
        if (zIndex > maxZ) {
            maxZ = zIndex;
        }
    });

    // Set clicked image to highest z-index + 1
    clickedImage.style.zIndex = maxZ + 1;
}