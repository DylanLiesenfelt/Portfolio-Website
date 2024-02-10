const aboutTab = document.getElementById('about-tab');
const about = document.getElementById('about')

const projectTab = document.getElementById('project-tab');
const project = document.getElementById('project')

const resumeTab = document.getElementById('resume-tab');
const resume = document.getElementById('resume')

function selectAbout() {
    aboutTab.style.backgroundColor = 'rgb(36, 36, 36)';
    aboutTab.style.zIndex = '0';
    aboutTab.style.outline = 'none';
    about.style.visibility = 'visible';

    projectTab.style.backgroundColor = 'rgb(70, 70, 70)';
    projectTab.style.zIndex = '1';
    projectTab.style.outline = '1px solid gray';
    project.style.visibility = 'hidden';

    resumeTab.style.backgroundColor = 'rgb(70, 70, 70)';
    resumeTab.style.zIndex = '1';
    resumeTab.style.outline = '1px solid gray';
    resume.style.visibility = 'hidden';
};

function selectResume() {
    aboutTab.style.backgroundColor = 'rgb(70, 70, 70)';
    aboutTab.style.zIndex = '1';
    aboutTab.style.outline = '1px solid gray';
    about.style.visibility = 'hidden';

    projectTab.style.backgroundColor = 'rgb(70, 70, 70)';
    projectTab.style.zIndex = '1';
    projectTab.style.outline = '1px solid gray';
    project.style.visibility = 'hidden';

    resumeTab.style.backgroundColor = 'rgb(36, 36, 36)';
    resumeTab.style.zIndex = '0';
    resumeTab.style.outline = 'none';
    resume.style.visibility = 'visible';
};

function selectProject() {
    aboutTab.style.backgroundColor = 'rgb(70, 70, 70)';
    aboutTab.style.zIndex = '1';
    aboutTab.style.outline = '1px solid gray';
    about.style.visibility = 'hidden';

    projectTab.style.backgroundColor = 'rgb(36, 36, 36)';
    projectTab.style.zIndex = '0';
    projectTab.style.outline = 'none';
    project.style.visibility = 'visible'

    resumeTab.style.backgroundColor = 'rgb(70, 70, 70)';
    resumeTab.style.zIndex = '1';
    resumeTab.style.outline = '1px solid gray';
    resume.style.visibility = 'hidden';
};