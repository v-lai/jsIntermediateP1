// Part 1
/* 1. Add the necessary code to wait for the DOM to load to make sure that anything 
   you manipulate in the DOM has loaded. You can do this either using window.onload 
   or adding an event listener for DOMContentLoaded. */
// 2. Replace the text "Change me" with "Hello World!".
/* 3. When a user hovers over one of the colored boxes change the text to display 
   the color that is being hovered over. */
// 4. Create a new div element.
/* 5. Give your new div a class of purple and style it so that it has a background 
   color of purple. */
// 6. Append your new div to the page to the section tag.
document.addEventListener("DOMContentLoaded", function(){ // 1.
    var changeHeading = document.getElementById("change_heading"); // 2.
    changeHeading.innerText = "Hello World!"; 

    var newDiv = document.createElement("div"); // 4.
    newDiv.className = "purple"; // 5.
    newDiv.style.backgroundColor = "purple";
    var section = document.querySelector("section"); // 6.
    section.appendChild(newDiv);

    var selected = document.querySelector(".selected"); // 3.
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++){
        divs[i].addEventListener("mouseenter", function(){
            selected.innerText = this.className;
        });
    }


// Part 2
/* Create a racing game with the two cars. When the race button is pressed, the 
   two cars should move across the screen until one of them is at the end of the 
   screen. When one of the blocks reaches the end - you should alert "winner!" */
    var car1 = document.querySelector(".car1");
    var car2 = document.querySelector(".car2");
    var button = document.querySelector("button");
    button.addEventListener("click", function(){
        var rand1, rand2;
        var temp1 = 0;
        var temp2 = 0;

        // actual car racing functionality (not modifying css)
        var timerId = setInterval(function(){
            rand1 = Math.random() * 100; // 100 can be changed to whatever
            rand2 = Math.random() * 100;
            
            temp1 += rand1;
            temp2 += rand2;
            car1.style.marginLeft = temp1 + 'px';
            car2.style.marginLeft = temp2 + 'px';

            // 50px is size of div (could do window.innerWidth - 50)
            if (temp1 >= window.innerWidth || temp2 >= window.innerWidth){
                if (temp1 > temp2){
                    alert("winner car1!");
                } else {
                    alert("winner car2!");
                }
                clearInterval(timerId);
                car1.style.marginLeft = 0; // reset cars
                car2.style.marginLeft = 0;
            }
        }, 100); // 100ms can be changed to whatever
    });

}); // end addEventListener

// Part 3 & 4 on eventsToDo.html & eventsToDo.js
