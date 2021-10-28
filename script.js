const bioBox = document.querySelector('#container');
const bioBox2 = document.querySelector('.MainContainer');
const triggerFlip = document.querySelector('#about');

//document.getElementById("about").addEventListener("click", function() {
//    alert("Hello World!")
//}); // This is a test on how eventListerners work on ID in HTML


triggerFlip.addEventListener('click', function() {
    bioBox.classList.toggle('flipped');
}, false);


