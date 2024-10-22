const dogImages = [
    "../assets/images/dogs/dsafdsa.webp",
    '../assets/images/dogs/dsfgsdfg.jpg',
    '../assets/images/dogs/erdgerg.jpg',
    '../assets/images/dogs/esfef.jpg',
    '../assets/images/dogs/esfews.jpg',
    '../assets/images/dogs/ewfwafw.jpg',
    '../assets/images/dogs/ewrdfwerf.jpg',
    '../assets/images/dogs/ewrfdwefwe.jpg',
    '../assets/images/dogs/ewsarfe.jpg',
    '../assets/images/dogs/gdrgfer.jpg',
    '../assets/images/dogs/gergergerg.jpg',
    '../assets/images/dogs/image.jpg',
    '../assets/images/dogs/rrrrrrrrrrrrr.jpg',
    '../assets/images/dogs/sdfsdfse.jpg',
    '../assets/images/dogs/sdfwes.jpg',
    '../assets/images/dogs/sefrwesfwe.jpg',
    '../assets/images/dogs/sefwse.jpg',
    '../assets/images/dogs/wadawdawdaw.jpg',
    '../assets/images/dogs/wadewf.jpg',
    '../assets/images/dogs/werdw3r.jpg',
    '../assets/images/dogs/werfwe.jpg',
    '../assets/images/dogs/werwr.jpg',
];

function changeImage(imageElementId) {
    const randomImage = dogImages[Math.floor(Math.random() * dogImages.length)];
    document.getElementById(imageElementId).src = randomImage;
}

setInterval(() => {
    changeImage('dog1');
    changeImage('dog2');
    changeImage('dog3');
    changeImage('dog4');
    changeImage('dog5');
    changeImage('dog6');
    changeImage('dog7');
    changeImage('dog8');

}, 5000);