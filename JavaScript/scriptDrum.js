const audioOne = document.getElementById('audioOne');
const audioTwo = document.getElementById('audioTwo');
const audioThree = document.getElementById('audioThree');
const audioFour = document.getElementById('audioFour');
const audioQ = document.getElementById('audioQ');
const audioW = document.getElementById('audioW');
const audioE = document.getElementById('audioE');
const audioR = document.getElementById('audioR');
const audioA = document.getElementById('audioA');
const audioS = document.getElementById('audioS');
const audioD = document.getElementById('audioD');
const audioF = document.getElementById('audioF');
const audioZ = document.getElementById('audioZ');
const audioX = document.getElementById('audioX');
const audioC = document.getElementById('audioC');
const audioV = document.getElementById('audioV');

function play(id) {
    if (id == 'one1') {
        audioOne.play();
    } else if (id == 'two2') {
        audioTwo.play();
    } else if (id == 'three3') {
        audioThree.play();
    } else if (id == 'four4') {
        audioFour.play();
    } else if (id == 'Q') {
        audioQ.play();
    } else if (id == 'W') {
        audioW.play();
    } else if (id == 'E') {
        audioE.play();
    } else if (id == 'R') {
        audioR.play();
    } else if (id == 'A') {
        audioA.play();
    } else if (id == 'S') {
        audioS.play();
    } else if (id == 'D') {
        audioD.play();
    } else if (id == 'F') {
        audioF.play();
    } else if (id == 'Z') {
        audioZ.play();
    } else if (id == 'X') {
        audioX.play();
    } else if (id == 'C') {
        audioC.play();
    } else if (id == 'V') {
        audioV.play();
    }
}

document.addEventListener('keydown', (event) => {
    let key = event.key;
    if (key == '1') {
        audioOne.play();
    } else if (key == '2') {
        audioTwo.play();
    } else if (key == '3') {
        audioThree.play();
    } else if (key == '4') {
        audioFour.play();
    } else if (key == 'Q' || key == 'q') {
        audioQ.play();
    } else if (key == 'W' || key == 'w') {
        audioW.play();
    } else if (key == 'E' || key == 'e') {
        audioE.play();
    } else if (key == 'R' || key == 'r') {
        audioR.play();
    } else if (key == 'A' || key == 'a') {
        audioA.play();
    } else if (key == 'S' || key == 's') {
        audioS.play();
    } else if (key == 'D' || key == 'd') {
        audioD.play();
    } else if (key == 'F' || key == 'f') {
        audioF.play();
    } else if (key == 'Z' || key == 'z') {
        audioZ.play();
    } else if (key == 'X' || key == 'x') {
        audioX.play();
    } else if (key == 'C' || key == 'c') {
        audioC.play();
    } else if (key == 'V' || key == 'v') {
        audioV.play();
    }
});