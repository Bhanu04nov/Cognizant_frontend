function displayLarge(imgElement) {
    const largeImage = document.getElementById('large-view');
    largeImage.src = imgElement.src;
    largeImage.alt = imgElement.alt;
}