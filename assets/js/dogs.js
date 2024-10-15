const DISPLAY1 = document.getElementById('pic1')
const DISPLAY2 = document.getElementById('pic2')
const DISPLAY3 = document.getElementById('pic3')
const DISPLAY4 = document.getElementById('pic4')
const DISPLAY5 = document.getElementById('pic5')
const DISPLAY6 = document.getElementById('pic6')
const DISPLAY7 = document.getElementById('pic7')
const DISPLAY8 = document.getElementById('pic8')


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

function display_img(dis,img) {
    dis.style.backgroundImage = `url(${img})`
    dis.style.borderRadius = 'border-radius: 1rem'
}

function photo_gallery(dis, array) {
    setInterval(() => {
        let img = pick_img(array);
        display_img(dis,img);
    }, 5000);
}

function init_gallery(dis, array) {
    let img = pick_img(array);
        display_img(dis,img);
}

photo_gallery(DISPLAY1, photoGallery);
photo_gallery(DISPLAY2, photoGallery);
photo_gallery(DISPLAY3, photoGallery);
photo_gallery(DISPLAY4, photoGallery);
photo_gallery(DISPLAY5, photoGallery);
photo_gallery(DISPLAY6, photoGallery);
photo_gallery(DISPLAY7, photoGallery);
photo_gallery(DISPLAY8, photoGallery);


