document.querySelector(".btn").addEventListener('click', function (event) {
    document.querySelector('.popup').classList.remove('hidden')    // using classlist method to add pop up animation for instruction
});

document.querySelector(".close").addEventListener('click', function () {
    document.querySelector('.popup').classList.add('hidden')
})

function clicked(event) {   // using the input from user action and checking for key or click action to play sound
    if (event === 'w' || event.key === 'w') {
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
    } else if (event === 'a' || event.key === 'a') {
        var audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
    } else if (event === 's' || event.key === 's') {
        var audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
    } else if (event === 'd' || event.key === 'd') {
        var audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
    } else if (event === 'j' || event.key === 'j') {
        var audio = new Audio("./sounds/snare.mp3");
        audio.play();
    } else if (event === 'k' || event.key === 'k') {
        var audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
    } else if (event === 'l' || event.key === 'l') {
        var audio = new Audio("./sounds/crash.mp3");
        audio.play();
    }
}


function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);  //The . helps in adding the class of the used key (click or press)
    activeButton.classList.add("pressed");   //The classList method to add animation and remove them with settime out function
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}

function key() {   // function to detect the event pressed and get the key value
    document.querySelector(".set").addEventListener("keypress", function (event) {
        clicked(event)
        buttonAnimation(event.key);  // Passing value to buttonanimation fnc as argument to add animation
    })
}

key()

function init() {  // function to detect the event click and get the clicked element value
    document.querySelector(".set").addEventListener('click', function (event) {
        clicked(event.target.innerText)
        buttonAnimation(event.target.innerText);  // Passing value to buttonanimation fnc as argument to add animation

    })
}

init()