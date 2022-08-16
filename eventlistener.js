// method 1
function makeTomato() {
    document.body.style.backgroundColor = 'tomato';
}

// method 2
document.getElementById('makeBrown').addEventListener('click', function () {
    document.body.style.backgroundColor = 'brown';
});

// method 2 -->input field update

document.getElementById('updateButton').addEventListener('click', function () {
    const inputfield = document.getElementById('inputField');
    const inputText = inputfield.value;

    const p = document.getElementById('updateParagraph');
    p.innerText = inputText;
    const newData = inputText;
    inputfield.value = '';
})