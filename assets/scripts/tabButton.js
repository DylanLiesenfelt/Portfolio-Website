const about = document.getElementById('about-tab');
const project = document.getElementById('project-tab');
const resume = document.getElementById('resume-tab');


function selectAbout() {
    about.style.backgroundColor = 'rgb(36, 36, 36)';
    about.style.zIndex = '0';
    about.style.outline = 'none';

    project.style.backgroundColor = 'rgb(70, 70, 70)';
    project.style.zIndex = '1';
    project.style.outline = '1px solid gray';

    resume.style.backgroundColor = 'rgb(70, 70, 70)';
    resume.style.zIndex = '1';
    resume.style.outline = '1px solid gray';
};

function selectResume() {
    about.style.backgroundColor = 'rgb(70, 70, 70)';
    about.style.zIndex = '1';
    about.style.outline = '1px solid gray';

    project.style.backgroundColor = 'rgb(70, 70, 70)';
    project.style.zIndex = '1';
    project.style.outline = '1px solid gray';

    resume.style.backgroundColor = 'rgb(36, 36, 36)';
    resume.style.zIndex = '0';
    resume.style.outline = 'none';
};

function selectProject() {
    about.style.backgroundColor = 'rgb(70, 70, 70)';
    about.style.zIndex = '1';
    about.style.outline = '1px solid gray';

    project.style.backgroundColor = 'rgb(36, 36, 36)';
    project.style.zIndex = '0';
    project.style.outline = 'none';

    resume.style.backgroundColor = 'rgb(70, 70, 70)';
    resume.style.zIndex = '1';
    resume.style.outline = '1px solid gray';
};