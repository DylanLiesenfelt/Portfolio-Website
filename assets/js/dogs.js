const DISPLAY = document.getElementById('pic')

let photoGallery = [
    '../images/dogs/dsafdsa.webp',
    '../images/dogs/dsfgsdfg.jpg',
    '../images/dogs/erdgerg.jpg',
    '../images/dogs/esfef.jpg',
    '../images/dogs/esfews.jpg',
    '../images/dogs/ewfwafw.jpg',
    '../images/dogs/ewrdfwerf.jpg',
    '../images/dogs/ewrfdwefwe.jpg',
    '../images/dogs/ewsarfe.jpg',
    '../images/dogs/gdrgfer.jpg',
    '../images/dogs/gergergerg.jpg',
    '../images/dogs/image.jpg',
    '../images/dogs/rrrrrrrrrrrrr.jpg',
    '../images/dogs/sdfsdfse.jpg',
    '../images/dogs/sdfwes.jpg',
    '../images/dogs/sefrwesfwe.jpg',
    '../images/dogs/sefwse.jpg',
    '../images/dogs/wadawdawdaw.jpg',
    '../images/dogs/wadewf.jpg',
    '../images/dogs/werdw3r.jpg',
    '../images/dogs/werfwe.jpg',
    '../images/dogs/werwr.jpg',
]

function pick_img(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex]
}

function display_img(img) {
    DISPLAY.style.backgroundImage = `url(${img})`
    DISPLAY.style.borderRadius = 'border-radius: 1rem'
}

function photo_gallery(array) {
    setInterval(() => {
        let img = pick_img(array);
        display_img(img);
    }, 3000);
}

photo_gallery(photoGallery);