const TAB = document.getElementById('tab');
const NAV = document.querySelector('nav');

let isCollapsed = false;

TAB.addEventListener('click', function() {
    if (isCollapsed) {
        NAV.style.width = '100px';
    } else {
        NAV.style.width = '0px';
    }
    isCollapsed = !isCollapsed;
});



const ABOUT = document.getElementById('about')
const PROJECTS = document.getElementById('projects')
const RESUME = document.getElementById('resume')
const ABOUTBTN = document.getElementById('about-btn')
const PROJBTN = document.getElementById('proj-btn')
const RESUMEBTN = document.getElementById('resume-btn')

ABOUTBTN.addEventListener('click', function() {
    ABOUT.style.visibility = 'visible'
    PROJECTS.style.visibility = 'hidden'
    RESUME.style.visibility = 'hidden'
})

PROJBTN.addEventListener('click', function() {
    PROJECTS.style.visibility = 'visible'
    ABOUT.style.visibility = 'hidden'
    RESUME.style.visibility = 'hidden'
})

RESUMEBTN.addEventListener('click', function() {
    RESUME.style.visibility = 'visible'
    PROJECTS.style.visibility = 'hidden'
    ABOUT.style.visibility = 'hidden'
})

document.querySelectorAll('#link-container button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});


