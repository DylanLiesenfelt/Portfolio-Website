resumeButton = document.getElementById('nav-resume');

resumeButton.addEventListener('click', function() {
    window.location.href = './assets/pages/resume.html'
})

ghLink = document.getElementById('gh-link')
liLink = document.getElementById('li-link')
ytLink = document.getElementById('yt-link')


ghLink.addEventListener('click', function() {
    window.location.href = 'https://github.com/DylanLiesenfelt'
})

liLink.addEventListener('click', function() {
    window.location.href = 'https://www.linkedin.com/in/dylanliesenfelt/'
})

ytLink.addEventListener('click', function() {
    window.location.href = 'https://www.youtube.com/@BubBits'
})