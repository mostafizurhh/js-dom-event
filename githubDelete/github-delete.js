// step 1. hiding text by clicking a button
document.getElementById('deleteBtn').addEventListener('click', function () {
    const secretInfo = document.getElementById('hideInfo');
    secretInfo.style.display = 'none';
})

// step 2. write 'delete' the the btn will enable and text will be hided by clicking the button
document.getElementById('textField').addEventListener('keyup', function (event) {
    //target the value of input field to get everything typed
    const text = event.target.value;
    //get the delete button
    const deleteButton = document.getElementById('deleteBtn');
    // add condition for the inputfield and button
    if (text == 'Delete') {
        deleteButton.removeAttribute('disabled'); //enable the delete btn
    }
    else {
        deleteButton.setAttribute('disabled', true); //disable the delete btn
    }
})