class Skill {
    constructor(value) {
        this.value = value;
    }
}

const htmlVal = new Skill(90);
const cssVal = new Skill(85);
const jsVal = new Skill(60);
const pyVal = new Skill(60);
const cVal = new Skill(0);
const javaVal = new Skill(5);
const reactVal = new Skill(30);
const nodeVal = new Skill(20);

const html = document.getElementById('htmlBar');
const css = document.getElementById('cssBar');
const js = document.getElementById('jsBar');
const py = document.getElementById('pyBar');
const c = document.getElementById('cBar');
const java = document.getElementById('javaBar');
const react = document.getElementById('reactBar');
const node = document.getElementById('nodeBar');

function setBarWidth(barElement, value) {
    barElement.style.width = value + '%';
}

setBarWidth(html, htmlVal.value);
setBarWidth(css, cssVal.value);
setBarWidth(js, jsVal.value);
setBarWidth(py, pyVal.value);
setBarWidth(c, cVal.value);
setBarWidth(java, javaVal.value);
setBarWidth(react, reactVal.value);
setBarWidth(node, nodeVal.value)

function setColor(barElement, value) {
    if (value >= 70) {
        barElement.style.backgroundColor = 'green';
    } else if (value >= 40 && value < 70) {
        barElement.style.backgroundColor = 'yellow';
    } else {
        barElement.style.backgroundColor = 'red';
    }
}

setColor(html, htmlVal.value);
setColor(css, cssVal.value);
setColor(js, jsVal.value);
setColor(py, pyVal.value);
setColor(c, cVal.value);
setColor(java, javaVal.value);
setColor(react, reactVal.value);
setColor(node, nodeVal.value);