


let buttons = ['green', 'red', 'yellow', 'blue'];
let gamePattern = [];
let clickedPattern = [];

const blueSound = new Audio('sounds/blue.mp3');
const greenSound = new Audio('sounds/green.mp3');
const yellowSound = new Audio('sounds/yellow.mp3');
const redSound = new Audio('sounds/red.mp3');
const wrongSound = new Audio('sounds/wrong.mp3');

function nextSequence() {
    let randNo = Math.floor(Math.random() * 4);
    let newColor = buttons[randNo];

    gamePattern.push(newColor);
    $('#' + newColor).addClass('pressed');
    setTimeout(function () {
        $('#' + newColor).removeClass('pressed');
    }, 100);

    switch (newColor) {
        case 'blue':
            blueSound.play();
            break;
        case 'red':
            redSound.play();
            break;
        case 'green':
            greenSound.play();
            break;
        case 'yellow':
            yellowSound.play();
            break;

        default:
            break;
    }

}

$('.btn').click(function () {
    let clicked = $(this).attr("id");
    clickedPattern.push(clicked);

    $('#' + clicked).addClass('pressed');
    setTimeout(function () {
        $('#' + clicked).removeClass('pressed');
    }, 100);

    switch (clicked) {
        case 'blue':
            blueSound.play();
            break;
        case 'red':
            redSound.play();
            break;
        case 'green':
            greenSound.play();
            break;
        case 'yellow':
            yellowSound.play();
            break;

        default:
            break;
    }
    console.log(clickedPattern);
});


nextSequence();
console.log(gamePattern, clickedPattern);


// const blueButton = $('.blue');
// const greenButton = $('.green');
// const yellowButton = $('.yellow');
// const redButton = $('.red');

// blueButton.on('click', () => {
//     blueSound.play();
// });

// greenButton.on('click', () => {
//     greenSound.play();
// });

// yellowButton.on('click', () => {
//     yellowSound.play();
// });

// redButton.on('click', () => {
//     redSound.play();
// });

// $('.btn').click(function () {
//     var $btn = $(this);
//     $btn.addClass('pressed');

//     setTimeout(function () {
//         $btn.removeClass('pressed');
//     }, 100);
// });


// $(document).keydown(function () {
//     var $element;

//     switch (randomNumber) {
//         case 0:
//             $element = $('.green');
//             greenSound.play();
//             break;

//         case 1:
//             $element = $('.red');
//             redSound.play();
//             break;

//         case 2:
//             $element = $('.yellow');
//             yellowSound.play();
//             break;

//         case 3:
//             $element = $('.blue');
//             blueSound.play();
//             break;

//         default:
//             console.log("Number is out of range");
//     }

//     $element.addClass('pressed');
//     setTimeout(function () {
//         $element.removeClass('pressed');
//     }, 100);
// });
