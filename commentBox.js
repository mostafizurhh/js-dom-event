// step 1. get the comment button and add eventlistener
document.getElementById('commentPostBtn').addEventListener('click', function () {
    // step 2. get textarea inside function
    const commentArea = document.getElementById('commentBox');
    //step 3. get innertext/textarea's value
    const newComment = commentArea.value;
    //step 4. get the parrentId where the comment will be added
    const division = document.getElementById('commentDiv');
    //step 5. create a new empty paragraph section to add new comment 
    const p = document.createElement('p');
    //step 6. update the empty paragraph with the comment
    p.innerText = newComment;
    //step 7. append this paragraph inside the div. don't put '' when writing childname
    division.appendChild(p);
    //step 8. clear the text area
    commentArea.value = '';
})