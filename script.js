//Movement is by keys a, d

var canvas = document.querySelector('canvas');
canvas.height = window.innerHeight / 2;
canvas.width = window.innerWidth;
var c = canvas.getContext('2d');
var x = 200;
var y = 200;
var tem = 0;
var min = 0;
var secx = 85;
var half = window.innerHeight / 2;
var gradient = c.createLinearGradient(0, 0, innerWidth, innerHeight);
document.addEventListener("keydown", e => {
    if (event.keyCode == 65) {
        x -= 5;
    }
});
document.addEventListener("keydown", e => {
    if (event.keyCode == 68) {
        x += 5;
    }
});
document.addEventListener("keydown", e => {
    if (event.keyCode == 32) {
        y -= 20;
    }
});
//Timer counting
setInterval(t => {
    tem += 1;
}, 1000);
function ahh() {
    requestAnimationFrame(ahh);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();

    // Add three color stops
    gradient.addColorStop(0, '#E49759');
    gradient.addColorStop(.45, '#87ceeb');
    gradient.addColorStop(1, '#4c408e');

    // Set the fill style and draw a rectangle
    c.fillStyle = gradient;
    c.fillRect(0, 0, innerWidth, innerHeight / 2);
    c.beginPath();
    c.fillStyle = 'red';
    c.rect(x, y, 30, 30);
    c.fill();

    //Timer
    c.beginPath();
    c.font = 'bold 60px serif'
    c.fillStyle = 'black';
    //Second
    c.fillText(tem, secx, 50);
    //Minute
    c.fillText(min, 35, 50);
    //Semicolon
    c.fillText(":", 65, 45);
    c.fill();
    //When seconds hit 60
    if (tem == 60) {
        min += 1;
        tem = 0;
    }
    //Time is up
    if (min == 3) {
        alert("Time is up!")
        reset();
    }
    //Adds 0 infront of Single-digit numbers
    if (tem <= 9) {
        c.beginPath();
        c.font = 'bold 60px serif';
        c.fillStyle = 'black';
        c.fillText("0", 85, 50);
        c.fill();
        secx = 115;
    }
    //Removes 0 once time hits 10 seconds
    if (tem >= 10) {
        secx = 85;
    }

    if (y >= innerHeight / 2) {
        y = innerHeight;
    }

    //Updates canvas to fit screen
    if (canvas.width > innerWidth || canvas.width < innerWidth) {
        canvas.width = window.innerWidth;
    }

    //Experimental code
    if (y >= 250) {
        y = y;
    }
    else {
        y += 5;
    }
}
function reset() {
    y = 200;
    tem = 0;
    min = 0;
}
function pause() {
}
ahh();
