const galleryImages = [
    'assets/images/gallery/1.png', 
    'assets/images/gallery/2.png', 
    'assets/images/gallery/3.png', 
    'assets/images/gallery/4.png', 
    'assets/images/gallery/5.png', 
    'assets/images/gallery/6.png', 
    'assets/images/gallery/8.PNG', 
    'assets/images/gallery/9.PNG',
    'assets/images/gallery/10.PNG',
    'assets/images/gallery/11.PNG',
    'assets/images/gallery/12.PNG',
    'assets/images/gallery/13.PNG',
    'assets/images/gallery/14.PNG', 
    'assets/images/gallery/15.PNG', 
    'assets/images/gallery/16.PNG', 
    'assets/images/gallery/17.PNG', 
    'assets/images/gallery/18.PNG', 
    'assets/images/gallery/19.PNG', 
    'assets/images/gallery/20.PNG', 
    'assets/images/gallery/21.PNG', 
    'assets/images/gallery/22.PNG', 
    'assets/images/gallery/23.PNG', 
    'assets/images/gallery/24.PNG', 
    'assets/images/gallery/25.PNG', 
    'assets/images/gallery/26.PNG', 
    'assets/images/gallery/27.PNG', 
    'assets/images/gallery/28.PNG', 
    'assets/images/gallery/29.PNG', 
    'assets/images/gallery/30.PNG', 
    'assets/images/gallery/31.PNG'
]


function displayImages() {
    const photoGallery = document.getElementById('photoGallery');
    photoGallery.innerHTML = ''; // Clear previous images

    // Create and append nine image elements
    const displayedImages = [];
    for (let i = 0; i < 9; i++) {
        const remainingImages = galleryImages.filter(image => !displayedImages.includes(image));
        if (remainingImages.length === 0) {
            // All images have been displayed, reset the array
            displayedImages.length = 0;
        }

        const randomIndex = Math.floor(Math.random() * remainingImages.length);
        const randomImage = remainingImages[randomIndex];
        displayedImages.push(randomImage);

        const img = document.createElement('img');
        img.src = randomImage;

        const photoDiv = document.createElement('div');
        photoDiv.classList.add('photo');
        photoDiv.appendChild(img);

        photoGallery.appendChild(photoDiv);
    }
}

const interval = 5000; // Change images every 5 seconds
setInterval(displayImages, interval);

displayImages();
