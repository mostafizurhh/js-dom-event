/*********************only work when got clicked ************************/

// <!-- 1st method onclick event in html document -->
// <button onclick="document.body.style.backgroundColor = 'green'">Make Green</button>

/*************************** WILL USE THIS ****************************************/
// <!-- 2nd method onclick event in html document -->
// <button onclick="makered()">Make Red</button>
function makered() {
    document.body.style.backgroundColor = 'red';
}
/*******************************************************************/

// <!-- 3rd method onclick event in html document -->
// <button id="makePurple">Make Purple</button>
const makePurpleButton = document.getElementById('makePurple');
makePurpleButton.onclick = makepurple;

function makepurple() {
    document.body.style.backgroundColor = 'purple'
}

// <!-- 4th method onclick event in html document -->
// <button id="makeCoral">Make Coral</button>
const makeCoralButton = document.getElementById('makeCoral');
makeCoralButton.onclick = function makecoral() {
    document.body.style.backgroundColor = 'coral'
}

// <!-- 5th method onclick event in html document by eventlisner -->
// <button id="makeYellow">Make Yellow</button>
const makeYellowButton = document.getElementById('makeYellow');
makeYellowButton.addEventListener('click', makeyellow);

function makeyellow() {
    document.body.style.backgroundColor = 'yellow';
}
// <!-- 6th method onclick event in html document by eventlisner -->
// <button id="makeBlue">Make Blue</button>
const makeBlueButton = document.getElementById('makeBlue');
makeBlueButton.addEventListener('click', function makeblue() {
    document.body.style.backgroundColor = 'blue';
});

/*************************** WILL USE THIS *******************************/
// <!-- 7th method onclick event in html document by eventlisner -->
// <button id="makeOrange">Make Orange</button>
document.getElementById('makeOrange').addEventListener('click', function makeorange() {
    document.body.style.backgroundColor = 'orange';
});
/************************************************************************/


