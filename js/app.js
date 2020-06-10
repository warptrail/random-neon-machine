let colors = ["#9B65E8", "#1F2A72", "#1F7221", "#223285", "#C279E1", "#83C040", "#CA00FF", "#00FFC0", "#EC8CD8", "#D4EC8C", "#A0D882", "#58DF0F", "#DF0FD7", "#F59477", "#961212"]

let capSetting = ["round", "square"];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomIntRange(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

console.log(getRandomIntRange(35, 39));

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Resizing the canvas
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;


let innerWidth = canvas.width;
let innerHeight = canvas.height;

window.addEventListener('resize', () => {
    canvas.height = window.innerHeight - 100;
    canvas.width = window.innerWidth - 100;
    innerWidth = canvas.width;
    innerHeight = canvas.height;
});






let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
let dx = (Math.random() - 0.5) * 12;
let dy = (Math.random() - 0.5) * 12;
let radius = 40;

function animate() {
    requestAnimationFrame(animate);

    let wildcard = getRandomIntRange(1, 3);
    let otherWildcard = getRandomIntRange(1, 50);

    if (wildcard === 1) {
        drawCircle()
    } else if (wildcard === 2) {
        drawSquare()
    }

    if (otherWildcard === 42) {
        drawLines();
        ctx.fillStyle = "black";
        ctx.fillRect(getRandomInt(innerWidth), getRandomInt(innerHeight), getRandomInt(100), getRandomInt(100));
    }

    if (otherWildcard === 44) {
        ctx.fillStyle = "black";
        ctx.fillRect(getRandomInt(innerWidth), getRandomInt(innerHeight), getRandomInt(100), getRandomInt(100));
        ctx.fillRect(getRandomInt(innerWidth), getRandomInt(innerHeight), getRandomInt(100), getRandomInt(100));
        ctx.fillRect(getRandomInt(innerWidth), getRandomInt(innerHeight), getRandomInt(100), getRandomInt(100));
        ctx.beginPath();
        ctx.arc(x, y, getRandomIntRange(40, 300), 0, Math.PI * 2, false);
        ctx.strokeStyle = colors[getRandomInt(colors.length)];
        ctx.lineWidth = getRandomIntRange(1, 5);
        ctx.stroke();
    }

    if (otherWildcard === 45) {
        ctx.fillStyle = "black";
        ctx.fillRect(getRandomInt(innerWidth), getRandomInt(innerHeight), getRandomInt(200), getRandomInt(200));
        ctx.fillRect(getRandomInt(innerWidth), getRandomInt(innerHeight), getRandomInt(200), getRandomInt(200));
        ctx.fillRect(getRandomInt(innerWidth), getRandomInt(innerHeight), getRandomInt(200), getRandomInt(200));

    }


    function drawSquare() {
        ctx.strokeStyle = colors[getRandomInt(colors.length)];
        ctx.lineWidth = getRandomIntRange(1, 5);
        let length = getRandomInt(40);
        ctx.strokeRect(x, y, length, length);
        let wildcard = getRandomIntRange(1, 50);
        console.log(wildcard);

        if (wildcard === 1) {
            x = Math.random() * innerWidth;
            dx = 1;
        } else if (wildcard === 2) {
            y = Math.random() * innerHeight;
            dy = 1;
        } else if (wildcard === 3) {
            ctx.fillStyle = "black";
            ctx.fillRect(getRandomInt(innerWidth), getRandomInt(innerHeight), getRandomInt(80), getRandomInt(80));
        }


        if (x + radius > innerWidth || x - radius < 0) {
            dx = -dx;
        }
        if (y + radius > innerHeight || y - radius < 0) {
            dy = -dy;
        }

        x += dx;
        y += dy;
    }


    function drawCircle() {
        ctx.beginPath();
        ctx.arc(x, y, getRandomInt(40), 0, Math.PI * 2, false);
        ctx.strokeStyle = colors[getRandomInt(colors.length)];
        ctx.lineWidth = getRandomIntRange(1, 5);
        ctx.stroke();

        if (x + radius > innerWidth || x - radius < 0) {
            dx = -dx;
        }
        if (y + radius > innerHeight || y - radius < 0) {
            dy = -dy;
        }

        x += dx;
        y += dy;
    }

    function drawLines() {
        ctx.beginPath();
        ctx.strokeStyle = colors[getRandomInt(colors.length)];
        ctx.lineWidth = getRandomIntRange(1, 5);
        ctx.moveTo(getRandomInt(window.innerWidth), getRandomInt(window.innerHeight)); // lifting up your pen and putting it at the 100, 100 corrdinates
        ctx.lineTo(getRandomInt(window.innerWidth), getRandomInt(window.innerHeight));
        ctx.lineTo(getRandomInt(window.innerWidth), getRandomInt(window.innerHeight));
        ctx.lineTo(getRandomInt(window.innerWidth), getRandomInt(window.innerHeight));
        ctx.lineTo(getRandomInt(window.innerWidth), getRandomInt(window.innerHeight));
        ctx.lineTo(getRandomInt(window.innerWidth), getRandomInt(window.innerHeight));
        ctx.lineTo(getRandomInt(window.innerWidth), getRandomInt(window.innerHeight));
        ctx.closePath();
        ctx.stroke();
    }

}

animate();