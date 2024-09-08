const TAB = document.getElementById('tab');
const NAV = document.querySelector('nav');

let isCollapsed = false;

TAB.addEventListener('click', function() {
    if (isCollapsed) {
        NAV.style.width = '70px';
        NAV.style.visibility = 'visible';
    } else {
        NAV.style.width = '0px';
        NAV.style.visibility = 'hidden';
    }
    isCollapsed = !isCollapsed;
    console.log('click')
});



