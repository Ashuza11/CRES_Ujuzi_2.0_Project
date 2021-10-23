/* 
    To do: Faire une Fonction qui:
    - Demande a l'utilisateur d'entre un caracteur
    - Convertie le caracteur en Ascii code et l'afficher 
    - Afficher un spirale du caracteur entrer.

*/

// Demander a l'utilisateur le caractuer 
let char = window.prompt("Entre un caracteur: ");

var index = 0;
var i = char.charCodeAt(index);
console.log(`Le code ASCII du caractuer est: ${i}`);

// Afficher la le spirale des caracteur 
let ligne = [];
let espace = []; // espace
for (var i = 0; i < 33; i++) {
    ligne.push(char);
    espace.push(' ');
}

function printSpiral(i, size, ligne, espace) {
    if (i < Math.floor(size/2)) {
        ligne[i] = ' ';
        ligne[size - i] = ' ';
        espace[(i - 1)] = char;
        espace[size-(i - 1)] = char;

        console.log(espace.join(' '));
        console.log(ligne.join(' '));

        i = i + 2;
        i = printSpiral(i, size, ligne, espace);

        espace[i] = char;
        espace[size-(i-2)] = char;
        ligne[i-1] = ' ';
        ligne[size-(i-3)] = ' ';

        console.log(espace.join(' '));
        console.log(ligne.join(' '));
        return i - 2;
    } else {
        espace[16] = char;
        return i;
    }
}
console.log(ligne.join(' '));
printSpiral(1, 32, ligne, espace);

