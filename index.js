var b = document.querySelector(".noButton");

b.addEventListener("mouseover", function() {
    const i = Math.floor(Math.random() * 400) + 1; 
    const j = Math.floor(Math.random() * 400) + 1; 

    b.style.left = i + "px"; 
    b.style.top = j + "px"; 


});

