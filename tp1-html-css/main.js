
// let startLine = [];
// let spaceLine = [];

// for (let i = 0; i < 33; i++) {
//     startLine.push('#');
//     spaceLine.push(' ');
// }

// console.log(startLine.join(' '));
// for (let i = 1; i <= 32 / 2; i+=2) {
//     spaceLine[(i - 1)] = '#';
//     spaceLine[32 - (i - 1)] = '#';
//     startLine[i] = '';
//     startLine[32 - (i)] = ' ';
//     console.log(spaceLine.join(' '));
//     console.log(startLine.join(' '));
// }



var starLine = [];
var spaceLine = [];
for (var i = 0; i < 33; i++) {
    starLine.push('*');
    spaceLine.push(' ');
}

function printSpiral(i,size, starLine, spaceLine) {
    if (i < Math.floor(size/2)) {
        starLine[i] = ' ';
        starLine[size-i] = ' ';
        spaceLine[(i-1)] = '*';
        spaceLine[size-(i-1)] = '*';

        console.log(spaceLine.join(' '));
        console.log(starLine.join(' '));

        i = i + 2;
        i = printSpiral(i, size, starLine, spaceLine);

        spaceLine[i] = '*';
        spaceLine[size-(i-2)] = '*';
        starLine[i-1] = ' ';
        starLine[size-(i-3)] = ' ';

        console.log(spaceLine.join(' '));
        console.log(starLine.join(' '));
        return i - 2;
    } else {
        spaceLine[16] = '*';
        return i;
    }
}

// console.log(starLine.join(' '));
// printSpiral(1, 32, starLine, spaceLine);var c = document.getElementById('c');
// var context = c.getContext("2d");
// var centerx = context.canvas.width / 2;
// var centery = context.canvas.height / 2;

// $('#draw').click(function() {
//     a = parseFloat($('#a').val());
//     b = parseFloat($('#b').val());

//     context.clearRect(0, 0, 300, 300);

//     context.moveTo(centerx, centery);
//     context.beginPath();
//     for (i = 0; i < 720; i++) {
//         angle = 0.1 * i;
//         x = centerx + (a + b * angle) * Math.cos(angle);
//         y = centery + (a + b * angle) * Math.sin(angle);

//         context.lineTo(x, y);
//     }
//     context.strokeStyle = "#000";
//     context.stroke();

// });