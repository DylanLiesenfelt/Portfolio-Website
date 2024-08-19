aboutView = document.getElementById('about-display')
contactView = document.getElementById('contact-display')
resumeView = document.getElementById('resume-display')
projectsView = document.getElementById('projects-display')


document.getElementById('about-control').addEventListener('click', function() {
    aboutView.style.visibility = 'visible'
    contactView.style.visibility = 'hidden'
    resumeView.style.visibility = 'hidden'
    projectsView.style.visibility = 'hidden'
})

document.getElementById('contact-control').addEventListener('click', function() {
    aboutView.style.visibility = 'hidden'
    contactView.style.visibility = 'visible'
    resumeView.style.visibility = 'hidden'
    projectsView.style.visibility = 'hidden'
})

document.getElementById('resume-control').addEventListener('click', function() {
    aboutView.style.visibility = 'hidden'
    contactView.style.visibility = 'hidden'
    resumeView.style.visibility = 'visible'
    projectsView.style.visibility = 'hidden'
})

document.getElementById('project-control').addEventListener('click', function() {
    aboutView.style.visibility = 'hidden'
    contactView.style.visibility = 'hidden'
    resumeView.style.visibility = 'hidden'
    projectsView.style.visibility = 'visible'
})

document.getElementById('gh-link').addEventListener('click', function() {
    window.open('https://github.com/DylanLiesenfelt')
})

document.getElementById('li-link').addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/dylanliesenfelt/')
})

document.getElementById('yt-link').addEventListener('click', function() {
    window.open('https://www.youtube.com/@BubBits')
})

document.getElementById('mail-link').addEventListener('click', function() {
    window.location.href = 'mailto:dylanliesenfelt@proton.me';
})



