// method 1
function makeTomato() {
    document.body.style.backgroundColor = 'tomato';
}

// method 2
document.getElementById('makeBrown').addEventListener('click', function () {
    document.body.style.backgroundColor = 'brown';
});

// method 2 -->input field update
document.getElementById('lightPink').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightpink';
});

