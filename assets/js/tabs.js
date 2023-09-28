const aboutWindow = document.getElementById('aboutWindow')
const certWindow = document.getElementById('certWindow')
const contactWindow = document.getElementById('contactWindow')
const photoGalleryWindow = document.getElementById('photoGalleryWindow')

document.getElementById('about').addEventListener('click', function() {
    aboutWindow.style.visibility = "visible";
    contactWindow.style.visibility = "hidden";
    certWindow.style.visibility = "hidden";
    photoGalleryWindow.style.visibility = "hidden";
    console.log('About Clicked')
    }
)

document.getElementById('certs').addEventListener('click', function() {
    aboutWindow.style.visibility = "hidden";
    contactWindow.style.visibility = "hidden";
    certWindow.style.visibility = "visible";
    photoGalleryWindow.style.visibility = "hidden";
    console.log('Certs Clicked')
    }
)

document.getElementById('contact').addEventListener('click', function() {
    aboutWindow.style.visibility = "hidden";
    contactWindow.style.visibility = "visible";
    certWindow.style.visibility = "hidden";
    photoGalleryWindow.style.visibility = "hidden";
    console.log('contact Clicked')
    }
)
document.getElementById('photoGallery').addEventListener('click', function() {
    aboutWindow.style.visibility = "hidden";
    contactWindow.style.visibility = "hidden";
    certWindow.style.visibility = "hidden";
    photoGalleryWindow.style.visibility = "visible";
    console.log('Gallery Clicked')
    }
)

