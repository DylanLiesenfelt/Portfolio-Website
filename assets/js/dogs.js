const dogImages = [
    'assets/images/dogs/dogs (1).jpg',
    'assets/images/dogs/dogs (1).png',
    'assets/images/dogs/dogs (1).webp',
    'assets/images/dogs/dogs (2).jpg',
    'assets/images/dogs/dogs (2).png',
    'assets/images/dogs/dogs (3).jpg',
    'assets/images/dogs/dogs (3).png',
    'assets/images/dogs/dogs (4).jpg',
    'assets/images/dogs/dogs (4).png',
    'assets/images/dogs/dogs (5).jpg',
    'assets/images/dogs/dogs (5).png',
    'assets/images/dogs/dogs (6).jpg',
    'assets/images/dogs/dogs (6).PNG',
    'assets/images/dogs/dogs (7).jpg',
    'assets/images/dogs/dogs (7).PNG',
    'assets/images/dogs/dogs (8).jpg',
    'assets/images/dogs/dogs (9).jpg',
    'assets/images/dogs/dogs (10).jpg',
    'assets/images/dogs/dogs (11).jpg',
    'assets/images/dogs/dogs (12).jpg',
    'assets/images/dogs/dogs (13).jpg',
    'assets/images/dogs/dogs (14).jpg',
    'assets/images/dogs/dogs (14).png',
    'assets/images/dogs/dogs (15).jpg',
    'assets/images/dogs/dogs (16).jpg',
    'assets/images/dogs/dogs (17).jpg',
    'assets/images/dogs/dogs (18).jpg',
    'assets/images/dogs/dogs (19).jpg',
    'assets/images/dogs/dogs (20).jpg',
    'assets/images/dogs/dogs (21).jpg',
    'assets/images/dogs/dogs (22).jpg',
    'assets/images/dogs/dogs (26).PNG',
    'assets/images/dogs/dogs (27).PNG',
    'assets/images/dogs/dogs (32).png',
    'assets/images/dogs/dogs (33).PNG',
    'assets/images/dogs/dogs (34).PNG',
    'assets/images/dogs/dogs (35).PNG',
    'assets/images/dogs/dogs (36).PNG',
    'assets/images/dogs/dogs (37).PNG',
    'assets/images/dogs/dogs (38).PNG',
    'assets/images/dogs/dogs (39).PNG',
    'assets/images/dogs/dogs (40).PNG',
    'assets/images/dogs/dogs (41).PNG',
    'assets/images/dogs/dogs (42).PNG',
    'assets/images/dogs/dogs (43).PNG',
    'assets/images/dogs/dogs (44).PNG',
    'assets/images/dogs/dogs (45).PNG',
    'assets/images/dogs/dogs (46).PNG',
    'assets/images/dogs/dogs (47).PNG',
    'assets/images/dogs/dogs (48).PNG',
    'assets/images/dogs/dogs (49).PNG',
    'assets/images/dogs/dogs (50).PNG',
    'assets/images/dogs/dogs (51).PNG',
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