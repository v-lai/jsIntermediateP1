// Part 3
/* For this assignment you will be combining your knowledge of DOM access and 
    events to build a todo app!

    As a user, you should be able to:
    -Add a new todo (by submitting a form)
    -Mark a todo as completed (cross out the text of the todo)
    -Remove a todo */

// Part 4
/* Using localStorage, try to store your todos so that if you refresh the page 
   you do not lose what you have added to the list! As a super bonus, try to 
   also save todos that you have marked as complete! */

document.addEventListener("DOMContentLoaded", function () {
    var addItems = document.querySelector('.add-items');
    var itemsList = document.querySelector('.list');
    var items = JSON.parse(localStorage.getItem('items')) || [];

    // display todos
    for (var i = 0; i < items.length; i++){
        var newLi = document.createElement("li");
        newLi.innerText = items[i].text;
        newLi.done = items[i].done;
        if (newLi.done) {
            newLi.style.textDecoration = "line-through";
        }
        itemsList.appendChild(newLi);
    }

    // add a new todo
    addItems.addEventListener("submit", function(e){
        e.preventDefault(); // prevent page from reloading on submit
        var newLi = document.createElement("li");
        var newItem = document.getElementById("item").value;
        newLi.innerText = newItem;
        newLi.done = false;
        addItems.reset();
        itemsList.appendChild(newLi);
        // keeping items in localStorage
        items.push({text: newLi.innerText, done: newLi.done});
        localStorage.setItem("items", JSON.stringify(items));
    });

    // marking a todo as completed
    itemsList.addEventListener("click", function(e){
        var clicked = e.target;
        if (!clicked.done) {
            clicked.done = true;
            clicked.style.textDecoration = "line-through";
        } else {
            clicked.done = false;
            clicked.style.textDecoration = "none";
        }
        // keeping items in localStorage
        for (var i=0; i < items.length; i++){
            if(items[i].text === clicked.innerText){
                items[i].done = clicked.done;
                localStorage.setItem("items", JSON.stringify(items));
            }
        }
    });

    // removing a todo?

});

