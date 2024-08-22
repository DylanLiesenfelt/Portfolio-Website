aboutView = document.getElementById('about-display')
contactView = document.getElementById('contact-display')
resumeView = document.getElementById('resume-display')
projectsView = document.getElementById('projects-display')

aboutControl = document.getElementById('about-control')
contactControl = document.getElementById('contact-control')
resumeControl = document.getElementById('resume-control')
projectControl = document.getElementById('project-control')


aboutControl.addEventListener('click', function() {
    aboutView.style.visibility = 'visible'
    contactView.style.visibility = 'hidden'
    resumeView.style.visibility = 'hidden'
    projectsView.style.visibility = 'hidden'

    aboutControl.style.color = 'white';
    contactControl.style.color = 'black';
    resumeControl.style.color = 'black';
    projectControl.style.color = 'black';
})

contactControl.addEventListener('click', function() {
    aboutView.style.visibility = 'hidden'
    contactView.style.visibility = 'visible'
    resumeView.style.visibility = 'hidden'
    projectsView.style.visibility = 'hidden'

    aboutControl.style.color = 'black';
    contactControl.style.color = 'white';
    resumeControl.style.color = 'black';
    projectControl.style.color = 'black';
})

resumeControl.addEventListener('click', function() {
    aboutView.style.visibility = 'hidden'
    contactView.style.visibility = 'hidden'
    resumeView.style.visibility = 'visible'
    projectsView.style.visibility = 'hidden'

    aboutControl.style.color = 'black';
    contactControl.style.color = 'black';
    resumeControl.style.color = 'white';
    projectControl.style.color = 'black';
})

projectControl.addEventListener('click', function() {
    aboutView.style.visibility = 'hidden'
    contactView.style.visibility = 'hidden'
    resumeView.style.visibility = 'hidden'
    projectsView.style.visibility = 'visible'

    aboutControl.style.color = 'black';
    contactControl.style.color = 'black';
    resumeControl.style.color = 'black';
    projectControl.style.color = 'white';
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



